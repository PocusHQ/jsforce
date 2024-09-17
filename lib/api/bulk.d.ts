/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/**
 * @file Manages Salesforce Bulk API related operations
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
import { Duplex, Readable, Writable } from 'stream';
import Connection from '../connection';
import { Serializable, Parsable } from '../record-stream';
import { Logger } from '../util/logger';
import { HttpMethods, Record, Schema } from '../types';
export type BulkOperation = 'insert' | 'update' | 'upsert' | 'delete' | 'hardDelete' | 'query' | 'queryAll';
export type BulkOptions = {
    extIdField?: string;
    concurrencyMode?: 'Serial' | 'Parallel';
    assignmentRuleId?: string;
};
export type JobState = 'Open' | 'Closed' | 'Aborted' | 'Failed' | 'Unknown' | 'NotProcessed';
export type JobInfo = {
    id: string;
    object: string;
    operation: BulkOperation;
    state: JobState;
};
export type BatchState = 'Queued' | 'InProgress' | 'Completed' | 'Failed' | 'NotProcessed';
export type BatchInfo = {
    id: string;
    jobId: string;
    state: BatchState;
    stateMessage: string;
    numberRecordsProcessed: string;
    numberRecordsFailed: string;
    totalProcessingTime: string;
};
export type BulkQueryBatchResult = Array<{
    id: string;
    batchId: string;
    jobId: string;
}>;
export type BulkIngestBatchResult = Array<{
    id: string | null;
    success: boolean;
    created: boolean;
    errors: string[];
}>;
export type BatchResult<Opr extends BulkOperation> = Opr extends 'query' | 'queryAll' ? BulkQueryBatchResult : BulkIngestBatchResult;
export type BulkRequest = {
    method: HttpMethods;
    path?: string;
    body?: string;
    headers?: {
        [name: string]: string;
    };
    responseType?: string;
};
/**
 * Class for Bulk API Job
 */
export declare class Job<S extends Schema, Opr extends BulkOperation> extends EventEmitter {
    type: string | null;
    operation: Opr | null;
    options: BulkOptions;
    id: string | null;
    state: JobState;
    _bulk: Bulk<S>;
    _batches: {
        [id: string]: Batch<S, Opr>;
    };
    _jobInfo: Promise<JobInfo> | undefined;
    _error: Error | undefined;
    /**
     *
     */
    constructor(bulk: Bulk<S>, type: string | null, operation: Opr | null, options: BulkOptions | null, jobId?: string);
    /**
     * Return latest jobInfo from cache
     */
    info(): Promise<JobInfo>;
    /**
     * Open new job and get jobinfo
     */
    open(): Promise<JobInfo>;
    /**
     * Create a new batch instance in the job
     */
    createBatch(): Batch<S, Opr>;
    /**
     * Get a batch instance specified by given batch ID
     */
    batch(batchId: string): Batch<S, Opr>;
    /**
     * Check the latest job status from server
     */
    check(): Promise<JobInfo>;
    /**
     * Wait till the job is assigned to server
     */
    ready(): Promise<string>;
    /**
     * List all registered batch info in job
     */
    list(): Promise<BatchInfo[]>;
    /**
     * Close opened job
     */
    close(): Promise<JobInfo | undefined>;
    /**
     * Set the status to abort
     */
    abort(): Promise<JobInfo | undefined>;
    /**
     * @private
     */
    _changeState(state: JobState): Promise<JobInfo>;
}
/**
 * Batch (extends Writable)
 */
export declare class Batch<S extends Schema, Opr extends BulkOperation> extends Writable {
    job: Job<S, Opr>;
    id: string | undefined;
    _bulk: Bulk<S>;
    _uploadStream: Serializable;
    _downloadStream: Parsable;
    _dataStream: Duplex;
    _result: Promise<BatchResult<Opr>> | undefined;
    _error: Error | undefined;
    /**
     *
     */
    constructor(job: Job<S, Opr>, id?: string);
    /**
     * Connect batch API and create stream instance of request/response
     *
     * @private
     */
    _createRequestStream(): Duplex;
    /**
     * Implementation of Writable
     */
    _write(record_: Record, enc: BufferEncoding, cb: () => void): void;
    /**
     * Returns duplex stream which accepts CSV data input and batch result output
     */
    stream(): Duplex;
    /**
     * Execute batch operation
     */
    execute(input?: string | Record[] | Readable): this;
    run: (input?: string | Record[] | Readable) => this;
    exec: (input?: string | Record[] | Readable) => this;
    /**
     * Promise/A+ interface
     * Delegate to promise, return promise instance for batch result
     */
    then(onResolved: (res: BatchResult<Opr>) => void, onReject: (err: any) => void): Promise<void>;
    /**
     * Check the latest batch status in server
     */
    check(): Promise<BatchInfo>;
    /**
     * Polling the batch result and retrieve
     */
    poll(interval: number, timeout: number): void;
    /**
     * Retrieve batch result
     */
    retrieve(): Promise<BulkQueryBatchResult | BulkIngestBatchResult>;
    /**
     * Fetch query batch result as a record stream
     *
     * @param {String} resultId - Result id
     * @returns {RecordStream} - Record stream, convertible to CSV data stream
     */
    result(resultId: string): Parsable<Record>;
}
/**
 * Class for Bulk API
 *
 * @class
 */
export declare class Bulk<S extends Schema> {
    private readonly _conn;
    readonly _logger: Logger;
    /**
     * Polling interval in milliseconds
     *
     * Default: 1000 (1 second)
     */
    pollInterval: number;
    /**
     * Polling timeout in milliseconds
     *
     * Default: 30000 (30 seconds)
     */
    pollTimeout: number;
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     *
     */
    _request<T>(request_: BulkRequest): import("../util/promise").StreamPromise<T>;
    /**
     * Create and start bulkload job and batch
     *
     * This method will return a Batch instance (writable stream)
     * which you can write records into as a CSV string.
     *
     * Batch also implements the a promise interface so you can `await` this method to get the job results.
     *
     * @example
     * // Insert an array of records and get the job results
     *
     * const res = await connection.bulk.load('Account', 'insert', accounts)
     *
     * @example
     * // Insert records from a csv file using the returned batch stream
     *
     * const csvFile = fs.createReadStream('accounts.csv')
     *
     * const batch = conn.bulk.load('Account', 'insert')
     *
     * // The `response` event is emitted when the job results are retrieved
     * batch.on('response', res => {
     *   console.log(res)
     * })
  
     * csvFile.pipe(batch.stream())
     *
     *
     */
    load<Opr extends BulkOperation>(type: string, operation: Opr, input?: Record[] | Readable | string): Batch<S, Opr>;
    load<Opr extends BulkOperation>(type: string, operation: Opr, optionsOrInput?: BulkOptions | Record[] | Readable | string, input?: Record[] | Readable | string): Batch<S, Opr>;
    /**
     * Execute bulk query and get record stream
     */
    query(soql: string): Promise<Parsable<Record>>;
    /**
     * Create a new job instance
     */
    createJob<Opr extends BulkOperation>(type: string, operation: Opr, options?: BulkOptions): Job<S, Opr>;
    /**
     * Get a job instance specified by given job ID
     *
     * @param {String} jobId - Job ID
     * @returns {Bulk~Job}
     */
    job<Opr extends BulkOperation>(jobId: string): Job<S, Opr>;
}
export default Bulk;
