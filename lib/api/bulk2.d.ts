/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from 'events';
import { Readable } from 'stream';
import Connection from '../connection';
import { Parsable } from '../record-stream';
import { Record, Schema } from '../types';
export type IngestOperation = 'insert' | 'update' | 'upsert' | 'delete' | 'hardDelete';
type BaseJobInfo = {
    id: string;
    object: string;
    createdById: string;
    createdDate: string;
    systemModstamp: string;
    apiVersion: number;
    lineEnding: 'LF' | 'CRLF';
    columnDelimiter: 'BACKQUOTE' | 'CARET' | 'COMMA' | 'PIPE' | 'SEMICOLON' | 'TAB';
    concurrencyMode: 'Parallel';
    contentType: 'CSV';
    numberRecordsProcessed: number;
    retries: number;
    totalProcessingTime: number;
};
export type QueryJobInfoV2 = BaseJobInfo & {
    operation: 'query' | 'queryAll';
    state: 'UploadComplete' | 'InProgress' | 'Aborted' | 'JobComplete' | 'Failed';
    jobType: 'V2Query';
    isPkChunkingSupported: boolean;
};
export type JobInfoV2 = BaseJobInfo & {
    apexProcessingTime: number;
    apiActiveProcessingTime: number;
    assignmentRuleId?: string;
    contentUrl: string;
    errorMessage?: string;
    externalIdFieldName?: string;
    jobType: 'BigObjectIngest' | 'Classic' | 'V2Ingest';
    operation: IngestOperation;
    state: 'Open' | 'UploadComplete' | 'InProgress' | 'JobComplete' | 'Aborted' | 'Failed';
    numberRecordsFailed: number;
};
export type IngestJobV2SuccessfulResults<S extends Schema> = Array<{
    sf__Created: 'true' | 'false';
    sf__Id: string;
} & S>;
export type IngestJobV2FailedResults<S extends Schema> = Array<{
    sf__Error: string;
    sf__Id: string;
} & S>;
export type IngestJobV2UnprocessedRecords<S extends Schema> = S[] | string;
export type IngestJobV2Results<S extends Schema> = {
    successfulResults: IngestJobV2SuccessfulResults<S>;
    failedResults: IngestJobV2FailedResults<S>;
    unprocessedRecords: IngestJobV2UnprocessedRecords<S>;
};
type NewIngestJobOptions = Required<Pick<JobInfoV2, 'object' | 'operation'>> & Partial<Pick<JobInfoV2, 'assignmentRuleId' | 'columnDelimiter' | 'externalIdFieldName' | 'lineEnding' | 'contentType'>>;
type NewQueryJobOptions = {
    query: string;
    operation: QueryJobInfoV2['operation'];
} & Partial<Pick<QueryJobInfoV2, 'columnDelimiter' | 'lineEnding'>>;
type CreateIngestJobV2Options = {
    bodyParams: NewIngestJobOptions;
    pollingOptions: BulkV2PollingOptions;
};
type ExistingIngestJobOptions = {
    id: string;
    pollingOptions: BulkV2PollingOptions;
};
type CreateQueryJobV2Options = {
    bodyParams: NewQueryJobOptions;
    pollingOptions: BulkV2PollingOptions;
};
type ExistingQueryJobV2Options = {
    id: string;
    pollingOptions: BulkV2PollingOptions;
};
type BulkV2PollingOptions = {
    pollInterval: number;
    pollTimeout: number;
};
export declare class BulkV2<S extends Schema> {
    private connection;
    private logger;
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
    constructor(connection: Connection<S>);
    /**
     * Create an instance of an ingest job object.
     *
     * @params {NewIngestJobOptions} options object
     * @returns {IngestJobV2} An ingest job instance
     * @example
     * // Upsert records to the Account object.
     *
     * const job = connection.bulk2.createJob({
     *   operation: 'insert'
     *   object: 'Account',
     * });
     *
     * // create the job in the org
     * await job.open()
     *
     * // upload data
     * await job.uploadData(csvFile)
     *
     * // finished uploading data, mark it as ready for processing
     * await job.close()
     */
    createJob(options: NewIngestJobOptions): IngestJobV2<S>;
    /**
     * Get an ingest or query job instance specified by a given job ID
     *
     * @param options Options object with a job ID
     * @returns IngestJobV2 An ingest job
     */
    job(type: 'query', options: Pick<ExistingQueryJobV2Options, 'id'>): QueryJobV2<S>;
    job(type: 'ingest', options: Pick<ExistingIngestJobOptions, 'id'>): IngestJobV2<S>;
    /**
     * Create, upload, and start bulkload job
     */
    loadAndWaitForResults(options: NewIngestJobOptions & Partial<BulkV2PollingOptions> & {
        input: Record[] | Readable | string;
    }): Promise<IngestJobV2Results<S>>;
    /**
     * Execute bulk query and get a record stream.
     *
     * Default timeout: 10000ms
     *
     * @param soql SOQL query
     * @param options
     *
     * @returns {RecordStream} - Record stream, convertible to a CSV data stream
     */
    query(soql: string, options?: Partial<BulkV2PollingOptions> & {
        scanAll?: boolean;
        columnDelimiter?: QueryJobInfoV2['columnDelimiter'];
        lineEnding?: QueryJobInfoV2['lineEnding'];
    }): Promise<Parsable<Record>>;
}
export declare class QueryJobV2<S extends Schema> extends EventEmitter {
    private readonly connection;
    private readonly logger;
    private readonly _id?;
    private readonly bodyParams?;
    private readonly pollingOptions;
    private error;
    private jobInfo?;
    private locator?;
    constructor(conn: Connection<S>, options: ExistingQueryJobV2Options | CreateQueryJobV2Options);
    /**
     * Get the query job ID.
     *
     * @returns {string} query job Id.
     */
    get id(): string;
    /**
     * Get the query job info.
     *
     * @returns {Promise<QueryJobInfoV2>} query job information.
     */
    getInfo(): QueryJobInfoV2;
    /**
     * Creates a query job
     *
     * @returns {Promise<QueryJobInfoV2>} job information.
     */
    open(): Promise<QueryJobInfoV2>;
    /**
     * Abort the job
     *
     * The 'aborted' event is emitted when the job successfully aborts.
     * @returns {Promise<QueryJobInfoV2>} job information.
     */
    abort(): Promise<QueryJobInfoV2>;
    /**
     * Poll for the state of the processing for the job.
     *
     * @param interval Polling interval in milliseconds
     * @param timeout Polling timeout in milliseconds
     * @returns {Promise<Record[]>} A promise that resolves when the job finished being processed.
     */
    poll(interval?: number, timeout?: number): Promise<void>;
    /**
     * Check the latest job status
     *
     * @returns {Promise<QueryJobInfoV2>} job information.
     */
    check(): Promise<QueryJobInfoV2>;
    /**
     * Get the results for a query job as a record stream
     *
     * This method assumes the job finished being processed
     * @returns {RecordStream} - Record stream, convertible to a CSV data stream
     */
    result(): Promise<Parsable<Record>>;
    /**
     * Deletes a query job.
     */
    delete(): Promise<void>;
    private createQueryRequest;
}
/**
 * Class for Bulk API V2 Ingest Job
 */
export declare class IngestJobV2<S extends Schema> extends EventEmitter {
    private readonly connection;
    private readonly logger;
    private readonly _id?;
    private readonly bodyParams?;
    private readonly jobData;
    private pollingOptions;
    private bulkJobSuccessfulResults?;
    private bulkJobFailedResults?;
    private bulkJobUnprocessedRecords?;
    private error;
    private jobInfo?;
    /**
     *
     */
    constructor(conn: Connection<S>, options: CreateIngestJobV2Options | ExistingIngestJobOptions);
    /**
     * Get the query job ID.
     *
     * @returns {string} query job Id.
     */
    get id(): string;
    /**
     * Get the query job info.
     *
     * @returns {Promise<QueryJobInfoV2>} ingest job information.
     */
    getInfo(): JobInfoV2;
    /**
     * Create a job representing a bulk operation in the org
     *
     * @returns {Promise<QueryJobInfoV2>} job information.
     */
    open(): Promise<Partial<JobInfoV2>>;
    /** Upload data for a job in CSV format
     *
     *  @param input CSV as a string, or array of records or readable stream
     */
    uploadData(input: string | Record[] | Readable): Promise<void>;
    /**
     * Close opened job
     *
     * This method will notify the org  that the upload of job data is complete and is ready for processing.
     */
    close(): Promise<void>;
    /**
     * Set the status to abort
     */
    abort(): Promise<void>;
    /**
     * Poll for the state of the processing for the job.
     *
     * This method will only throw after a timeout. To capture a
     * job failure while polling you must set a listener for the
     * `failed` event before calling it:
     *
     * job.on('failed', (err) => console.error(err))
     * await job.poll()
     *
     * @param interval Polling interval in milliseconds
     * @param timeout Polling timeout in milliseconds
     * @returns {Promise<void>} A promise that resolves when the job finishes successfully
     */
    poll(interval?: number, timeout?: number): Promise<void>;
    /**
     * Check the latest batch status in server
     */
    check(): Promise<JobInfoV2>;
    /** Return all record results
     *
     * This method will return successful, failed and unprocessed records
     *
     * @returns Promise<IngestJobV2Results>
     */
    getAllResults(): Promise<IngestJobV2Results<S>>;
    /** Return successful results
     *
     * The order of records returned is not guaranteed to match the ordering of the uploaded data.
     *
     * @returns Promise<IngestJobV2SuccessfulResults>
     */
    getSuccessfulResults(): Promise<IngestJobV2SuccessfulResults<S>>;
    /** Return failed results
     *
     * The order of records in the response is not guaranteed to match the ordering of records in the original job data.
     *
     * @returns Promise<IngestJobV2SuccessfulResults>
     */
    getFailedResults(): Promise<IngestJobV2FailedResults<S>>;
    /** Return unprocessed results
     *
     * The unprocessed records endpoint returns records as a CSV.
     * If the request helper is able to parse it, you get the records
     * as an array of objects.
     * If unable to parse the it (bad CSV), you get the raw response as a string.
     *
     * The order of records in the response is not guaranteed to match the ordering of records in the original job data.
     *
     * @returns Promise<IngestJobV2UnprocessedRecords>
     */
    getUnprocessedRecords(): Promise<IngestJobV2UnprocessedRecords<S>>;
    /**
     * Deletes an ingest job.
     */
    delete(): Promise<void>;
    private createIngestRequest;
}
export default BulkV2;
