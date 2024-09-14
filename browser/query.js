import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Reflect$construct from "@babel/runtime-corejs3/core-js-stable/reflect/construct";
import _Array$from from "@babel/runtime-corejs3/core-js-stable/array/from";
import _Symbol from "@babel/runtime-corejs3/core-js-stable/symbol";
import _getIteratorMethod from "@babel/runtime-corejs3/core-js/get-iterator-method";
import _typeof from "@babel/runtime-corejs3/helpers/typeof";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
var _excluded = ["fields", "includes", "sort"],
  _excluded2 = ["conditions", "fields"];
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { var _context38; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context38 = Object.prototype.toString.call(o)).call(_context38, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import "core-js/modules/es.error.cause.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.push.js";
import "core-js/modules/es.array.sort.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.test.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.string.includes.js";
import "core-js/modules/es.string.split.js";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? _Reflect$construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys(e, r) { var t = _Object$keys(e); if (_Object$getOwnPropertySymbols) { var o = _Object$getOwnPropertySymbols(e); r && (o = _filterInstanceProperty(o).call(o, function (r) { return _Object$getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context36, _context37; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _forEachInstanceProperty(_context36 = ownKeys(Object(t), !0)).call(_context36, function (r) { _defineProperty(e, r, t[r]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : _forEachInstanceProperty(_context37 = ownKeys(Object(t))).call(_context37, function (r) { _Object$defineProperty(e, r, _Object$getOwnPropertyDescriptor(t, r)); }); } return e; }
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";
import _sortInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/sort";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _JSON$stringify from "@babel/runtime-corejs3/core-js-stable/json/stringify";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _Array$isArray from "@babel/runtime-corejs3/core-js-stable/array/is-array";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _Object$entries from "@babel/runtime-corejs3/core-js-stable/object/entries";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
/**
 * @file Manages query for records in Salesforce
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
import { getLogger } from './util/logger';
import RecordStream, { Serializable } from './record-stream';
import { createSOQL } from './soql-builder';

/**
 *
 */

/**
 *
 */

/**
 *
 */

var ResponseTargetValues = ['QueryResult', 'Records', 'SingleRecord', 'Count'];
export var ResponseTargets = _reduceInstanceProperty(ResponseTargetValues).call(ResponseTargetValues, function (values, target) {
  return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, target, target));
}, {});

// QRT extends 'Count'

/**
 *
 */
var DEFAULT_BULK_THRESHOLD = 200;
var DEFAULT_BULK_API_VERSION = 1;

/**
 * Query
 */
export var Query = /*#__PURE__*/function (_EventEmitter) {
  /**
   *
   */
  function Query(conn, config, options) {
    var _this;
    _classCallCheck(this, Query);
    _this = _callSuper(this, Query);
    _defineProperty(_this, "_config", {});
    _defineProperty(_this, "_children", []);
    _defineProperty(_this, "_executed", false);
    _defineProperty(_this, "_finished", false);
    _defineProperty(_this, "_chaining", false);
    _defineProperty(_this, "totalSize", 0);
    _defineProperty(_this, "totalFetched", 0);
    _defineProperty(_this, "records", null);
    /**
     * Synonym of Query#skip()
     */
    _defineProperty(_this, "offset", _this.skip);
    /**
     * Synonym of Query#sort()
     */
    _defineProperty(_this, "orderby", _sortInstanceProperty(_this));
    /**
     * Synonym of Query#execute()
     */
    _defineProperty(_this, "exec", _this.execute);
    /**
     * Synonym of Query#execute()
     */
    _defineProperty(_this, "run", _this.execute);
    /**
     * Synonym of Query#destroy()
     */
    _defineProperty(_this, "delete", _this.destroy);
    /**
     * Synonym of Query#destroy()
     */
    _defineProperty(_this, "del", _this.destroy);
    _this._conn = conn;
    _this._logger = conn._logLevel ? Query._logger.createInstance(conn._logLevel) : Query._logger;
    if (typeof config === 'string') {
      _this._soql = config;
      _this._logger.debug("config is soql: ".concat(config));
    } else if (typeof config.locator === 'string') {
      var locator = config.locator;
      _this._logger.debug("config is locator: ".concat(locator));
      _this._locator = _includesInstanceProperty(locator).call(locator, '/') ? _this.urlToLocator(locator) : locator;
    } else {
      _this._logger.debug("config is QueryConfig: ".concat(_JSON$stringify(config)));
      var _ref = config,
        _fields = _ref.fields,
        includes = _includesInstanceProperty(_ref),
        _sort2 = _sortInstanceProperty(_ref),
        _config = _objectWithoutProperties(_ref, _excluded);
      _this._config = _config;
      _this.select(_fields);
      if (includes) {
        _this.includeChildren(includes);
      }
      if (_sort2) {
        _sortInstanceProperty(_this).call(_this, _sort2);
      }
    }
    _this._options = _objectSpread({
      headers: {},
      maxFetch: 10000,
      autoFetch: false,
      scanAll: false,
      responseTarget: 'QueryResult',
      storeRecords: true
    }, options || {});
    if (_this._options.storeRecords) {
      _this.records = [];
    }

    // promise instance
    _this._promise = new _Promise(function (resolve, reject) {
      _this.on('response', resolve);
      _this.on('error', reject);
    });
    _this._stream = new Serializable();
    _this.on('record', function (record) {
      return _this._stream.push(record);
    });
    _this.on('end', function () {
      return _this._stream.push(null);
    });
    _this.on('error', function (err) {
      try {
        _this._stream.emit('error', err);
      } catch (e) {
        // eslint-disable-line no-empty
      }
    });
    return _this;
  }

  /**
   * Select fields to include in the returning result
   */
  _inherits(Query, _EventEmitter);
  return _createClass(Query, [{
    key: "select",
    value: function select() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
      if (this._soql) {
        throw Error('Cannot set select fields for the query which has already built SOQL.');
      }
      function toFieldArray(fields) {
        var _context, _context2, _context4, _context5;
        return typeof fields === 'string' ? fields.split(/\s*,\s*/) : _Array$isArray(fields) ? _reduceInstanceProperty(_context = _mapInstanceProperty(_context2 = fields).call(_context2, toFieldArray)).call(_context, function (fs, f) {
          var _context3;
          return _concatInstanceProperty(_context3 = []).call(_context3, _toConsumableArray(fs), _toConsumableArray(f));
        }, []) : _reduceInstanceProperty(_context4 = _mapInstanceProperty(_context5 = _Object$entries(fields)).call(_context5, function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            f = _ref3[0],
            v = _ref3[1];
          if (typeof v === 'number' || typeof v === 'boolean') {
            return v ? [f] : [];
          } else {
            var _context6;
            return _mapInstanceProperty(_context6 = toFieldArray(v)).call(_context6, function (p) {
              var _context7;
              return _concatInstanceProperty(_context7 = "".concat(f, ".")).call(_context7, p);
            });
          }
        })).call(_context4, function (fs, f) {
          var _context8;
          return _concatInstanceProperty(_context8 = []).call(_context8, _toConsumableArray(fs), _toConsumableArray(f));
        }, []);
      }
      if (fields) {
        this._config.fields = toFieldArray(fields);
      }
      // force convert query record type without changing instance;
      return this;
    }

    /**
     * Set query conditions to filter the result records
     */
  }, {
    key: "where",
    value: function where(conditions) {
      if (this._soql) {
        throw Error('Cannot set where conditions for the query which has already built SOQL.');
      }
      this._config.conditions = conditions;
      return this;
    }

    /**
     * Limit the returning result
     */
  }, {
    key: "limit",
    value: function limit(_limit) {
      if (this._soql) {
        throw Error('Cannot set limit for the query which has already built SOQL.');
      }
      this._config.limit = _limit;
      return this;
    }

    /**
     * Skip records
     */
  }, {
    key: "skip",
    value: function skip(offset) {
      if (this._soql) {
        throw Error('Cannot set skip/offset for the query which has already built SOQL.');
      }
      this._config.offset = offset;
      return this;
    }
  }, {
    key: "sort",
    value: function (_sort) {
      function sort(_x, _x2) {
        return _sort.apply(this, arguments);
      }
      sort.toString = function () {
        return _sort.toString();
      };
      return sort;
    }(function (sort, dir) {
      if (this._soql) {
        throw Error('Cannot set sort for the query which has already built SOQL.');
      }
      if (typeof sort === 'string' && typeof dir !== 'undefined') {
        this._config.sort = [[sort, dir]];
      } else {
        this._config.sort = sort;
      }
      return this;
    })
  }, {
    key: "include",
    value: function include(childRelName, conditions, fields) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this._soql) {
        throw Error('Cannot include child relationship into the query which has already built SOQL.');
      }
      var childConfig = {
        fields: fields === null ? undefined : fields,
        table: childRelName,
        conditions: conditions === null ? undefined : conditions,
        limit: options.limit,
        offset: options.offset,
        sort: _sortInstanceProperty(options)
      };
      // eslint-disable-next-line no-use-before-define
      var childQuery = new SubQuery(this._conn, childRelName, childConfig, this);
      this._children.push(childQuery);
      return childQuery;
    }

    /**
     * Include child relationship queries, but not moving down to the children context
     */
  }, {
    key: "includeChildren",
    value: function includeChildren(includes) {
      if (this._soql) {
        throw Error('Cannot include child relationship into the query which has already built SOQL.');
      }
      for (var _i = 0, _arr = _Object$keys(includes); _i < _arr.length; _i++) {
        var crname = _arr[_i];
        var _ref4 = includes[crname],
          _conditions = _ref4.conditions,
          _fields2 = _ref4.fields,
          _options = _objectWithoutProperties(_ref4, _excluded2);
        this.include(crname, _conditions, _fields2, _options);
      }
      return this;
    }

    /**
     * Setting maxFetch query option
     */
  }, {
    key: "maxFetch",
    value: function maxFetch(_maxFetch) {
      this._options.maxFetch = _maxFetch;
      return this;
    }

    /**
     * Switching auto fetch mode
     */
  }, {
    key: "autoFetch",
    value: function autoFetch(_autoFetch) {
      this._options.autoFetch = _autoFetch;
      return this;
    }

    /**
     * Set flag to scan all records including deleted and archived.
     */
  }, {
    key: "scanAll",
    value: function scanAll(_scanAll) {
      this._options.scanAll = _scanAll;
      return this;
    }

    /**
     *
     */
  }, {
    key: "setResponseTarget",
    value: function setResponseTarget(responseTarget) {
      if (responseTarget in ResponseTargets) {
        this._options.responseTarget = responseTarget;
      }
      // force change query response target without changing instance
      return this;
    }

    /**
     * Execute query and fetch records from server.
     */
  }, {
    key: "execute",
    value: function execute() {
      var _this2 = this;
      var options_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this._executed) {
        throw new Error('re-executing already executed query');
      }
      if (this._finished) {
        throw new Error('executing already closed query');
      }
      var options = {
        headers: options_.headers || this._options.headers,
        responseTarget: options_.responseTarget || this._options.responseTarget,
        autoFetch: options_.autoFetch || this._options.autoFetch,
        maxFetch: options_.maxFetch || this._options.maxFetch,
        scanAll: options_.scanAll || this._options.scanAll,
        storeRecords: options_.storeRecords || this._options.storeRecords
      };

      // collect fetched records in array
      // only when response target is Records and
      // either callback or chaining promises are available to this query.
      this.once('fetch', function () {
        if (options.responseTarget === ResponseTargets.Records && _this2._chaining) {
          _this2._logger.debug('--- collecting all fetched records ---');
          var records = [];
          var onRecord = function onRecord(record) {
            return records.push(record);
          };
          _this2.on('record', onRecord);
          _this2.once('end', function () {
            _this2.removeListener('record', onRecord);
            _this2.emit('response', records, _this2);
          });
        }
      });

      // flag to prevent re-execution
      this._executed = true;
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              // start actual query
              _this2._logger.debug('>>> Query start >>>');
              _context9.prev = 1;
              _context9.next = 4;
              return _this2._execute(options);
            case 4:
              _this2._logger.debug('*** Query finished ***');
              _context9.next = 11;
              break;
            case 7:
              _context9.prev = 7;
              _context9.t0 = _context9["catch"](1);
              _this2._logger.debug('--- Query error ---', _context9.t0);
              _this2.emit('error', _context9.t0);
            case 11:
            case "end":
              return _context9.stop();
          }
        }, _callee, null, [[1, 7]]);
      }))();

      // return Query instance for chaining
      return this;
    }
  }, {
    key: "locatorToUrl",
    value: function locatorToUrl() {
      return this._locator ? [this._conn._baseUrl(), '/query/', this._locator].join('') : '';
    }
  }, {
    key: "urlToLocator",
    value: function urlToLocator(url) {
      return url.split('/').pop();
    }
  }, {
    key: "constructResponse",
    value: function constructResponse(rawDone, responseTarget) {
      var _this$records$, _this$records, _this$records2, _this$records3;
      switch (responseTarget) {
        case 'Count':
          return this.totalSize;
        case 'SingleRecord':
          return (_this$records$ = (_this$records = this.records) === null || _this$records === void 0 ? void 0 : _this$records[0]) !== null && _this$records$ !== void 0 ? _this$records$ : null;
        case 'Records':
          return (_this$records2 = this.records) !== null && _this$records2 !== void 0 ? _this$records2 : [];
        // QueryResult is default response target
        default:
          return _objectSpread(_objectSpread({}, {
            records: (_this$records3 = this.records) !== null && _this$records3 !== void 0 ? _this$records3 : [],
            totalSize: this.totalSize,
            done: rawDone !== null && rawDone !== void 0 ? rawDone : true // when no records, done is omitted
          }), this._locator ? {
            nextRecordsUrl: this.locatorToUrl()
          } : {});
      }
    }
    /**
     * @private
     */
  }, {
    key: "_execute",
    value: (function () {
      var _execute2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(options) {
        var _data$records$length, _data$records;
        var headers, responseTarget, autoFetch, maxFetch, scanAll, storeRecords, url, soql, data, _context10, _this$records4, _this$records$length, _this$records5, _context11, _this$records$length2, _this$records6, numRecords, totalFetched, i, record, response;
        return _regeneratorRuntime.wrap(function _callee2$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              headers = options.headers, responseTarget = options.responseTarget, autoFetch = options.autoFetch, maxFetch = options.maxFetch, scanAll = options.scanAll, storeRecords = options.storeRecords;
              this._logger.debug('execute with options', options);
              if (!this._locator) {
                _context12.next = 6;
                break;
              }
              url = this.locatorToUrl();
              _context12.next = 11;
              break;
            case 6:
              _context12.next = 8;
              return this.toSOQL();
            case 8:
              soql = _context12.sent;
              this._logger.debug("SOQL = ".concat(soql));
              url = [this._conn._baseUrl(), '/', scanAll ? 'queryAll' : 'query', '?q=', encodeURIComponent(soql)].join('');
            case 11:
              _context12.next = 13;
              return this._conn.request({
                method: 'GET',
                url: url,
                headers: headers
              });
            case 13:
              data = _context12.sent;
              this.emit('fetch');
              this.totalSize = data.totalSize;
              if (storeRecords) {
                this.records = _concatInstanceProperty(_context10 = (_this$records4 = this.records) !== null && _this$records4 !== void 0 ? _this$records4 : []).call(_context10, maxFetch - ((_this$records$length = (_this$records5 = this.records) === null || _this$records5 === void 0 ? void 0 : _this$records5.length) !== null && _this$records$length !== void 0 ? _this$records$length : 0) > data.records.length ? data.records : _sliceInstanceProperty(_context11 = data.records).call(_context11, 0, maxFetch - ((_this$records$length2 = (_this$records6 = this.records) === null || _this$records6 === void 0 ? void 0 : _this$records6.length) !== null && _this$records$length2 !== void 0 ? _this$records$length2 : 0)));
              }
              this._locator = data.nextRecordsUrl ? this.urlToLocator(data.nextRecordsUrl) : undefined;
              this._finished = this._finished || data.done || !autoFetch || this.totalFetched >= maxFetch ||
              // this is what the response looks like when there are no results
              data.records.length === 0 && data.done === undefined;

              // streaming record instances
              numRecords = (_data$records$length = (_data$records = data.records) === null || _data$records === void 0 ? void 0 : _data$records.length) !== null && _data$records$length !== void 0 ? _data$records$length : 0;
              totalFetched = this.totalFetched;
              i = 0;
            case 22:
              if (!(i < numRecords)) {
                _context12.next = 32;
                break;
              }
              if (!(totalFetched >= maxFetch)) {
                _context12.next = 26;
                break;
              }
              this._finished = true;
              return _context12.abrupt("break", 32);
            case 26:
              record = data.records[i];
              this.emit('record', record, totalFetched, this);
              totalFetched += 1;
            case 29:
              i++;
              _context12.next = 22;
              break;
            case 32:
              this.totalFetched = totalFetched;
              if (!this._finished) {
                _context12.next = 40;
                break;
              }
              response = this.constructResponse(data.done, responseTarget); // only fire response event when it should be notified per fetch
              if (responseTarget !== ResponseTargets.Records) {
                this.emit('response', response, this);
              }
              this.emit('end');
              return _context12.abrupt("return", response);
            case 40:
              return _context12.abrupt("return", this._execute(options));
            case 41:
            case "end":
              return _context12.stop();
          }
        }, _callee2, this);
      }));
      function _execute(_x3) {
        return _execute2.apply(this, arguments);
      }
      return _execute;
    }()
    /**
     * Obtain readable stream instance
     */
    )
  }, {
    key: "stream",
    value: function stream() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'csv';
      if (!this._finished && !this._executed) {
        this.execute({
          autoFetch: true
        });
      }
      return type === 'record' ? this._stream : this._stream.stream(type);
    }

    /**
     * Pipe the queried records to another stream
     * This is for backward compatibility; Query is not a record stream instance anymore in 2.0.
     * If you want a record stream instance, use `Query#stream('record')`.
     */
  }, {
    key: "pipe",
    value: function pipe(stream) {
      return this.stream('record').pipe(stream);
    }

    /**
     * @protected
     */
  }, {
    key: "_expandFields",
    value: (function () {
      var _expandFields2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(sobject_) {
        var _context13, _context14, _context15, _context17, _context18;
        var _this$_config, _this$_config$fields, fields, _this$_config$table, table, sobject, _yield$Promise$all, _yield$Promise$all2, efields;
        return _regeneratorRuntime.wrap(function _callee4$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              if (!this._soql) {
                _context19.next = 2;
                break;
              }
              throw new Error('Cannot expand fields for the query which has already built SOQL.');
            case 2:
              _this$_config = this._config, _this$_config$fields = _this$_config.fields, fields = _this$_config$fields === void 0 ? [] : _this$_config$fields, _this$_config$table = _this$_config.table, table = _this$_config$table === void 0 ? '' : _this$_config$table;
              sobject = sobject_ || table;
              this._logger.debug(_concatInstanceProperty(_context13 = "_expandFields: sobject = ".concat(sobject, ", fields = ")).call(_context13, fields.join(', ')));
              _context19.next = 7;
              return _Promise.all(_concatInstanceProperty(_context14 = [this._expandAsteriskFields(sobject, fields)]).call(_context14, _toConsumableArray(_mapInstanceProperty(_context15 = this._children).call(_context15, /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(childQuery) {
                  return _regeneratorRuntime.wrap(function _callee3$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.next = 2;
                        return childQuery._expandFields();
                      case 2:
                        return _context16.abrupt("return", []);
                      case 3:
                      case "end":
                        return _context16.stop();
                    }
                  }, _callee3);
                }));
                return function (_x5) {
                  return _ref6.apply(this, arguments);
                };
              }()))));
            case 7:
              _yield$Promise$all = _context19.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
              efields = _yield$Promise$all2[0];
              this._config.fields = efields;
              this._config.includes = _reduceInstanceProperty(_context17 = _mapInstanceProperty(_context18 = this._children).call(_context18, function (cquery) {
                var cconfig = cquery._query._config;
                return [cconfig.table, cconfig];
              })).call(_context17, function (includes, _ref7) {
                var _ref8 = _slicedToArray(_ref7, 2),
                  ctable = _ref8[0],
                  cconfig = _ref8[1];
                return _objectSpread(_objectSpread({}, includes), {}, _defineProperty({}, ctable, cconfig));
              }, {});
            case 12:
            case "end":
              return _context19.stop();
          }
        }, _callee4, this);
      }));
      function _expandFields(_x4) {
        return _expandFields2.apply(this, arguments);
      }
      return _expandFields;
    }()
    /**
     *
     */
    )
  }, {
    key: "_findRelationObject",
    value: (function () {
      var _findRelationObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(relName) {
        var _context20;
        var table, sobject, upperRname, _iterator, _step, cr;
        return _regeneratorRuntime.wrap(function _callee5$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              table = this._config.table;
              if (table) {
                _context21.next = 3;
                break;
              }
              throw new Error('No table information provided in the query');
            case 3:
              this._logger.debug(_concatInstanceProperty(_context20 = "finding table for relation \"".concat(relName, "\" in \"")).call(_context20, table, "\"..."));
              _context21.next = 6;
              return this._conn.describe$(table);
            case 6:
              sobject = _context21.sent;
              upperRname = relName.toUpperCase();
              _iterator = _createForOfIteratorHelper(sobject.childRelationships);
              _context21.prev = 9;
              _iterator.s();
            case 11:
              if ((_step = _iterator.n()).done) {
                _context21.next = 17;
                break;
              }
              cr = _step.value;
              if (!((cr.relationshipName || '').toUpperCase() === upperRname && cr.childSObject)) {
                _context21.next = 15;
                break;
              }
              return _context21.abrupt("return", cr.childSObject);
            case 15:
              _context21.next = 11;
              break;
            case 17:
              _context21.next = 22;
              break;
            case 19:
              _context21.prev = 19;
              _context21.t0 = _context21["catch"](9);
              _iterator.e(_context21.t0);
            case 22:
              _context21.prev = 22;
              _iterator.f();
              return _context21.finish(22);
            case 25:
              throw new Error("No child relationship found: ".concat(relName));
            case 26:
            case "end":
              return _context21.stop();
          }
        }, _callee5, this, [[9, 19, 22, 25]]);
      }));
      function _findRelationObject(_x6) {
        return _findRelationObject2.apply(this, arguments);
      }
      return _findRelationObject;
    }()
    /**
     *
     */
    )
  }, {
    key: "_expandAsteriskFields",
    value: (function () {
      var _expandAsteriskFields2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(sobject, fields) {
        var _this3 = this;
        var expandedFields;
        return _regeneratorRuntime.wrap(function _callee7$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return _Promise.all(_mapInstanceProperty(fields).call(fields, /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(field) {
                  return _regeneratorRuntime.wrap(function _callee6$(_context22) {
                    while (1) switch (_context22.prev = _context22.next) {
                      case 0:
                        return _context22.abrupt("return", _this3._expandAsteriskField(sobject, field));
                      case 1:
                      case "end":
                        return _context22.stop();
                    }
                  }, _callee6);
                }));
                return function (_x9) {
                  return _ref9.apply(this, arguments);
                };
              }()));
            case 2:
              expandedFields = _context24.sent;
              return _context24.abrupt("return", _reduceInstanceProperty(expandedFields).call(expandedFields, function (eflds, flds) {
                var _context23;
                return _concatInstanceProperty(_context23 = []).call(_context23, _toConsumableArray(eflds), _toConsumableArray(flds));
              }, []));
            case 4:
            case "end":
              return _context24.stop();
          }
        }, _callee7);
      }));
      function _expandAsteriskFields(_x7, _x8) {
        return _expandAsteriskFields2.apply(this, arguments);
      }
      return _expandAsteriskFields;
    }()
    /**
     *
     */
    )
  }, {
    key: "_expandAsteriskField",
    value: (function () {
      var _expandAsteriskField2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(sobject, field) {
        var _context25;
        var fpath, _context27, so, rname, _iterator2, _step2, f, rfield, referenceTo, rtable, fpaths;
        return _regeneratorRuntime.wrap(function _callee8$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              this._logger.debug(_concatInstanceProperty(_context25 = "expanding field \"".concat(field, "\" in \"")).call(_context25, sobject, "\"..."));
              fpath = field.split('.');
              if (!(fpath[fpath.length - 1] === '*')) {
                _context28.next = 34;
                break;
              }
              _context28.next = 5;
              return this._conn.describe$(sobject);
            case 5:
              so = _context28.sent;
              this._logger.debug("table ".concat(sobject, " has been described"));
              if (!(fpath.length > 1)) {
                _context28.next = 33;
                break;
              }
              rname = fpath.shift();
              _iterator2 = _createForOfIteratorHelper(so.fields);
              _context28.prev = 10;
              _iterator2.s();
            case 12:
              if ((_step2 = _iterator2.n()).done) {
                _context28.next = 24;
                break;
              }
              f = _step2.value;
              if (!(f.relationshipName && rname && f.relationshipName.toUpperCase() === rname.toUpperCase())) {
                _context28.next = 22;
                break;
              }
              rfield = f;
              referenceTo = rfield.referenceTo || [];
              rtable = referenceTo.length === 1 ? referenceTo[0] : 'Name';
              _context28.next = 20;
              return this._expandAsteriskField(rtable, fpath.join('.'));
            case 20:
              fpaths = _context28.sent;
              return _context28.abrupt("return", _mapInstanceProperty(fpaths).call(fpaths, function (fp) {
                var _context26;
                return _concatInstanceProperty(_context26 = "".concat(rname, ".")).call(_context26, fp);
              }));
            case 22:
              _context28.next = 12;
              break;
            case 24:
              _context28.next = 29;
              break;
            case 26:
              _context28.prev = 26;
              _context28.t0 = _context28["catch"](10);
              _iterator2.e(_context28.t0);
            case 29:
              _context28.prev = 29;
              _iterator2.f();
              return _context28.finish(29);
            case 32:
              return _context28.abrupt("return", []);
            case 33:
              return _context28.abrupt("return", _mapInstanceProperty(_context27 = so.fields).call(_context27, function (f) {
                return f.name;
              }));
            case 34:
              return _context28.abrupt("return", [field]);
            case 35:
            case "end":
              return _context28.stop();
          }
        }, _callee8, this, [[10, 26, 29, 32]]);
      }));
      function _expandAsteriskField(_x10, _x11) {
        return _expandAsteriskField2.apply(this, arguments);
      }
      return _expandAsteriskField;
    }()
    /**
     * Explain plan for executing query
     */
    )
  }, {
    key: "explain",
    value: (function () {
      var _explain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
        var soql, url;
        return _regeneratorRuntime.wrap(function _callee9$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return this.toSOQL();
            case 2:
              soql = _context29.sent;
              this._logger.debug("SOQL = ".concat(soql));
              url = "/query/?explain=".concat(encodeURIComponent(soql));
              return _context29.abrupt("return", this._conn.request(url));
            case 6:
            case "end":
              return _context29.stop();
          }
        }, _callee9, this);
      }));
      function explain() {
        return _explain.apply(this, arguments);
      }
      return explain;
    }()
    /**
     * Return SOQL expression for the query
     */
    )
  }, {
    key: "toSOQL",
    value: (function () {
      var _toSOQL = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
        return _regeneratorRuntime.wrap(function _callee10$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              if (!this._soql) {
                _context30.next = 2;
                break;
              }
              return _context30.abrupt("return", this._soql);
            case 2:
              _context30.next = 4;
              return this._expandFields();
            case 4:
              return _context30.abrupt("return", createSOQL(this._config));
            case 5:
            case "end":
              return _context30.stop();
          }
        }, _callee10, this);
      }));
      function toSOQL() {
        return _toSOQL.apply(this, arguments);
      }
      return toSOQL;
    }()
    /**
     * Promise/A+ interface
     * http://promises-aplus.github.io/promises-spec/
     *
     * Delegate to deferred promise, return promise instance for query result
     */
    )
  }, {
    key: "then",
    value: function then(onResolve, onReject) {
      this._chaining = true;
      if (!this._finished && !this._executed) {
        this.execute();
      }
      if (!this._promise) {
        throw new Error('invalid state: promise is not set after query execution');
      }
      return this._promise.then(onResolve, onReject);
    }
  }, {
    key: "catch",
    value: function _catch(onReject) {
      return this.then(null, onReject);
    }
  }, {
    key: "promise",
    value: function promise() {
      // TODO(cristian): verify this is correct
      return _Promise.resolve(this);
    }

    /**
     * Bulk delete queried records
     */
  }, {
    key: "destroy",
    value: function destroy(type, options) {
      var _options$bulkApiVersi,
        _this4 = this;
      if (_typeof(type) === 'object' && type !== null) {
        options = type;
        type = undefined;
      }
      options = options || {};
      var type_ = type || this._config.table;
      if (!type_) {
        throw new Error('SOQL based query needs SObject type information to bulk delete.');
      }
      // Set the threshold number to pass to bulk API
      var thresholdNum = options.allowBulk === false ? -1 : typeof options.bulkThreshold === 'number' ? options.bulkThreshold :
      // determine threshold if the connection version supports SObject collection API or not
      this._conn._ensureVersion(42) ? DEFAULT_BULK_THRESHOLD : this._conn._maxRequest / 2;
      var bulkApiVersion = (_options$bulkApiVersi = options.bulkApiVersion) !== null && _options$bulkApiVersi !== void 0 ? _options$bulkApiVersi : DEFAULT_BULK_API_VERSION;
      return new _Promise(function (resolve, reject) {
        var createBatch = function createBatch() {
          return _this4._conn.sobject(type_).deleteBulk().on('response', resolve).on('error', reject);
        };
        var records = [];
        var batch = null;
        var handleRecord = function handleRecord(rec) {
          if (!rec.Id) {
            var err = new Error('Queried record does not include Salesforce record ID.');
            _this4.emit('error', err);
            return;
          }
          var record = {
            Id: rec.Id
          };
          if (batch) {
            batch.write(record);
          } else {
            records.push(record);
            if (thresholdNum >= 0 && records.length > thresholdNum && bulkApiVersion === 1) {
              // Use bulk delete instead of SObject REST API
              batch = createBatch();
              for (var _i2 = 0, _records = records; _i2 < _records.length; _i2++) {
                var _record = _records[_i2];
                batch.write(_record);
              }
              records = [];
            }
          }
        };
        var handleEnd = function handleEnd() {
          if (batch) {
            batch.end();
          } else {
            var ids = _mapInstanceProperty(records).call(records, function (record) {
              return record.Id;
            });
            if (records.length > thresholdNum && bulkApiVersion === 2) {
              _this4._conn.bulk2.loadAndWaitForResults({
                object: type_,
                operation: 'delete',
                input: records
              }).then(function (allResults) {
                return resolve(_this4.mapBulkV2ResultsToSaveResults(allResults));
              }, reject);
            } else {
              _this4._conn.sobject(type_).destroy(ids, {
                allowRecursive: true
              }).then(resolve, reject);
            }
          }
        };
        _this4.stream('record').on('data', handleRecord).on('end', handleEnd).on('error', reject);
      });
    }
  }, {
    key: "update",
    value: function update(mapping, type, options) {
      var _options$bulkApiVersi2,
        _this5 = this;
      if (_typeof(type) === 'object' && type !== null) {
        options = type;
        type = undefined;
      }
      options = options || {};
      var type_ = type || this._config && this._config.table;
      if (!type_) {
        throw new Error('SOQL based query needs SObject type information to bulk update.');
      }
      var updateStream = typeof mapping === 'function' ? _mapInstanceProperty(RecordStream).call(RecordStream, mapping) : RecordStream.recordMapStream(mapping);
      // Set the threshold number to pass to bulk API
      var thresholdNum = options.allowBulk === false ? -1 : typeof options.bulkThreshold === 'number' ? options.bulkThreshold :
      // determine threshold if the connection version supports SObject collection API or not
      this._conn._ensureVersion(42) ? DEFAULT_BULK_THRESHOLD : this._conn._maxRequest / 2;
      var bulkApiVersion = (_options$bulkApiVersi2 = options.bulkApiVersion) !== null && _options$bulkApiVersi2 !== void 0 ? _options$bulkApiVersi2 : DEFAULT_BULK_API_VERSION;
      return new _Promise(function (resolve, reject) {
        var createBatch = function createBatch() {
          return _this5._conn.sobject(type_).updateBulk().on('response', resolve).on('error', reject);
        };
        var records = [];
        var batch = null;
        var handleRecord = function handleRecord(record) {
          if (batch) {
            batch.write(record);
          } else {
            records.push(record);
          }
          if (thresholdNum >= 0 && records.length > thresholdNum && bulkApiVersion === 1) {
            // Use bulk update instead of SObject REST API
            batch = createBatch();
            for (var _i3 = 0, _records2 = records; _i3 < _records2.length; _i3++) {
              var _record2 = _records2[_i3];
              batch.write(_record2);
            }
            records = [];
          }
        };
        var handleEnd = function handleEnd() {
          if (batch) {
            batch.end();
          } else {
            if (records.length > thresholdNum && bulkApiVersion === 2) {
              _this5._conn.bulk2.loadAndWaitForResults({
                object: type_,
                operation: 'update',
                input: records
              }).then(function (allResults) {
                return resolve(_this5.mapBulkV2ResultsToSaveResults(allResults));
              }, reject);
            } else {
              _this5._conn.sobject(type_).update(records, {
                allowRecursive: true
              }).then(resolve, reject);
            }
          }
        };
        _this5.stream('record').on('error', reject).pipe(updateStream).on('data', handleRecord).on('end', handleEnd).on('error', reject);
      });
    }
  }, {
    key: "mapBulkV2ResultsToSaveResults",
    value: function mapBulkV2ResultsToSaveResults(bulkJobAllResults) {
      var _context31, _context32, _context33;
      var successSaveResults = _mapInstanceProperty(_context31 = bulkJobAllResults.successfulResults).call(_context31, function (r) {
        var saveResult = {
          id: r.sf__Id,
          success: true,
          errors: []
        };
        return saveResult;
      });
      var failedSaveResults = _mapInstanceProperty(_context32 = bulkJobAllResults.failedResults).call(_context32, function (r) {
        var saveResult = {
          success: false,
          errors: [{
            errorCode: r.sf__Error,
            message: r.sf__Error
          }]
        };
        return saveResult;
      });
      return _concatInstanceProperty(_context33 = []).call(_context33, _toConsumableArray(successSaveResults), _toConsumableArray(failedSaveResults));
    }
  }]);
}(EventEmitter);

/*--------------------------------------------*/

/**
 * SubQuery object for representing child relationship query
 */
_defineProperty(Query, "_logger", getLogger('query'));
export var SubQuery = /*#__PURE__*/function () {
  /**
   *
   */
  function SubQuery(conn, relName, config, parent) {
    _classCallCheck(this, SubQuery);
    /**
     * Synonym of SubQuery#skip()
     */
    _defineProperty(this, "offset", this.skip);
    /**
     * Synonym of SubQuery#sort()
     */
    _defineProperty(this, "orderby", _sortInstanceProperty(this));
    this._relName = relName;
    this._query = new Query(conn, config);
    this._parent = parent;
  }

  /**
   *
   */
  return _createClass(SubQuery, [{
    key: "select",
    value: function select(fields) {
      // force convert query record type without changing instance
      this._query = this._query.select(fields);
      return this;
    }

    /**
     *
     */
  }, {
    key: "where",
    value: function where(conditions) {
      this._query = this._query.where(conditions);
      return this;
    }

    /**
     * Limit the returning result
     */
  }, {
    key: "limit",
    value: function limit(_limit2) {
      this._query = this._query.limit(_limit2);
      return this;
    }

    /**
     * Skip records
     */
  }, {
    key: "skip",
    value: function skip(offset) {
      this._query = this._query.skip(offset);
      return this;
    }
  }, {
    key: "sort",
    value: function (_sort3) {
      function sort(_x12, _x13) {
        return _sort3.apply(this, arguments);
      }
      sort.toString = function () {
        return _sort3.toString();
      };
      return sort;
    }(function (sort, dir) {
      var _context34;
      this._query = _sortInstanceProperty(_context34 = this._query).call(_context34, sort, dir);
      return this;
    })
  }, {
    key: "_expandFields",
    value: (
    /**
     *
     */
    function () {
      var _expandFields3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
        var sobject;
        return _regeneratorRuntime.wrap(function _callee11$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              _context35.next = 2;
              return this._parent._findRelationObject(this._relName);
            case 2:
              sobject = _context35.sent;
              return _context35.abrupt("return", this._query._expandFields(sobject));
            case 4:
            case "end":
              return _context35.stop();
          }
        }, _callee11, this);
      }));
      function _expandFields() {
        return _expandFields3.apply(this, arguments);
      }
      return _expandFields;
    }()
    /**
     * Back the context to parent query object
     */
    )
  }, {
    key: "end",
    value: function end() {
      return this._parent;
    }
  }]);
}();
export default Query;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJnZXRMb2dnZXIiLCJSZWNvcmRTdHJlYW0iLCJTZXJpYWxpemFibGUiLCJjcmVhdGVTT1FMIiwiUmVzcG9uc2VUYXJnZXRWYWx1ZXMiLCJSZXNwb25zZVRhcmdldHMiLCJfcmVkdWNlSW5zdGFuY2VQcm9wZXJ0eSIsImNhbGwiLCJ2YWx1ZXMiLCJ0YXJnZXQiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiREVGQVVMVF9CVUxLX1RIUkVTSE9MRCIsIkRFRkFVTFRfQlVMS19BUElfVkVSU0lPTiIsIlF1ZXJ5IiwiX0V2ZW50RW1pdHRlciIsImNvbm4iLCJjb25maWciLCJvcHRpb25zIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwic2tpcCIsIl9zb3J0SW5zdGFuY2VQcm9wZXJ0eSIsImV4ZWN1dGUiLCJkZXN0cm95IiwiX2Nvbm4iLCJfbG9nZ2VyIiwiX2xvZ0xldmVsIiwiY3JlYXRlSW5zdGFuY2UiLCJfc29xbCIsImRlYnVnIiwiY29uY2F0IiwibG9jYXRvciIsIl9sb2NhdG9yIiwiX2luY2x1ZGVzSW5zdGFuY2VQcm9wZXJ0eSIsInVybFRvTG9jYXRvciIsIl9KU09OJHN0cmluZ2lmeSIsIl9yZWYiLCJmaWVsZHMiLCJpbmNsdWRlcyIsInNvcnQiLCJfY29uZmlnIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwic2VsZWN0IiwiaW5jbHVkZUNoaWxkcmVuIiwiX29wdGlvbnMiLCJoZWFkZXJzIiwibWF4RmV0Y2giLCJhdXRvRmV0Y2giLCJzY2FuQWxsIiwicmVzcG9uc2VUYXJnZXQiLCJzdG9yZVJlY29yZHMiLCJyZWNvcmRzIiwiX3Byb21pc2UiLCJfUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsIl9zdHJlYW0iLCJyZWNvcmQiLCJwdXNoIiwiZXJyIiwiZW1pdCIsImUiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIkVycm9yIiwidG9GaWVsZEFycmF5IiwiX2NvbnRleHQiLCJfY29udGV4dDIiLCJfY29udGV4dDQiLCJfY29udGV4dDUiLCJzcGxpdCIsIl9BcnJheSRpc0FycmF5IiwiX21hcEluc3RhbmNlUHJvcGVydHkiLCJmcyIsImYiLCJfY29udGV4dDMiLCJfY29uY2F0SW5zdGFuY2VQcm9wZXJ0eSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9PYmplY3QkZW50cmllcyIsIl9yZWYyIiwiX3JlZjMiLCJfc2xpY2VkVG9BcnJheSIsInYiLCJfY29udGV4dDYiLCJwIiwiX2NvbnRleHQ3IiwiX2NvbnRleHQ4Iiwid2hlcmUiLCJjb25kaXRpb25zIiwibGltaXQiLCJvZmZzZXQiLCJfc29ydCIsIl94IiwiX3gyIiwiYXBwbHkiLCJ0b1N0cmluZyIsImRpciIsImluY2x1ZGUiLCJjaGlsZFJlbE5hbWUiLCJjaGlsZENvbmZpZyIsInRhYmxlIiwiY2hpbGRRdWVyeSIsIlN1YlF1ZXJ5IiwiX2NoaWxkcmVuIiwiX2kiLCJfYXJyIiwiX09iamVjdCRrZXlzIiwiY3JuYW1lIiwiX3JlZjQiLCJfZXhjbHVkZWQyIiwic2V0UmVzcG9uc2VUYXJnZXQiLCJfdGhpczIiLCJvcHRpb25zXyIsIl9leGVjdXRlZCIsIl9maW5pc2hlZCIsIm9uY2UiLCJSZWNvcmRzIiwiX2NoYWluaW5nIiwib25SZWNvcmQiLCJyZW1vdmVMaXN0ZW5lciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQ5IiwicHJldiIsIm5leHQiLCJfZXhlY3V0ZSIsInQwIiwic3RvcCIsImxvY2F0b3JUb1VybCIsIl9iYXNlVXJsIiwiam9pbiIsInVybCIsInBvcCIsImNvbnN0cnVjdFJlc3BvbnNlIiwicmF3RG9uZSIsIl90aGlzJHJlY29yZHMkIiwiX3RoaXMkcmVjb3JkcyIsIl90aGlzJHJlY29yZHMyIiwiX3RoaXMkcmVjb3JkczMiLCJ0b3RhbFNpemUiLCJkb25lIiwibmV4dFJlY29yZHNVcmwiLCJfZXhlY3V0ZTIiLCJfY2FsbGVlMiIsIl9kYXRhJHJlY29yZHMkbGVuZ3RoIiwiX2RhdGEkcmVjb3JkcyIsInNvcWwiLCJkYXRhIiwiX2NvbnRleHQxMCIsIl90aGlzJHJlY29yZHM0IiwiX3RoaXMkcmVjb3JkcyRsZW5ndGgiLCJfdGhpcyRyZWNvcmRzNSIsIl9jb250ZXh0MTEiLCJfdGhpcyRyZWNvcmRzJGxlbmd0aDIiLCJfdGhpcyRyZWNvcmRzNiIsIm51bVJlY29yZHMiLCJ0b3RhbEZldGNoZWQiLCJpIiwicmVzcG9uc2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDEyIiwidG9TT1FMIiwic2VudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3QiLCJtZXRob2QiLCJfc2xpY2VJbnN0YW5jZVByb3BlcnR5IiwiYWJydXB0IiwiX3gzIiwic3RyZWFtIiwidHlwZSIsInBpcGUiLCJfZXhwYW5kRmllbGRzMiIsIl9jYWxsZWU0Iiwic29iamVjdF8iLCJfY29udGV4dDEzIiwiX2NvbnRleHQxNCIsIl9jb250ZXh0MTUiLCJfY29udGV4dDE3IiwiX2NvbnRleHQxOCIsIl90aGlzJF9jb25maWciLCJfdGhpcyRfY29uZmlnJGZpZWxkcyIsIl90aGlzJF9jb25maWckdGFibGUiLCJzb2JqZWN0IiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsImVmaWVsZHMiLCJfY2FsbGVlNCQiLCJfY29udGV4dDE5IiwiYWxsIiwiX2V4cGFuZEFzdGVyaXNrRmllbGRzIiwiX3JlZjYiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MTYiLCJfZXhwYW5kRmllbGRzIiwiX3g1IiwiY3F1ZXJ5IiwiY2NvbmZpZyIsIl9xdWVyeSIsIl9yZWY3IiwiX3JlZjgiLCJjdGFibGUiLCJfeDQiLCJfZmluZFJlbGF0aW9uT2JqZWN0MiIsIl9jYWxsZWU1IiwicmVsTmFtZSIsIl9jb250ZXh0MjAiLCJ1cHBlclJuYW1lIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJjciIsIl9jYWxsZWU1JCIsIl9jb250ZXh0MjEiLCJkZXNjcmliZSQiLCJ0b1VwcGVyQ2FzZSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiY2hpbGRSZWxhdGlvbnNoaXBzIiwicyIsIm4iLCJyZWxhdGlvbnNoaXBOYW1lIiwiY2hpbGRTT2JqZWN0IiwiZmluaXNoIiwiX2ZpbmRSZWxhdGlvbk9iamVjdCIsIl94NiIsIl9leHBhbmRBc3Rlcmlza0ZpZWxkczIiLCJfY2FsbGVlNyIsIl90aGlzMyIsImV4cGFuZGVkRmllbGRzIiwiX2NhbGxlZTckIiwiX2NvbnRleHQyNCIsIl9yZWY5IiwiX2NhbGxlZTYiLCJmaWVsZCIsIl9jYWxsZWU2JCIsIl9jb250ZXh0MjIiLCJfZXhwYW5kQXN0ZXJpc2tGaWVsZCIsIl94OSIsImVmbGRzIiwiZmxkcyIsIl9jb250ZXh0MjMiLCJfeDciLCJfeDgiLCJfZXhwYW5kQXN0ZXJpc2tGaWVsZDIiLCJfY2FsbGVlOCIsIl9jb250ZXh0MjUiLCJmcGF0aCIsIl9jb250ZXh0MjciLCJzbyIsInJuYW1lIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInJmaWVsZCIsInJlZmVyZW5jZVRvIiwicnRhYmxlIiwiZnBhdGhzIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQyOCIsInNoaWZ0IiwiZnAiLCJfY29udGV4dDI2IiwibmFtZSIsIl94MTAiLCJfeDExIiwiX2V4cGxhaW4iLCJfY2FsbGVlOSIsIl9jYWxsZWU5JCIsIl9jb250ZXh0MjkiLCJleHBsYWluIiwiX3RvU09RTCIsIl9jYWxsZWUxMCIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDMwIiwidGhlbiIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwiX2NhdGNoIiwicHJvbWlzZSIsIl9vcHRpb25zJGJ1bGtBcGlWZXJzaSIsIl90aGlzNCIsIl90eXBlb2YiLCJ0eXBlXyIsInRocmVzaG9sZE51bSIsImFsbG93QnVsayIsImJ1bGtUaHJlc2hvbGQiLCJfZW5zdXJlVmVyc2lvbiIsIl9tYXhSZXF1ZXN0IiwiYnVsa0FwaVZlcnNpb24iLCJjcmVhdGVCYXRjaCIsImRlbGV0ZUJ1bGsiLCJiYXRjaCIsImhhbmRsZVJlY29yZCIsInJlYyIsIklkIiwid3JpdGUiLCJfaTIiLCJfcmVjb3JkcyIsImhhbmRsZUVuZCIsImVuZCIsImlkcyIsImJ1bGsyIiwibG9hZEFuZFdhaXRGb3JSZXN1bHRzIiwib2JqZWN0Iiwib3BlcmF0aW9uIiwiaW5wdXQiLCJhbGxSZXN1bHRzIiwibWFwQnVsa1YyUmVzdWx0c1RvU2F2ZVJlc3VsdHMiLCJhbGxvd1JlY3Vyc2l2ZSIsInVwZGF0ZSIsIm1hcHBpbmciLCJfb3B0aW9ucyRidWxrQXBpVmVyc2kyIiwiX3RoaXM1IiwidXBkYXRlU3RyZWFtIiwicmVjb3JkTWFwU3RyZWFtIiwidXBkYXRlQnVsayIsIl9pMyIsIl9yZWNvcmRzMiIsImJ1bGtKb2JBbGxSZXN1bHRzIiwiX2NvbnRleHQzMSIsIl9jb250ZXh0MzIiLCJfY29udGV4dDMzIiwic3VjY2Vzc1NhdmVSZXN1bHRzIiwic3VjY2Vzc2Z1bFJlc3VsdHMiLCJyIiwic2F2ZVJlc3VsdCIsImlkIiwic2ZfX0lkIiwic3VjY2VzcyIsImVycm9ycyIsImZhaWxlZFNhdmVSZXN1bHRzIiwiZmFpbGVkUmVzdWx0cyIsImVycm9yQ29kZSIsInNmX19FcnJvciIsIm1lc3NhZ2UiLCJwYXJlbnQiLCJfcmVsTmFtZSIsIl9wYXJlbnQiLCJfc29ydDMiLCJfeDEyIiwiX3gxMyIsIl9jb250ZXh0MzQiLCJfZXhwYW5kRmllbGRzMyIsIl9jYWxsZWUxMSIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDM1Il0sInNvdXJjZXMiOlsiLi4vc3JjL3F1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAZmlsZSBNYW5hZ2VzIHF1ZXJ5IGZvciByZWNvcmRzIGluIFNhbGVzZm9yY2VcbiAqIEBhdXRob3IgU2hpbmljaGkgVG9taXRhIDxzaGluaWNoaS50b21pdGFAZ21haWwuY29tPlxuICovXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuaW1wb3J0IHsgTG9nZ2VyLCBnZXRMb2dnZXIgfSBmcm9tICcuL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBSZWNvcmRTdHJlYW0sIHsgU2VyaWFsaXphYmxlIH0gZnJvbSAnLi9yZWNvcmQtc3RyZWFtJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVTT1FMIH0gZnJvbSAnLi9zb3FsLWJ1aWxkZXInO1xuaW1wb3J0IHsgUXVlcnlDb25maWcgYXMgU09RTFF1ZXJ5Q29uZmlnLCBTb3J0RGlyIH0gZnJvbSAnLi9zb3FsLWJ1aWxkZXInO1xuaW1wb3J0IHtcbiAgUmVjb3JkLFxuICBPcHRpb25hbCxcbiAgU2NoZW1hLFxuICBTT2JqZWN0TmFtZXMsXG4gIENoaWxkUmVsYXRpb25zaGlwTmFtZXMsXG4gIENoaWxkUmVsYXRpb25zaGlwU09iamVjdE5hbWUsXG4gIEZpZWxkUHJvamVjdGlvbkNvbmZpZyxcbiAgRmllbGRQYXRoU3BlY2lmaWVyLFxuICBGaWVsZFBhdGhTY29wZWRQcm9qZWN0aW9uLFxuICBTT2JqZWN0UmVjb3JkLFxuICBTT2JqZWN0SW5wdXRSZWNvcmQsXG4gIFNPYmplY3RVcGRhdGVSZWNvcmQsXG4gIFNhdmVSZXN1bHQsXG4gIERhdGVTdHJpbmcsXG4gIFNPYmplY3RDaGlsZFJlbGF0aW9uc2hpcFByb3AsXG4gIFNPYmplY3RGaWVsZE5hbWVzLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBTZkRhdGUgZnJvbSAnLi9kYXRlJztcbmltcG9ydCB7IEluZ2VzdEpvYlYyUmVzdWx0cyB9IGZyb20gJy4vYXBpL2J1bGsyJztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBRdWVyeUZpZWxkPFxuICBTIGV4dGVuZHMgU2NoZW1hLFxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxuICBGUCBleHRlbmRzIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPlxuPiA9IEZQIHwgRlBbXSB8IHN0cmluZyB8IHN0cmluZ1tdIHwgeyBbZmllbGQ6IHN0cmluZ106IG51bWJlciB8IGJvb2xlYW4gfTtcblxuLyoqXG4gKlxuICovXG50eXBlIENWYWx1ZTxUPiA9IFQgZXh0ZW5kcyBEYXRlU3RyaW5nXG4gID8gU2ZEYXRlXG4gIDogVCBleHRlbmRzIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW5cbiAgPyBUXG4gIDogbmV2ZXI7XG5cbnR5cGUgQ29uZE9wPFQ+ID1cbiAgfCBbJyRlcScsIENWYWx1ZTxUPiB8IG51bGxdXG4gIHwgWyckbmUnLCBDVmFsdWU8VD4gfCBudWxsXVxuICB8IFsnJGd0JywgQ1ZhbHVlPFQ+XVxuICB8IFsnJGd0ZScsIENWYWx1ZTxUPl1cbiAgfCBbJyRsdCcsIENWYWx1ZTxUPl1cbiAgfCBbJyRsdGUnLCBDVmFsdWU8VD5dXG4gIHwgWyckbGlrZScsIFQgZXh0ZW5kcyBzdHJpbmcgPyBUIDogbmV2ZXJdXG4gIHwgWyckbmxpa2UnLCBUIGV4dGVuZHMgc3RyaW5nID8gVCA6IG5ldmVyXVxuICB8IFsnJGluJywgQXJyYXk8Q1ZhbHVlPFQ+Pl1cbiAgfCBbJyRuaW4nLCBBcnJheTxDVmFsdWU8VD4+XVxuICB8IFsnJGluY2x1ZGVzJywgVCBleHRlbmRzIHN0cmluZyA/IFRbXSA6IG5ldmVyXVxuICB8IFsnJGV4Y2x1ZGVzJywgVCBleHRlbmRzIHN0cmluZyA/IFRbXSA6IG5ldmVyXVxuICB8IFsnJGV4aXN0cycsIGJvb2xlYW5dO1xuXG50eXBlIENvbmRWYWx1ZU9iajxULCBPcCA9IENvbmRPcDxUPlswXT4gPSBPcCBleHRlbmRzIENvbmRPcDxUPlswXVxuICA/IE9wIGV4dGVuZHMgc3RyaW5nXG4gID8geyBbSyBpbiBPcF06IEV4dHJhY3Q8Q29uZE9wPFQ+LCBbT3AsIGFueV0+WzFdIH1cbiAgOiBuZXZlclxuICA6IG5ldmVyO1xuXG50eXBlIENvbmRWYWx1ZTxUPiA9IENWYWx1ZTxUPiB8IEFycmF5PENWYWx1ZTxUPj4gfCBudWxsIHwgQ29uZFZhbHVlT2JqPFQ+O1xuXG50eXBlIENvbmRpdGlvblNldDxSIGV4dGVuZHMgUmVjb3JkPiA9IHtcbiAgW0sgaW4ga2V5b2YgUl0/OiBDb25kVmFsdWU8UltLXT47XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeUNvbmRpdGlvbjxTIGV4dGVuZHMgU2NoZW1hLCBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+PiA9XG4gIHwge1xuICAgICRvcjogQXJyYXk8UXVlcnlDb25kaXRpb248UywgTj4+O1xuICB9XG4gIHwge1xuICAgICRhbmQ6IEFycmF5PFF1ZXJ5Q29uZGl0aW9uPFMsIE4+PjtcbiAgfVxuICB8IENvbmRpdGlvblNldDxTT2JqZWN0UmVjb3JkPFMsIE4+PjtcblxuZXhwb3J0IHR5cGUgUXVlcnlTb3J0PFxuICBTIGV4dGVuZHMgU2NoZW1hLFxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxuICBSIGV4dGVuZHMgU09iamVjdFJlY29yZDxTLCBOPiA9IFNPYmplY3RSZWNvcmQ8UywgTj5cbj4gPVxuICB8IHtcbiAgICBbSyBpbiBrZXlvZiBSXT86IFNvcnREaXI7XG4gIH1cbiAgfCBBcnJheTxba2V5b2YgUiwgU29ydERpcl0+O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFF1ZXJ5Q29uZmlnPFxuICBTIGV4dGVuZHMgU2NoZW1hLFxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxuICBGUCBleHRlbmRzIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPlxuPiA9IHtcbiAgZmllbGRzPzogUXVlcnlGaWVsZDxTLCBOLCBGUD47XG4gIGluY2x1ZGVzPzoge1xuICAgIFtDUk4gaW4gQ2hpbGRSZWxhdGlvbnNoaXBOYW1lczxTLCBOPl0/OiBRdWVyeUNvbmZpZzxcbiAgICAgIFMsXG4gICAgICBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lPFMsIE4sIENSTj5cbiAgICA+O1xuICB9O1xuICB0YWJsZT86IHN0cmluZztcbiAgY29uZGl0aW9ucz86IFF1ZXJ5Q29uZGl0aW9uPFMsIE4+O1xuICBzb3J0PzogUXVlcnlTb3J0PFMsIE4+O1xuICBsaW1pdD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnlPcHRpb25zID0ge1xuICBoZWFkZXJzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgbWF4RmV0Y2g6IG51bWJlcjtcbiAgYXV0b0ZldGNoOiBib29sZWFuO1xuICBzY2FuQWxsOiBib29sZWFuO1xuICByZXNwb25zZVRhcmdldDogUXVlcnlSZXNwb25zZVRhcmdldDtcbiAgc3RvcmVSZWNvcmRzOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnlSZXN1bHQ8UiBleHRlbmRzIFJlY29yZD4gPSB7XG4gIGRvbmU6IGJvb2xlYW47XG4gIHRvdGFsU2l6ZTogbnVtYmVyO1xuICByZWNvcmRzOiBSW107XG4gIG5leHRSZWNvcmRzVXJsPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnlFeHBsYWluUmVzdWx0ID0ge1xuICBwbGFuczogQXJyYXk8e1xuICAgIGNhcmRpbmFsaXR5OiBudW1iZXI7XG4gICAgZmllbGRzOiBzdHJpbmdbXTtcbiAgICBsZWFkaW5nT3BlcmF0aW9uVHlwZTogJ0luZGV4JyB8ICdPdGhlcicgfCAnU2hhcmluZycgfCAnVGFibGVTY2FuJztcbiAgICBub3RlczogQXJyYXk8e1xuICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgIGZpZWxkczogc3RyaW5nW107XG4gICAgICB0YWJsZUVudW1PcklkOiBzdHJpbmc7XG4gICAgfT47XG4gICAgcmVsYXRpdmVDb3N0OiBudW1iZXI7XG4gICAgc29iamVjdENhcmRpbmFsaXR5OiBudW1iZXI7XG4gICAgc29iamVjdFR5cGU6IHN0cmluZztcbiAgfT47XG59O1xuXG5jb25zdCBSZXNwb25zZVRhcmdldFZhbHVlcyA9IFtcbiAgJ1F1ZXJ5UmVzdWx0JyxcbiAgJ1JlY29yZHMnLFxuICAnU2luZ2xlUmVjb3JkJyxcbiAgJ0NvdW50Jyxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UmVzcG9uc2VUYXJnZXQgPSB0eXBlb2YgUmVzcG9uc2VUYXJnZXRWYWx1ZXNbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNlVGFyZ2V0czoge1xuICBbSyBpbiBRdWVyeVJlc3BvbnNlVGFyZ2V0XTogSztcbn0gPSBSZXNwb25zZVRhcmdldFZhbHVlcy5yZWR1Y2UoXG4gICh2YWx1ZXMsIHRhcmdldCkgPT4gKHsgLi4udmFsdWVzLCBbdGFyZ2V0XTogdGFyZ2V0IH0pLFxuICB7fSBhcyB7XG4gICAgW0sgaW4gUXVlcnlSZXNwb25zZVRhcmdldF06IEs7XG4gIH0sXG4pO1xuXG5leHBvcnQgdHlwZSBRdWVyeVJlc3BvbnNlPFxuICBSIGV4dGVuZHMgUmVjb3JkLFxuICBRUlQgZXh0ZW5kcyBRdWVyeVJlc3BvbnNlVGFyZ2V0ID0gUXVlcnlSZXNwb25zZVRhcmdldFxuPiA9IFFSVCBleHRlbmRzICdRdWVyeVJlc3VsdCdcbiAgPyBRdWVyeVJlc3VsdDxSPlxuICA6IFFSVCBleHRlbmRzICdSZWNvcmRzJ1xuICA/IFJbXVxuICA6IFFSVCBleHRlbmRzICdTaW5nbGVSZWNvcmQnXG4gID8gUiB8IG51bGxcbiAgOiBudW1iZXI7IC8vIFFSVCBleHRlbmRzICdDb3VudCdcblxuZXhwb3J0IHR5cGUgQnVsa0FwaVZlcnNpb24gPSAxIHwgMjtcblxuZXhwb3J0IHR5cGUgUXVlcnlEZXN0cm95T3B0aW9ucyA9IHtcbiAgYWxsb3dCdWxrPzogYm9vbGVhbjtcbiAgYnVsa1RocmVzaG9sZD86IG51bWJlcjtcbiAgYnVsa0FwaVZlcnNpb24/OiBCdWxrQXBpVmVyc2lvbjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5VXBkYXRlT3B0aW9ucyA9IHtcbiAgYWxsb3dCdWxrPzogYm9vbGVhbjtcbiAgYnVsa1RocmVzaG9sZD86IG51bWJlcjtcbiAgYnVsa0FwaVZlcnNpb24/OiBCdWxrQXBpVmVyc2lvbjtcbn07XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgREVGQVVMVF9CVUxLX1RIUkVTSE9MRCA9IDIwMDtcbmNvbnN0IERFRkFVTFRfQlVMS19BUElfVkVSU0lPTiA9IDE7XG5cbi8qKlxuICogUXVlcnlcbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXJ5PFxuICBTIGV4dGVuZHMgU2NoZW1hLFxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxuICBSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLFxuICBRUlQgZXh0ZW5kcyBRdWVyeVJlc3BvbnNlVGFyZ2V0ID0gUXVlcnlSZXNwb25zZVRhcmdldFxuPiBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIHN0YXRpYyBfbG9nZ2VyID0gZ2V0TG9nZ2VyKCdxdWVyeScpO1xuXG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuICBfbG9nZ2VyOiBMb2dnZXI7XG4gIF9zb3FsOiBPcHRpb25hbDxzdHJpbmc+O1xuICBfbG9jYXRvcjogT3B0aW9uYWw8c3RyaW5nPjtcbiAgX2NvbmZpZzogU09RTFF1ZXJ5Q29uZmlnID0ge307XG4gIF9jaGlsZHJlbjogQXJyYXk8U3ViUXVlcnk8UywgTiwgUiwgUVJULCBhbnksIGFueSwgYW55Pj4gPSBbXTtcbiAgX29wdGlvbnM6IFF1ZXJ5T3B0aW9ucztcbiAgX2V4ZWN1dGVkOiBib29sZWFuID0gZmFsc2U7XG4gIF9maW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBfY2hhaW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX3Byb21pc2U6IFByb21pc2U8UXVlcnlSZXNwb25zZTxSLCBRUlQ+PjtcbiAgX3N0cmVhbTogU2VyaWFsaXphYmxlPFI+O1xuXG4gIHRvdGFsU2l6ZSA9IDA7XG4gIHRvdGFsRmV0Y2hlZCA9IDA7XG4gIHJlY29yZHM6IFJbXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY29ubjogQ29ubmVjdGlvbjxTPixcbiAgICBjb25maWc6IHN0cmluZyB8IFF1ZXJ5Q29uZmlnPFMsIE4+IHwgeyBsb2NhdG9yOiBzdHJpbmcgfSxcbiAgICBvcHRpb25zPzogUGFydGlhbDxRdWVyeU9wdGlvbnM+LFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICAgIHRoaXMuX2xvZ2dlciA9IGNvbm4uX2xvZ0xldmVsXG4gICAgICA/IFF1ZXJ5Ll9sb2dnZXIuY3JlYXRlSW5zdGFuY2UoY29ubi5fbG9nTGV2ZWwpXG4gICAgICA6IFF1ZXJ5Ll9sb2dnZXI7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9zb3FsID0gY29uZmlnO1xuICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKGBjb25maWcgaXMgc29xbDogJHtjb25maWd9YCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgKGNvbmZpZyBhcyBhbnkpLmxvY2F0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBsb2NhdG9yOiBzdHJpbmcgPSAoY29uZmlnIGFzIGFueSkubG9jYXRvcjtcbiAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgY29uZmlnIGlzIGxvY2F0b3I6ICR7bG9jYXRvcn1gKTtcbiAgICAgIHRoaXMuX2xvY2F0b3IgPSBsb2NhdG9yLmluY2x1ZGVzKCcvJylcbiAgICAgICAgPyB0aGlzLnVybFRvTG9jYXRvcihsb2NhdG9yKVxuICAgICAgICA6IGxvY2F0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgY29uZmlnIGlzIFF1ZXJ5Q29uZmlnOiAke0pTT04uc3RyaW5naWZ5KGNvbmZpZyl9YCk7XG4gICAgICBjb25zdCB7IGZpZWxkcywgaW5jbHVkZXMsIHNvcnQsIC4uLl9jb25maWcgfSA9IGNvbmZpZyBhcyBRdWVyeUNvbmZpZzxcbiAgICAgICAgUyxcbiAgICAgICAgTlxuICAgICAgPjtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IF9jb25maWc7XG4gICAgICB0aGlzLnNlbGVjdChmaWVsZHMpO1xuICAgICAgaWYgKGluY2x1ZGVzKSB7XG4gICAgICAgIHRoaXMuaW5jbHVkZUNoaWxkcmVuKGluY2x1ZGVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgIHRoaXMuc29ydChzb3J0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgbWF4RmV0Y2g6IDEwMDAwLFxuICAgICAgYXV0b0ZldGNoOiBmYWxzZSxcbiAgICAgIHNjYW5BbGw6IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUYXJnZXQ6ICdRdWVyeVJlc3VsdCcsXG4gICAgICBzdG9yZVJlY29yZHM6IHRydWUsXG4gICAgICAuLi4ob3B0aW9ucyB8fCB7fSksXG4gICAgfSBhcyBRdWVyeU9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zdG9yZVJlY29yZHMpIHtcbiAgICAgIHRoaXMucmVjb3JkcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIHByb21pc2UgaW5zdGFuY2VcbiAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5vbigncmVzcG9uc2UnLCByZXNvbHZlKTtcbiAgICAgIHRoaXMub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zdHJlYW0gPSBuZXcgU2VyaWFsaXphYmxlKCk7XG4gICAgdGhpcy5vbigncmVjb3JkJywgKHJlY29yZCkgPT4gdGhpcy5fc3RyZWFtLnB1c2gocmVjb3JkKSk7XG4gICAgdGhpcy5vbignZW5kJywgKCkgPT4gdGhpcy5fc3RyZWFtLnB1c2gobnVsbCkpO1xuICAgIHRoaXMub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBmaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcmV0dXJuaW5nIHJlc3VsdFxuICAgKi9cbiAgc2VsZWN0PFxuICAgIFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQsXG4gICAgRlAgZXh0ZW5kcyBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj4gPSBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj4sXG4gICAgRlBDIGV4dGVuZHMgRmllbGRQcm9qZWN0aW9uQ29uZmlnID0gRmllbGRQYXRoU2NvcGVkUHJvamVjdGlvbjxTLCBOLCBGUD4sXG4gICAgUjIgZXh0ZW5kcyBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj4gPSBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj5cbiAgPihmaWVsZHM6IFF1ZXJ5RmllbGQ8UywgTiwgRlA+ID0gJyonKTogUXVlcnk8UywgTiwgUjIsIFFSVD4ge1xuICAgIGlmICh0aGlzLl9zb3FsKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBzZXQgc2VsZWN0IGZpZWxkcyBmb3IgdGhlIHF1ZXJ5IHdoaWNoIGhhcyBhbHJlYWR5IGJ1aWx0IFNPUUwuJyxcbiAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvRmllbGRBcnJheShmaWVsZHM6IFF1ZXJ5RmllbGQ8UywgTiwgRlA+KTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmaWVsZHMgPT09ICdzdHJpbmcnXG4gICAgICAgID8gZmllbGRzLnNwbGl0KC9cXHMqLFxccyovKVxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoZmllbGRzKVxuICAgICAgICAgID8gKGZpZWxkcyBhcyBBcnJheTxzdHJpbmcgfCBGUD4pXG4gICAgICAgICAgICAubWFwKHRvRmllbGRBcnJheSlcbiAgICAgICAgICAgIC5yZWR1Y2U8c3RyaW5nW10+KChmcywgZikgPT4gWy4uLmZzLCAuLi5mXSwgW10pXG4gICAgICAgICAgOiBPYmplY3QuZW50cmllcyhmaWVsZHMgYXMgeyBbbmFtZTogc3RyaW5nXTogUXVlcnlGaWVsZDxTLCBOLCBGUD4gfSlcbiAgICAgICAgICAgIC5tYXAoKFtmLCB2XSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdiA/IFtmXSA6IFtdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0ZpZWxkQXJyYXkodikubWFwKChwKSA9PiBgJHtmfS4ke3B9YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVkdWNlPHN0cmluZ1tdPigoZnMsIGYpID0+IFsuLi5mcywgLi4uZl0sIFtdKTtcbiAgICB9XG4gICAgaWYgKGZpZWxkcykge1xuICAgICAgdGhpcy5fY29uZmlnLmZpZWxkcyA9IHRvRmllbGRBcnJheShmaWVsZHMpO1xuICAgIH1cbiAgICAvLyBmb3JjZSBjb252ZXJ0IHF1ZXJ5IHJlY29yZCB0eXBlIHdpdGhvdXQgY2hhbmdpbmcgaW5zdGFuY2U7XG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSkgYXMgUXVlcnk8UywgTiwgUjIsIFFSVD47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHF1ZXJ5IGNvbmRpdGlvbnMgdG8gZmlsdGVyIHRoZSByZXN1bHQgcmVjb3Jkc1xuICAgKi9cbiAgd2hlcmUoY29uZGl0aW9uczogUXVlcnlDb25kaXRpb248UywgTj4gfCBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fc29xbCkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICdDYW5ub3Qgc2V0IHdoZXJlIGNvbmRpdGlvbnMgZm9yIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogTGltaXQgdGhlIHJldHVybmluZyByZXN1bHRcbiAgICovXG4gIGxpbWl0KGxpbWl0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fc29xbCkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICdDYW5ub3Qgc2V0IGxpbWl0IGZvciB0aGUgcXVlcnkgd2hpY2ggaGFzIGFscmVhZHkgYnVpbHQgU09RTC4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnLmxpbWl0ID0gbGltaXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2tpcCByZWNvcmRzXG4gICAqL1xuICBza2lwKG9mZnNldDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHNldCBza2lwL29mZnNldCBmb3IgdGhlIHF1ZXJ5IHdoaWNoIGhhcyBhbHJlYWR5IGJ1aWx0IFNPUUwuJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU3lub255bSBvZiBRdWVyeSNza2lwKClcbiAgICovXG4gIG9mZnNldCA9IHRoaXMuc2tpcDtcblxuICAvKipcbiAgICogU2V0IHF1ZXJ5IHNvcnQgd2l0aCBkaXJlY3Rpb25cbiAgICovXG4gIHNvcnQoc29ydDogUXVlcnlTb3J0PFMsIE4+IHwgc3RyaW5nKTogdGhpcztcbiAgc29ydChzb3J0OiBTT2JqZWN0RmllbGROYW1lczxTLCBOPiB8IHN0cmluZywgZGlyOiBTb3J0RGlyKTogdGhpcztcbiAgc29ydChcbiAgICBzb3J0OiBRdWVyeVNvcnQ8UywgTj4gfCBTT2JqZWN0RmllbGROYW1lczxTLCBOPiB8IHN0cmluZyxcbiAgICBkaXI/OiBTb3J0RGlyLFxuICApIHtcbiAgICBpZiAodGhpcy5fc29xbCkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICdDYW5ub3Qgc2V0IHNvcnQgZm9yIHRoZSBxdWVyeSB3aGljaCBoYXMgYWxyZWFkeSBidWlsdCBTT1FMLicsXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnQgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkaXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9jb25maWcuc29ydCA9IFtbc29ydCwgZGlyXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5zb3J0ID0gc29ydCBhcyBzdHJpbmcgfCB7IFtmaWVsZDogc3RyaW5nXTogU29ydERpciB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I3NvcnQoKVxuICAgKi9cbiAgb3JkZXJieTogdHlwZW9mIFF1ZXJ5LnByb3RvdHlwZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gIC8qKlxuICAgKiBJbmNsdWRlIGNoaWxkIHJlbGF0aW9uc2hpcCBxdWVyeSBhbmQgbW92ZSBkb3duIHRvIHRoZSBjaGlsZCBxdWVyeSBjb250ZXh0XG4gICAqL1xuICBpbmNsdWRlPFxuICAgIENSTiBleHRlbmRzIENoaWxkUmVsYXRpb25zaGlwTmFtZXM8UywgTj4sXG4gICAgQ04gZXh0ZW5kcyBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lPFMsIE4sIENSTj4sXG4gICAgQ0ZQIGV4dGVuZHMgRmllbGRQYXRoU3BlY2lmaWVyPFMsIENOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBDTj4sXG4gICAgQ0ZQQyBleHRlbmRzIEZpZWxkUHJvamVjdGlvbkNvbmZpZyA9IEZpZWxkUGF0aFNjb3BlZFByb2plY3Rpb248UywgQ04sIENGUD4sXG4gICAgQ1IgZXh0ZW5kcyBSZWNvcmQgPSBTT2JqZWN0UmVjb3JkPFMsIENOLCBDRlBDPlxuICA+KFxuICAgIGNoaWxkUmVsTmFtZTogQ1JOLFxuICAgIGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBDTj4+LFxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgQ04sIENGUD4+LFxuICAgIG9wdGlvbnM/OiB7IGxpbWl0PzogbnVtYmVyOyBvZmZzZXQ/OiBudW1iZXI7IHNvcnQ/OiBRdWVyeVNvcnQ8UywgQ04+IH0sXG4gICk6IFN1YlF1ZXJ5PFMsIE4sIFIsIFFSVCwgQ1JOLCBDTiwgQ1I+O1xuICBpbmNsdWRlPFxuICAgIENSTiBleHRlbmRzIENoaWxkUmVsYXRpb25zaGlwTmFtZXM8UywgTj4sXG4gICAgQ04gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4sXG4gICAgQ1IgZXh0ZW5kcyBSZWNvcmQgPSBTT2JqZWN0UmVjb3JkPFMsIENOPlxuICA+KFxuICAgIGNoaWxkUmVsTmFtZTogc3RyaW5nLFxuICAgIGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBDTj4+LFxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgQ04+PixcbiAgICBvcHRpb25zPzogeyBsaW1pdD86IG51bWJlcjsgb2Zmc2V0PzogbnVtYmVyOyBzb3J0PzogUXVlcnlTb3J0PFMsIENOPiB9LFxuICApOiBTdWJRdWVyeTxTLCBOLCBSLCBRUlQsIENSTiwgQ04sIENSPjtcblxuICBpbmNsdWRlPFxuICAgIENSTiBleHRlbmRzIENoaWxkUmVsYXRpb25zaGlwTmFtZXM8UywgTj4sXG4gICAgQ04gZXh0ZW5kcyBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lPFMsIE4sIENSTj4sXG4gICAgQ0ZQIGV4dGVuZHMgRmllbGRQYXRoU3BlY2lmaWVyPFMsIENOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBDTj4sXG4gICAgQ0ZQQyBleHRlbmRzIEZpZWxkUHJvamVjdGlvbkNvbmZpZyA9IEZpZWxkUGF0aFNjb3BlZFByb2plY3Rpb248UywgQ04sIENGUD4sXG4gICAgQ1IgZXh0ZW5kcyBSZWNvcmQgPSBTT2JqZWN0UmVjb3JkPFMsIENOLCBDRlBDPlxuICA+KFxuICAgIGNoaWxkUmVsTmFtZTogQ1JOIHwgc3RyaW5nLFxuICAgIGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBDTj4+LFxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgQ04sIENGUD4+LFxuICAgIG9wdGlvbnM6IHsgbGltaXQ/OiBudW1iZXI7IG9mZnNldD86IG51bWJlcjsgc29ydD86IFF1ZXJ5U29ydDxTLCBDTj4gfSA9IHt9LFxuICApOiBTdWJRdWVyeTxTLCBOLCBSLCBRUlQsIENSTiwgQ04sIENSPiB7XG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAnQ2Fubm90IGluY2x1ZGUgY2hpbGQgcmVsYXRpb25zaGlwIGludG8gdGhlIHF1ZXJ5IHdoaWNoIGhhcyBhbHJlYWR5IGJ1aWx0IFNPUUwuJyxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkQ29uZmlnOiBRdWVyeUNvbmZpZzxTLCBDTiwgQ0ZQPiA9IHtcbiAgICAgIGZpZWxkczogZmllbGRzID09PSBudWxsID8gdW5kZWZpbmVkIDogZmllbGRzLFxuICAgICAgdGFibGU6IGNoaWxkUmVsTmFtZSxcbiAgICAgIGNvbmRpdGlvbnM6IGNvbmRpdGlvbnMgPT09IG51bGwgPyB1bmRlZmluZWQgOiBjb25kaXRpb25zLFxuICAgICAgbGltaXQ6IG9wdGlvbnMubGltaXQsXG4gICAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgc29ydDogb3B0aW9ucy5zb3J0LFxuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgY29uc3QgY2hpbGRRdWVyeSA9IG5ldyBTdWJRdWVyeTxTLCBOLCBSLCBRUlQsIENSTiwgQ04sIENSPihcbiAgICAgIHRoaXMuX2Nvbm4sXG4gICAgICBjaGlsZFJlbE5hbWUgYXMgQ1JOLFxuICAgICAgY2hpbGRDb25maWcsXG4gICAgICB0aGlzLFxuICAgICk7XG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZFF1ZXJ5KTtcbiAgICByZXR1cm4gY2hpbGRRdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNsdWRlIGNoaWxkIHJlbGF0aW9uc2hpcCBxdWVyaWVzLCBidXQgbm90IG1vdmluZyBkb3duIHRvIHRoZSBjaGlsZHJlbiBjb250ZXh0XG4gICAqL1xuICBpbmNsdWRlQ2hpbGRyZW4oXG4gICAgaW5jbHVkZXM6IHtcbiAgICAgIFtDUk4gaW4gQ2hpbGRSZWxhdGlvbnNoaXBOYW1lczxTLCBOPl0/OiBRdWVyeUNvbmZpZzxcbiAgICAgICAgUyxcbiAgICAgICAgQ2hpbGRSZWxhdGlvbnNoaXBTT2JqZWN0TmFtZTxTLCBOLCBDUk4+XG4gICAgICA+O1xuICAgIH0sXG4gICkge1xuICAgIHR5cGUgQ1JOID0gQ2hpbGRSZWxhdGlvbnNoaXBOYW1lczxTLCBOPjtcbiAgICBpZiAodGhpcy5fc29xbCkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgaW5jbHVkZSBjaGlsZCByZWxhdGlvbnNoaXAgaW50byB0aGUgcXVlcnkgd2hpY2ggaGFzIGFscmVhZHkgYnVpbHQgU09RTC4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjcm5hbWUgb2YgT2JqZWN0LmtleXMoaW5jbHVkZXMpIGFzIENSTltdKSB7XG4gICAgICBjb25zdCB7IGNvbmRpdGlvbnMsIGZpZWxkcywgLi4ub3B0aW9ucyB9ID0gaW5jbHVkZXNbXG4gICAgICAgIGNybmFtZVxuICAgICAgXSBhcyBRdWVyeUNvbmZpZzxTLCBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lPFMsIE4sIENSTj4+O1xuICAgICAgdGhpcy5pbmNsdWRlKGNybmFtZSwgY29uZGl0aW9ucywgZmllbGRzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZyBtYXhGZXRjaCBxdWVyeSBvcHRpb25cbiAgICovXG4gIG1heEZldGNoKG1heEZldGNoOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vcHRpb25zLm1heEZldGNoID0gbWF4RmV0Y2g7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoaW5nIGF1dG8gZmV0Y2ggbW9kZVxuICAgKi9cbiAgYXV0b0ZldGNoKGF1dG9GZXRjaDogYm9vbGVhbikge1xuICAgIHRoaXMuX29wdGlvbnMuYXV0b0ZldGNoID0gYXV0b0ZldGNoO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmbGFnIHRvIHNjYW4gYWxsIHJlY29yZHMgaW5jbHVkaW5nIGRlbGV0ZWQgYW5kIGFyY2hpdmVkLlxuICAgKi9cbiAgc2NhbkFsbChzY2FuQWxsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zY2FuQWxsID0gc2NhbkFsbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgc2V0UmVzcG9uc2VUYXJnZXQ8UVJUMSBleHRlbmRzIFF1ZXJ5UmVzcG9uc2VUYXJnZXQ+KFxuICAgIHJlc3BvbnNlVGFyZ2V0OiBRUlQxLFxuICApOiBRdWVyeTxTLCBOLCBSLCBRUlQxPiB7XG4gICAgaWYgKHJlc3BvbnNlVGFyZ2V0IGluIFJlc3BvbnNlVGFyZ2V0cykge1xuICAgICAgdGhpcy5fb3B0aW9ucy5yZXNwb25zZVRhcmdldCA9IHJlc3BvbnNlVGFyZ2V0O1xuICAgIH1cbiAgICAvLyBmb3JjZSBjaGFuZ2UgcXVlcnkgcmVzcG9uc2UgdGFyZ2V0IHdpdGhvdXQgY2hhbmdpbmcgaW5zdGFuY2VcbiAgICByZXR1cm4gKHRoaXMgYXMgUXVlcnk8UywgTiwgUj4pIGFzIFF1ZXJ5PFMsIE4sIFIsIFFSVDE+O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgcXVlcnkgYW5kIGZldGNoIHJlY29yZHMgZnJvbSBzZXJ2ZXIuXG4gICAqL1xuICBleGVjdXRlPFFSVDEgZXh0ZW5kcyBRdWVyeVJlc3BvbnNlVGFyZ2V0ID0gUVJUPihcbiAgICBvcHRpb25zXzogUGFydGlhbDxRdWVyeU9wdGlvbnM+ICYgeyByZXNwb25zZVRhcmdldD86IFFSVDEgfSA9IHt9LFxuICApOiBRdWVyeTxTLCBOLCBSLCBRUlQxPiB7XG4gICAgaWYgKHRoaXMuX2V4ZWN1dGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlLWV4ZWN1dGluZyBhbHJlYWR5IGV4ZWN1dGVkIHF1ZXJ5Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZpbmlzaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhbHJlYWR5IGNsb3NlZCBxdWVyeScpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBvcHRpb25zXy5oZWFkZXJzIHx8IHRoaXMuX29wdGlvbnMuaGVhZGVycyxcbiAgICAgIHJlc3BvbnNlVGFyZ2V0OiBvcHRpb25zXy5yZXNwb25zZVRhcmdldCB8fCB0aGlzLl9vcHRpb25zLnJlc3BvbnNlVGFyZ2V0LFxuICAgICAgYXV0b0ZldGNoOiBvcHRpb25zXy5hdXRvRmV0Y2ggfHwgdGhpcy5fb3B0aW9ucy5hdXRvRmV0Y2gsXG4gICAgICBtYXhGZXRjaDogb3B0aW9uc18ubWF4RmV0Y2ggfHwgdGhpcy5fb3B0aW9ucy5tYXhGZXRjaCxcbiAgICAgIHNjYW5BbGw6IG9wdGlvbnNfLnNjYW5BbGwgfHwgdGhpcy5fb3B0aW9ucy5zY2FuQWxsLFxuICAgICAgc3RvcmVSZWNvcmRzOiBvcHRpb25zXy5zdG9yZVJlY29yZHMgfHwgdGhpcy5fb3B0aW9ucy5zdG9yZVJlY29yZHMsXG4gICAgfTtcblxuICAgIC8vIGNvbGxlY3QgZmV0Y2hlZCByZWNvcmRzIGluIGFycmF5XG4gICAgLy8gb25seSB3aGVuIHJlc3BvbnNlIHRhcmdldCBpcyBSZWNvcmRzIGFuZFxuICAgIC8vIGVpdGhlciBjYWxsYmFjayBvciBjaGFpbmluZyBwcm9taXNlcyBhcmUgYXZhaWxhYmxlIHRvIHRoaXMgcXVlcnkuXG4gICAgdGhpcy5vbmNlKCdmZXRjaCcsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVRhcmdldCA9PT0gUmVzcG9uc2VUYXJnZXRzLlJlY29yZHMgJiZcbiAgICAgICAgdGhpcy5fY2hhaW5pbmdcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoJy0tLSBjb2xsZWN0aW5nIGFsbCBmZXRjaGVkIHJlY29yZHMgLS0tJyk7XG4gICAgICAgIGNvbnN0IHJlY29yZHM6IFJlY29yZFtdID0gW107XG4gICAgICAgIGNvbnN0IG9uUmVjb3JkID0gKHJlY29yZDogUmVjb3JkKSA9PiByZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgICAgICAgdGhpcy5vbigncmVjb3JkJywgb25SZWNvcmQpO1xuICAgICAgICB0aGlzLm9uY2UoJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdyZWNvcmQnLCBvblJlY29yZCk7XG4gICAgICAgICAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHJlY29yZHMsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZsYWcgdG8gcHJldmVudCByZS1leGVjdXRpb25cbiAgICB0aGlzLl9leGVjdXRlZCA9IHRydWU7XG5cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gc3RhcnQgYWN0dWFsIHF1ZXJ5XG4gICAgICB0aGlzLl9sb2dnZXIuZGVidWcoJz4+PiBRdWVyeSBzdGFydCA+Pj4nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2V4ZWN1dGUob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZygnKioqIFF1ZXJ5IGZpbmlzaGVkICoqKicpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCctLS0gUXVlcnkgZXJyb3IgLS0tJywgZXJyb3IpO1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvLyByZXR1cm4gUXVlcnkgaW5zdGFuY2UgZm9yIGNoYWluaW5nXG4gICAgcmV0dXJuICh0aGlzIGFzIFF1ZXJ5PFMsIE4sIFI+KSBhcyBRdWVyeTxTLCBOLCBSLCBRUlQxPjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I2V4ZWN1dGUoKVxuICAgKi9cbiAgZXhlYyA9IHRoaXMuZXhlY3V0ZTtcblxuICAvKipcbiAgICogU3lub255bSBvZiBRdWVyeSNleGVjdXRlKClcbiAgICovXG4gIHJ1biA9IHRoaXMuZXhlY3V0ZTtcblxuICBwcml2YXRlIGxvY2F0b3JUb1VybCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRvclxuICAgICAgPyBbdGhpcy5fY29ubi5fYmFzZVVybCgpLCAnL3F1ZXJ5LycsIHRoaXMuX2xvY2F0b3JdLmpvaW4oJycpXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxUb0xvY2F0b3IodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnNwbGl0KCcvJykucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdFJlc3BvbnNlKFxuICAgIHJhd0RvbmU6IGJvb2xlYW4sXG4gICAgcmVzcG9uc2VUYXJnZXQ6IFF1ZXJ5UmVzcG9uc2VUYXJnZXRbM10sXG4gICk6IG51bWJlcjtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RSZXNwb25zZShcbiAgICByYXdEb25lOiBib29sZWFuLFxuICAgIHJlc3BvbnNlVGFyZ2V0OiBRdWVyeVJlc3BvbnNlVGFyZ2V0WzJdLFxuICApOiBSO1xuICBwcml2YXRlIGNvbnN0cnVjdFJlc3BvbnNlKFxuICAgIHJhd0RvbmU6IGJvb2xlYW4sXG4gICAgcmVzcG9uc2VUYXJnZXQ6IFF1ZXJ5UmVzcG9uc2VUYXJnZXRbMV0sXG4gICk6IFJbXTtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RSZXNwb25zZShcbiAgICByYXdEb25lOiBib29sZWFuLFxuICAgIHJlc3BvbnNlVGFyZ2V0OiBRdWVyeVJlc3BvbnNlVGFyZ2V0WzBdLFxuICApOiBRdWVyeVJlc3VsdDxSPjtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RSZXNwb25zZShcbiAgICByYXdEb25lOiBib29sZWFuLFxuICAgIHJlc3BvbnNlVGFyZ2V0OiBRdWVyeVJlc3BvbnNlVGFyZ2V0LFxuICApOiBRdWVyeVJlc3VsdDxSPiB8IFJbXSB8IG51bWJlciB8IFIgfCBudWxsIHtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlVGFyZ2V0KSB7XG4gICAgICBjYXNlICdDb3VudCc6XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsU2l6ZTtcbiAgICAgIGNhc2UgJ1NpbmdsZVJlY29yZCc6XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZHM/LlswXSA/PyBudWxsO1xuICAgICAgY2FzZSAnUmVjb3Jkcyc6XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZHMgPz8gW107XG4gICAgICAvLyBRdWVyeVJlc3VsdCBpcyBkZWZhdWx0IHJlc3BvbnNlIHRhcmdldFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi57XG4gICAgICAgICAgICByZWNvcmRzOiB0aGlzLnJlY29yZHMgPz8gW10sXG4gICAgICAgICAgICB0b3RhbFNpemU6IHRoaXMudG90YWxTaXplLFxuICAgICAgICAgICAgZG9uZTogcmF3RG9uZSA/PyB0cnVlLCAvLyB3aGVuIG5vIHJlY29yZHMsIGRvbmUgaXMgb21pdHRlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4uKHRoaXMuX2xvY2F0b3IgPyB7IG5leHRSZWNvcmRzVXJsOiB0aGlzLmxvY2F0b3JUb1VybCgpIH0gOiB7fSksXG4gICAgICAgIH07XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2V4ZWN1dGUob3B0aW9uczogUXVlcnlPcHRpb25zKTogUHJvbWlzZTxRdWVyeVJlc3BvbnNlPFI+PiB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCByZXNwb25zZVRhcmdldCwgYXV0b0ZldGNoLCBtYXhGZXRjaCwgc2NhbkFsbCwgc3RvcmVSZWNvcmRzIH0gPSBvcHRpb25zO1xuICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZygnZXhlY3V0ZSB3aXRoIG9wdGlvbnMnLCBvcHRpb25zKTtcbiAgICBsZXQgdXJsO1xuICAgIGlmICh0aGlzLl9sb2NhdG9yKSB7XG4gICAgICB1cmwgPSB0aGlzLmxvY2F0b3JUb1VybCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzb3FsID0gYXdhaXQgdGhpcy50b1NPUUwoKTtcbiAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgU09RTCA9ICR7c29xbH1gKTtcbiAgICAgIHVybCA9IFtcbiAgICAgICAgdGhpcy5fY29ubi5fYmFzZVVybCgpLFxuICAgICAgICAnLycsXG4gICAgICAgIHNjYW5BbGwgPyAncXVlcnlBbGwnIDogJ3F1ZXJ5JyxcbiAgICAgICAgJz9xPScsXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzb3FsKSxcbiAgICAgIF0uam9pbignJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3Q8Uj4oeyBtZXRob2Q6ICdHRVQnLCB1cmwsIGhlYWRlcnMgfSk7XG4gICAgdGhpcy5lbWl0KCdmZXRjaCcpO1xuICAgIHRoaXMudG90YWxTaXplID0gZGF0YS50b3RhbFNpemU7XG4gICAgaWYgKHN0b3JlUmVjb3Jkcykge1xuICAgICAgdGhpcy5yZWNvcmRzID0gKHRoaXMucmVjb3JkcyA/PyBbXSkuY29uY2F0KFxuICAgICAgICBtYXhGZXRjaCAtICh0aGlzLnJlY29yZHM/Lmxlbmd0aCA/PyAwKSA+IGRhdGEucmVjb3Jkcy5sZW5ndGhcbiAgICAgICAgICA/IGRhdGEucmVjb3Jkc1xuICAgICAgICAgIDogZGF0YS5yZWNvcmRzLnNsaWNlKDAsIG1heEZldGNoIC0gKHRoaXMucmVjb3Jkcz8ubGVuZ3RoID8/IDApKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRvciA9IGRhdGEubmV4dFJlY29yZHNVcmxcbiAgICAgID8gdGhpcy51cmxUb0xvY2F0b3IoZGF0YS5uZXh0UmVjb3Jkc1VybClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuX2ZpbmlzaGVkID1cbiAgICAgIHRoaXMuX2ZpbmlzaGVkIHx8XG4gICAgICBkYXRhLmRvbmUgfHxcbiAgICAgICFhdXRvRmV0Y2ggfHxcbiAgICAgIHRoaXMudG90YWxGZXRjaGVkID49IG1heEZldGNoIHx8XG4gICAgICAvLyB0aGlzIGlzIHdoYXQgdGhlIHJlc3BvbnNlIGxvb2tzIGxpa2Ugd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAgKGRhdGEucmVjb3Jkcy5sZW5ndGggPT09IDAgJiYgZGF0YS5kb25lID09PSB1bmRlZmluZWQpO1xuXG4gICAgLy8gc3RyZWFtaW5nIHJlY29yZCBpbnN0YW5jZXNcbiAgICBjb25zdCBudW1SZWNvcmRzID0gZGF0YS5yZWNvcmRzPy5sZW5ndGggPz8gMDtcbiAgICBsZXQgdG90YWxGZXRjaGVkID0gdGhpcy50b3RhbEZldGNoZWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1SZWNvcmRzOyBpKyspIHtcbiAgICAgIGlmICh0b3RhbEZldGNoZWQgPj0gbWF4RmV0Y2gpIHtcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3Jkc1tpXTtcbiAgICAgIHRoaXMuZW1pdCgncmVjb3JkJywgcmVjb3JkLCB0b3RhbEZldGNoZWQsIHRoaXMpO1xuICAgICAgdG90YWxGZXRjaGVkICs9IDE7XG4gICAgfVxuICAgIHRoaXMudG90YWxGZXRjaGVkID0gdG90YWxGZXRjaGVkO1xuXG4gICAgaWYgKHRoaXMuX2ZpbmlzaGVkKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuY29uc3RydWN0UmVzcG9uc2UoZGF0YS5kb25lLCByZXNwb25zZVRhcmdldCk7XG4gICAgICAvLyBvbmx5IGZpcmUgcmVzcG9uc2UgZXZlbnQgd2hlbiBpdCBzaG91bGQgYmUgbm90aWZpZWQgcGVyIGZldGNoXG4gICAgICBpZiAocmVzcG9uc2VUYXJnZXQgIT09IFJlc3BvbnNlVGFyZ2V0cy5SZWNvcmRzKSB7XG4gICAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCByZXNwb25zZSwgdGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fZXhlY3V0ZShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT2J0YWluIHJlYWRhYmxlIHN0cmVhbSBpbnN0YW5jZVxuICAgKi9cbiAgc3RyZWFtKHR5cGU6ICdyZWNvcmQnKTogU2VyaWFsaXphYmxlPFI+O1xuICBzdHJlYW0odHlwZTogJ2NzdicpOiBSZWFkYWJsZTtcbiAgc3RyZWFtKHR5cGU6ICdyZWNvcmQnIHwgJ2NzdicgPSAnY3N2Jykge1xuICAgIGlmICghdGhpcy5fZmluaXNoZWQgJiYgIXRoaXMuX2V4ZWN1dGVkKSB7XG4gICAgICB0aGlzLmV4ZWN1dGUoeyBhdXRvRmV0Y2g6IHRydWUgfSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlID09PSAncmVjb3JkJyA/IHRoaXMuX3N0cmVhbSA6IHRoaXMuX3N0cmVhbS5zdHJlYW0odHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUGlwZSB0aGUgcXVlcmllZCByZWNvcmRzIHRvIGFub3RoZXIgc3RyZWFtXG4gICAqIFRoaXMgaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHk7IFF1ZXJ5IGlzIG5vdCBhIHJlY29yZCBzdHJlYW0gaW5zdGFuY2UgYW55bW9yZSBpbiAyLjAuXG4gICAqIElmIHlvdSB3YW50IGEgcmVjb3JkIHN0cmVhbSBpbnN0YW5jZSwgdXNlIGBRdWVyeSNzdHJlYW0oJ3JlY29yZCcpYC5cbiAgICovXG4gIHBpcGUoc3RyZWFtOiBOb2RlSlMuV3JpdGFibGVTdHJlYW0pIHtcbiAgICByZXR1cm4gdGhpcy5zdHJlYW0oJ3JlY29yZCcpLnBpcGUoc3RyZWFtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBhc3luYyBfZXhwYW5kRmllbGRzKHNvYmplY3RfPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX3NvcWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBleHBhbmQgZmllbGRzIGZvciB0aGUgcXVlcnkgd2hpY2ggaGFzIGFscmVhZHkgYnVpbHQgU09RTC4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgeyBmaWVsZHMgPSBbXSwgdGFibGUgPSAnJyB9ID0gdGhpcy5fY29uZmlnO1xuICAgIGNvbnN0IHNvYmplY3QgPSBzb2JqZWN0XyB8fCB0YWJsZTtcbiAgICB0aGlzLl9sb2dnZXIuZGVidWcoXG4gICAgICBgX2V4cGFuZEZpZWxkczogc29iamVjdCA9ICR7c29iamVjdH0sIGZpZWxkcyA9ICR7ZmllbGRzLmpvaW4oJywgJyl9YCxcbiAgICApO1xuICAgIGNvbnN0IFtlZmllbGRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuX2V4cGFuZEFzdGVyaXNrRmllbGRzKHNvYmplY3QsIGZpZWxkcyksXG4gICAgICAuLi50aGlzLl9jaGlsZHJlbi5tYXAoYXN5bmMgKGNoaWxkUXVlcnkpID0+IHtcbiAgICAgICAgYXdhaXQgY2hpbGRRdWVyeS5fZXhwYW5kRmllbGRzKCk7XG4gICAgICAgIHJldHVybiBbXSBhcyBzdHJpbmdbXTtcbiAgICAgIH0pLFxuICAgIF0pO1xuICAgIHRoaXMuX2NvbmZpZy5maWVsZHMgPSBlZmllbGRzO1xuICAgIHRoaXMuX2NvbmZpZy5pbmNsdWRlcyA9IHRoaXMuX2NoaWxkcmVuXG4gICAgICAubWFwKChjcXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgY2NvbmZpZyA9IGNxdWVyeS5fcXVlcnkuX2NvbmZpZztcbiAgICAgICAgcmV0dXJuIFtjY29uZmlnLnRhYmxlLCBjY29uZmlnXSBhcyBbc3RyaW5nLCBTT1FMUXVlcnlDb25maWddO1xuICAgICAgfSlcbiAgICAgIC5yZWR1Y2U8eyBbbmFtZTogc3RyaW5nXTogU09RTFF1ZXJ5Q29uZmlnIH0+KFxuICAgICAgICAoaW5jbHVkZXMsIFtjdGFibGUsIGNjb25maWddKSA9PiAoe1xuICAgICAgICAgIC4uLmluY2x1ZGVzLFxuICAgICAgICAgIFtjdGFibGVdOiBjY29uZmlnLFxuICAgICAgICB9KSxcbiAgICAgICAge30sXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBfZmluZFJlbGF0aW9uT2JqZWN0KHJlbE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdGFibGUgPSB0aGlzLl9jb25maWcudGFibGU7XG4gICAgaWYgKCF0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB0YWJsZSBpbmZvcm1hdGlvbiBwcm92aWRlZCBpbiB0aGUgcXVlcnknKTtcbiAgICB9XG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFxuICAgICAgYGZpbmRpbmcgdGFibGUgZm9yIHJlbGF0aW9uIFwiJHtyZWxOYW1lfVwiIGluIFwiJHt0YWJsZX1cIi4uLmAsXG4gICAgKTtcbiAgICBjb25zdCBzb2JqZWN0ID0gYXdhaXQgdGhpcy5fY29ubi5kZXNjcmliZSQodGFibGUpO1xuICAgIGNvbnN0IHVwcGVyUm5hbWUgPSByZWxOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgZm9yIChjb25zdCBjciBvZiBzb2JqZWN0LmNoaWxkUmVsYXRpb25zaGlwcykge1xuICAgICAgaWYgKFxuICAgICAgICAoY3IucmVsYXRpb25zaGlwTmFtZSB8fCAnJykudG9VcHBlckNhc2UoKSA9PT0gdXBwZXJSbmFtZSAmJlxuICAgICAgICBjci5jaGlsZFNPYmplY3RcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gY3IuY2hpbGRTT2JqZWN0O1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNoaWxkIHJlbGF0aW9uc2hpcCBmb3VuZDogJHtyZWxOYW1lfWApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBfZXhwYW5kQXN0ZXJpc2tGaWVsZHMoXG4gICAgc29iamVjdDogc3RyaW5nLFxuICAgIGZpZWxkczogc3RyaW5nW10sXG4gICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBjb25zdCBleHBhbmRlZEZpZWxkcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZmllbGRzLm1hcChhc3luYyAoZmllbGQpID0+IHRoaXMuX2V4cGFuZEFzdGVyaXNrRmllbGQoc29iamVjdCwgZmllbGQpKSxcbiAgICApO1xuICAgIHJldHVybiBleHBhbmRlZEZpZWxkcy5yZWR1Y2UoXG4gICAgICAoZWZsZHM6IHN0cmluZ1tdLCBmbGRzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IFsuLi5lZmxkcywgLi4uZmxkc10sXG4gICAgICBbXSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBfZXhwYW5kQXN0ZXJpc2tGaWVsZChcbiAgICBzb2JqZWN0OiBzdHJpbmcsXG4gICAgZmllbGQ6IHN0cmluZyxcbiAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgZXhwYW5kaW5nIGZpZWxkIFwiJHtmaWVsZH1cIiBpbiBcIiR7c29iamVjdH1cIi4uLmApO1xuICAgIGNvbnN0IGZwYXRoID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgICBpZiAoZnBhdGhbZnBhdGgubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgICAgY29uc3Qgc28gPSBhd2FpdCB0aGlzLl9jb25uLmRlc2NyaWJlJChzb2JqZWN0KTtcbiAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgdGFibGUgJHtzb2JqZWN0fSBoYXMgYmVlbiBkZXNjcmliZWRgKTtcbiAgICAgIGlmIChmcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHJuYW1lID0gZnBhdGguc2hpZnQoKTtcbiAgICAgICAgZm9yIChjb25zdCBmIG9mIHNvLmZpZWxkcykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGYucmVsYXRpb25zaGlwTmFtZSAmJlxuICAgICAgICAgICAgcm5hbWUgJiZcbiAgICAgICAgICAgIGYucmVsYXRpb25zaGlwTmFtZS50b1VwcGVyQ2FzZSgpID09PSBybmFtZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCByZmllbGQgPSBmO1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlVG8gPSByZmllbGQucmVmZXJlbmNlVG8gfHwgW107XG4gICAgICAgICAgICBjb25zdCBydGFibGUgPSByZWZlcmVuY2VUby5sZW5ndGggPT09IDEgPyByZWZlcmVuY2VUb1swXSA6ICdOYW1lJztcbiAgICAgICAgICAgIGNvbnN0IGZwYXRocyA9IGF3YWl0IHRoaXMuX2V4cGFuZEFzdGVyaXNrRmllbGQoXG4gICAgICAgICAgICAgIHJ0YWJsZSxcbiAgICAgICAgICAgICAgZnBhdGguam9pbignLicpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBmcGF0aHMubWFwKChmcCkgPT4gYCR7cm5hbWV9LiR7ZnB9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzby5maWVsZHMubWFwKChmKSA9PiBmLm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gW2ZpZWxkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBsYWluIHBsYW4gZm9yIGV4ZWN1dGluZyBxdWVyeVxuICAgKi9cbiAgYXN5bmMgZXhwbGFpbigpIHtcbiAgICBjb25zdCBzb3FsID0gYXdhaXQgdGhpcy50b1NPUUwoKTtcbiAgICB0aGlzLl9sb2dnZXIuZGVidWcoYFNPUUwgPSAke3NvcWx9YCk7XG4gICAgY29uc3QgdXJsID0gYC9xdWVyeS8/ZXhwbGFpbj0ke2VuY29kZVVSSUNvbXBvbmVudChzb3FsKX1gO1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3Q8UXVlcnlFeHBsYWluUmVzdWx0Pih1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBTT1FMIGV4cHJlc3Npb24gZm9yIHRoZSBxdWVyeVxuICAgKi9cbiAgYXN5bmMgdG9TT1FMKCkge1xuICAgIGlmICh0aGlzLl9zb3FsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc29xbDtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fZXhwYW5kRmllbGRzKCk7XG4gICAgcmV0dXJuIGNyZWF0ZVNPUUwodGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9taXNlL0ErIGludGVyZmFjZVxuICAgKiBodHRwOi8vcHJvbWlzZXMtYXBsdXMuZ2l0aHViLmlvL3Byb21pc2VzLXNwZWMvXG4gICAqXG4gICAqIERlbGVnYXRlIHRvIGRlZmVycmVkIHByb21pc2UsIHJldHVybiBwcm9taXNlIGluc3RhbmNlIGZvciBxdWVyeSByZXN1bHRcbiAgICovXG4gIHRoZW48VSwgVj4oXG4gICAgb25SZXNvbHZlPzpcbiAgICAgIHwgKChxcjogUXVlcnlSZXNwb25zZTxSLCBRUlQ+KSA9PiBVIHwgUHJvbWlzZTxVPilcbiAgICAgIHwgbnVsbFxuICAgICAgfCB1bmRlZmluZWQsXG4gICAgb25SZWplY3Q/OiAoKGVycjogRXJyb3IpID0+IFYgfCBQcm9taXNlPFY+KSB8IG51bGwgfCB1bmRlZmluZWQsXG4gICk6IFByb21pc2U8VSB8IFY+IHtcbiAgICB0aGlzLl9jaGFpbmluZyA9IHRydWU7XG4gICAgaWYgKCF0aGlzLl9maW5pc2hlZCAmJiAhdGhpcy5fZXhlY3V0ZWQpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZSgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3Byb21pc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2ludmFsaWQgc3RhdGU6IHByb21pc2UgaXMgbm90IHNldCBhZnRlciBxdWVyeSBleGVjdXRpb24nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2UudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgfVxuXG4gIGNhdGNoKFxuICAgIG9uUmVqZWN0OiAoXG4gICAgICBlcnI6IEVycm9yLFxuICAgICkgPT4gUXVlcnlSZXNwb25zZTxSLCBRUlQ+IHwgUHJvbWlzZTxRdWVyeVJlc3BvbnNlPFIsIFFSVD4+LFxuICApOiBQcm9taXNlPFF1ZXJ5UmVzcG9uc2U8UiwgUVJUPj4ge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3QpO1xuICB9XG5cbiAgcHJvbWlzZSgpOiBQcm9taXNlPFF1ZXJ5UmVzcG9uc2U8UiwgUVJUPj4ge1xuICAgIC8vIFRPRE8oY3Jpc3RpYW4pOiB2ZXJpZnkgdGhpcyBpcyBjb3JyZWN0XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgodGhpcyBhcyB1bmtub3duKSBhcyBRdWVyeVJlc3BvbnNlPFIsIFFSVD4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1bGsgZGVsZXRlIHF1ZXJpZWQgcmVjb3Jkc1xuICAgKi9cbiAgZGVzdHJveShvcHRpb25zPzogUXVlcnlEZXN0cm95T3B0aW9ucyk6IFByb21pc2U8U2F2ZVJlc3VsdFtdPjtcbiAgZGVzdHJveSh0eXBlOiBOLCBvcHRpb25zPzogUXVlcnlEZXN0cm95T3B0aW9ucyk6IFByb21pc2U8U2F2ZVJlc3VsdFtdPjtcbiAgZGVzdHJveSh0eXBlPzogTiB8IFF1ZXJ5RGVzdHJveU9wdGlvbnMsIG9wdGlvbnM/OiBRdWVyeURlc3Ryb3lPcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0gdHlwZTtcbiAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHR5cGVfOiBPcHRpb25hbDxOPiA9IHR5cGUgfHwgKHRoaXMuX2NvbmZpZy50YWJsZSBhcyBPcHRpb25hbDxOPik7XG4gICAgaWYgKCF0eXBlXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnU09RTCBiYXNlZCBxdWVyeSBuZWVkcyBTT2JqZWN0IHR5cGUgaW5mb3JtYXRpb24gdG8gYnVsayBkZWxldGUuJyxcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIFNldCB0aGUgdGhyZXNob2xkIG51bWJlciB0byBwYXNzIHRvIGJ1bGsgQVBJXG4gICAgY29uc3QgdGhyZXNob2xkTnVtID1cbiAgICAgIG9wdGlvbnMuYWxsb3dCdWxrID09PSBmYWxzZVxuICAgICAgICA/IC0xXG4gICAgICAgIDogdHlwZW9mIG9wdGlvbnMuYnVsa1RocmVzaG9sZCA9PT0gJ251bWJlcidcbiAgICAgICAgICA/IG9wdGlvbnMuYnVsa1RocmVzaG9sZFxuICAgICAgICAgIDogLy8gZGV0ZXJtaW5lIHRocmVzaG9sZCBpZiB0aGUgY29ubmVjdGlvbiB2ZXJzaW9uIHN1cHBvcnRzIFNPYmplY3QgY29sbGVjdGlvbiBBUEkgb3Igbm90XG4gICAgICAgICAgdGhpcy5fY29ubi5fZW5zdXJlVmVyc2lvbig0MilcbiAgICAgICAgICAgID8gREVGQVVMVF9CVUxLX1RIUkVTSE9MRFxuICAgICAgICAgICAgOiB0aGlzLl9jb25uLl9tYXhSZXF1ZXN0IC8gMjtcblxuICAgIGNvbnN0IGJ1bGtBcGlWZXJzaW9uID0gb3B0aW9ucy5idWxrQXBpVmVyc2lvbiA/PyBERUZBVUxUX0JVTEtfQVBJX1ZFUlNJT047XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlQmF0Y2ggPSAoKSA9PlxuICAgICAgICB0aGlzLl9jb25uXG4gICAgICAgICAgLnNvYmplY3QodHlwZV8pXG4gICAgICAgICAgLmRlbGV0ZUJ1bGsoKVxuICAgICAgICAgIC5vbigncmVzcG9uc2UnLCByZXNvbHZlKVxuICAgICAgICAgIC5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgbGV0IHJlY29yZHM6IFJlY29yZFtdID0gW107XG4gICAgICBsZXQgYmF0Y2g6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUJhdGNoPiB8IG51bGwgPSBudWxsO1xuICAgICAgY29uc3QgaGFuZGxlUmVjb3JkID0gKHJlYzogUmVjb3JkKSA9PiB7XG4gICAgICAgIGlmICghcmVjLklkKSB7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1F1ZXJpZWQgcmVjb3JkIGRvZXMgbm90IGluY2x1ZGUgU2FsZXNmb3JjZSByZWNvcmQgSUQuJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWNvcmQ6IFJlY29yZCA9IHsgSWQ6IHJlYy5JZCB9O1xuICAgICAgICBpZiAoYmF0Y2gpIHtcbiAgICAgICAgICBiYXRjaC53cml0ZShyZWNvcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY29yZHMucHVzaChyZWNvcmQpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRocmVzaG9sZE51bSA+PSAwICYmXG4gICAgICAgICAgICByZWNvcmRzLmxlbmd0aCA+IHRocmVzaG9sZE51bSAmJlxuICAgICAgICAgICAgYnVsa0FwaVZlcnNpb24gPT09IDFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFVzZSBidWxrIGRlbGV0ZSBpbnN0ZWFkIG9mIFNPYmplY3QgUkVTVCBBUElcbiAgICAgICAgICAgIGJhdGNoID0gY3JlYXRlQmF0Y2goKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcbiAgICAgICAgICAgICAgYmF0Y2gud3JpdGUocmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlY29yZHMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBoYW5kbGVFbmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChiYXRjaCkge1xuICAgICAgICAgIGJhdGNoLmVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkcyA9IHJlY29yZHMubWFwKChyZWNvcmQpID0+IHJlY29yZC5JZCBhcyBzdHJpbmcpO1xuICAgICAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCA+IHRocmVzaG9sZE51bSAmJiBidWxrQXBpVmVyc2lvbiA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5fY29ubi5idWxrMlxuICAgICAgICAgICAgICAubG9hZEFuZFdhaXRGb3JSZXN1bHRzKHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHR5cGVfLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHJlY29yZHMsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChhbGxSZXN1bHRzKSA9PlxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm1hcEJ1bGtWMlJlc3VsdHNUb1NhdmVSZXN1bHRzKGFsbFJlc3VsdHMpKSxcbiAgICAgICAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5cbiAgICAgICAgICAgICAgLnNvYmplY3QodHlwZV8pXG4gICAgICAgICAgICAgIC5kZXN0cm95KGlkcywgeyBhbGxvd1JlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuc3RyZWFtKCdyZWNvcmQnKVxuICAgICAgICAub24oJ2RhdGEnLCBoYW5kbGVSZWNvcmQpXG4gICAgICAgIC5vbignZW5kJywgaGFuZGxlRW5kKVxuICAgICAgICAub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsZXRlID0gdGhpcy5kZXN0cm95O1xuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIFF1ZXJ5I2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsID0gdGhpcy5kZXN0cm95O1xuXG4gIC8qKlxuICAgKiBCdWxrIHVwZGF0ZSBxdWVyaWVkIHJlY29yZHMsIHVzaW5nIGdpdmVuIG1hcHBpbmcgZnVuY3Rpb24vb2JqZWN0XG4gICAqL1xuICB1cGRhdGU8VVIgZXh0ZW5kcyBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj4+KFxuICAgIG1hcHBpbmc6ICgocmVjOiBSKSA9PiBVUikgfCBVUixcbiAgICB0eXBlOiBOLFxuICAgIG9wdGlvbnM/OiBRdWVyeVVwZGF0ZU9wdGlvbnMsXG4gICk6IFByb21pc2U8U2F2ZVJlc3VsdFtdPjtcbiAgdXBkYXRlPFVSIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+PihcbiAgICBtYXBwaW5nOiAoKHJlYzogUikgPT4gVVIpIHwgVVIsXG4gICAgb3B0aW9ucz86IFF1ZXJ5VXBkYXRlT3B0aW9ucyxcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xuICB1cGRhdGU8VVIgZXh0ZW5kcyBTT2JqZWN0SW5wdXRSZWNvcmQ8UywgTj4+KFxuICAgIG1hcHBpbmc6ICgocmVjOiBSKSA9PiBVUikgfCBVUixcbiAgICB0eXBlPzogTiB8IFF1ZXJ5VXBkYXRlT3B0aW9ucyxcbiAgICBvcHRpb25zPzogUXVlcnlVcGRhdGVPcHRpb25zLFxuICApIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB0eXBlO1xuICAgICAgdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3QgdHlwZV86IE9wdGlvbmFsPE4+ID1cbiAgICAgIHR5cGUgfHwgKHRoaXMuX2NvbmZpZyAmJiAodGhpcy5fY29uZmlnLnRhYmxlIGFzIE9wdGlvbmFsPE4+KSk7XG4gICAgaWYgKCF0eXBlXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnU09RTCBiYXNlZCBxdWVyeSBuZWVkcyBTT2JqZWN0IHR5cGUgaW5mb3JtYXRpb24gdG8gYnVsayB1cGRhdGUuJyxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZVN0cmVhbSA9XG4gICAgICB0eXBlb2YgbWFwcGluZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IFJlY29yZFN0cmVhbS5tYXAobWFwcGluZylcbiAgICAgICAgOiBSZWNvcmRTdHJlYW0ucmVjb3JkTWFwU3RyZWFtKG1hcHBpbmcpO1xuICAgIC8vIFNldCB0aGUgdGhyZXNob2xkIG51bWJlciB0byBwYXNzIHRvIGJ1bGsgQVBJXG4gICAgY29uc3QgdGhyZXNob2xkTnVtID1cbiAgICAgIG9wdGlvbnMuYWxsb3dCdWxrID09PSBmYWxzZVxuICAgICAgICA/IC0xXG4gICAgICAgIDogdHlwZW9mIG9wdGlvbnMuYnVsa1RocmVzaG9sZCA9PT0gJ251bWJlcidcbiAgICAgICAgICA/IG9wdGlvbnMuYnVsa1RocmVzaG9sZFxuICAgICAgICAgIDogLy8gZGV0ZXJtaW5lIHRocmVzaG9sZCBpZiB0aGUgY29ubmVjdGlvbiB2ZXJzaW9uIHN1cHBvcnRzIFNPYmplY3QgY29sbGVjdGlvbiBBUEkgb3Igbm90XG4gICAgICAgICAgdGhpcy5fY29ubi5fZW5zdXJlVmVyc2lvbig0MilcbiAgICAgICAgICAgID8gREVGQVVMVF9CVUxLX1RIUkVTSE9MRFxuICAgICAgICAgICAgOiB0aGlzLl9jb25uLl9tYXhSZXF1ZXN0IC8gMjtcbiAgICBjb25zdCBidWxrQXBpVmVyc2lvbiA9IG9wdGlvbnMuYnVsa0FwaVZlcnNpb24gPz8gREVGQVVMVF9CVUxLX0FQSV9WRVJTSU9OO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVCYXRjaCA9ICgpID0+XG4gICAgICAgIHRoaXMuX2Nvbm5cbiAgICAgICAgICAuc29iamVjdCh0eXBlXylcbiAgICAgICAgICAudXBkYXRlQnVsaygpXG4gICAgICAgICAgLm9uKCdyZXNwb25zZScsIHJlc29sdmUpXG4gICAgICAgICAgLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICBsZXQgcmVjb3JkczogQXJyYXk8U09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPj4gPSBbXTtcbiAgICAgIGxldCBiYXRjaDogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlQmF0Y2g+IHwgbnVsbCA9IG51bGw7XG4gICAgICBjb25zdCBoYW5kbGVSZWNvcmQgPSAocmVjb3JkOiBSZWNvcmQpID0+IHtcbiAgICAgICAgaWYgKGJhdGNoKSB7XG4gICAgICAgICAgYmF0Y2gud3JpdGUocmVjb3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWNvcmRzLnB1c2gocmVjb3JkIGFzIFNPYmplY3RVcGRhdGVSZWNvcmQ8UywgTj4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aHJlc2hvbGROdW0gPj0gMCAmJlxuICAgICAgICAgIHJlY29yZHMubGVuZ3RoID4gdGhyZXNob2xkTnVtICYmXG4gICAgICAgICAgYnVsa0FwaVZlcnNpb24gPT09IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gVXNlIGJ1bGsgdXBkYXRlIGluc3RlYWQgb2YgU09iamVjdCBSRVNUIEFQSVxuICAgICAgICAgIGJhdGNoID0gY3JlYXRlQmF0Y2goKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHJlY29yZCBvZiByZWNvcmRzKSB7XG4gICAgICAgICAgICBiYXRjaC53cml0ZShyZWNvcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWNvcmRzID0gW107XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBoYW5kbGVFbmQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChiYXRjaCkge1xuICAgICAgICAgIGJhdGNoLmVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCA+IHRocmVzaG9sZE51bSAmJiBidWxrQXBpVmVyc2lvbiA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5fY29ubi5idWxrMlxuICAgICAgICAgICAgICAubG9hZEFuZFdhaXRGb3JSZXN1bHRzKHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHR5cGVfLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHJlY29yZHMsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChhbGxSZXN1bHRzKSA9PlxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm1hcEJ1bGtWMlJlc3VsdHNUb1NhdmVSZXN1bHRzKGFsbFJlc3VsdHMpKSxcbiAgICAgICAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5cbiAgICAgICAgICAgICAgLnNvYmplY3QodHlwZV8pXG4gICAgICAgICAgICAgIC51cGRhdGUocmVjb3JkcywgeyBhbGxvd1JlY3Vyc2l2ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuc3RyZWFtKCdyZWNvcmQnKVxuICAgICAgICAub24oJ2Vycm9yJywgcmVqZWN0KVxuICAgICAgICAucGlwZSh1cGRhdGVTdHJlYW0pXG4gICAgICAgIC5vbignZGF0YScsIGhhbmRsZVJlY29yZClcbiAgICAgICAgLm9uKCdlbmQnLCBoYW5kbGVFbmQpXG4gICAgICAgIC5vbignZXJyb3InLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBCdWxrVjJSZXN1bHRzVG9TYXZlUmVzdWx0cyhcbiAgICBidWxrSm9iQWxsUmVzdWx0czogSW5nZXN0Sm9iVjJSZXN1bHRzPFM+LFxuICApOiBTYXZlUmVzdWx0W10ge1xuICAgIGNvbnN0IHN1Y2Nlc3NTYXZlUmVzdWx0czogU2F2ZVJlc3VsdFtdID0gYnVsa0pvYkFsbFJlc3VsdHMuc3VjY2Vzc2Z1bFJlc3VsdHMubWFwKFxuICAgICAgKHIpID0+IHtcbiAgICAgICAgY29uc3Qgc2F2ZVJlc3VsdDogU2F2ZVJlc3VsdCA9IHtcbiAgICAgICAgICBpZDogci5zZl9fSWQsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2F2ZVJlc3VsdDtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGZhaWxlZFNhdmVSZXN1bHRzID0gYnVsa0pvYkFsbFJlc3VsdHMuZmFpbGVkUmVzdWx0cy5tYXAoKHIpID0+IHtcbiAgICAgIGNvbnN0IHNhdmVSZXN1bHQ6IFNhdmVSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IHIuc2ZfX0Vycm9yLFxuICAgICAgICAgICAgbWVzc2FnZTogci5zZl9fRXJyb3IsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2F2ZVJlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBbLi4uc3VjY2Vzc1NhdmVSZXN1bHRzLCAuLi5mYWlsZWRTYXZlUmVzdWx0c107XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKlxuICogU3ViUXVlcnkgb2JqZWN0IGZvciByZXByZXNlbnRpbmcgY2hpbGQgcmVsYXRpb25zaGlwIHF1ZXJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJRdWVyeTxcbiAgUyBleHRlbmRzIFNjaGVtYSxcbiAgUE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4sXG4gIFBSIGV4dGVuZHMgUmVjb3JkLFxuICBQUVJUIGV4dGVuZHMgUXVlcnlSZXNwb25zZVRhcmdldCxcbiAgQ1JOIGV4dGVuZHMgQ2hpbGRSZWxhdGlvbnNoaXBOYW1lczxTLCBQTj4gPSBDaGlsZFJlbGF0aW9uc2hpcE5hbWVzPFMsIFBOPixcbiAgQ04gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4gPSBDaGlsZFJlbGF0aW9uc2hpcFNPYmplY3ROYW1lPFMsIFBOLCBDUk4+LFxuICBDUiBleHRlbmRzIFJlY29yZCA9IFJlY29yZFxuPiB7XG4gIF9yZWxOYW1lOiBDUk47XG4gIF9xdWVyeTogUXVlcnk8UywgQ04sIENSPjtcbiAgX3BhcmVudDogUXVlcnk8UywgUE4sIFBSLCBQUVJUPjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbm46IENvbm5lY3Rpb248Uz4sXG4gICAgcmVsTmFtZTogQ1JOLFxuICAgIGNvbmZpZzogUXVlcnlDb25maWc8UywgQ04+LFxuICAgIHBhcmVudDogUXVlcnk8UywgUE4sIFBSLCBQUVJUPixcbiAgKSB7XG4gICAgdGhpcy5fcmVsTmFtZSA9IHJlbE5hbWU7XG4gICAgdGhpcy5fcXVlcnkgPSBuZXcgUXVlcnkoY29ubiwgY29uZmlnKTtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHNlbGVjdDxcbiAgICBSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLFxuICAgIEZQIGV4dGVuZHMgRmllbGRQYXRoU3BlY2lmaWVyPFMsIENOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBDTj4sXG4gICAgRlBDIGV4dGVuZHMgRmllbGRQcm9qZWN0aW9uQ29uZmlnID0gRmllbGRQYXRoU2NvcGVkUHJvamVjdGlvbjxTLCBDTiwgRlA+XG4gID4oXG4gICAgZmllbGRzOiBRdWVyeUZpZWxkPFMsIENOLCBGUD4sXG4gICk6IFN1YlF1ZXJ5PFMsIFBOLCBQUiwgUFFSVCwgQ1JOLCBDTiwgU09iamVjdFJlY29yZDxTLCBDTiwgRlBDLCBSPj4ge1xuICAgIC8vIGZvcmNlIGNvbnZlcnQgcXVlcnkgcmVjb3JkIHR5cGUgd2l0aG91dCBjaGFuZ2luZyBpbnN0YW5jZVxuICAgIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkuc2VsZWN0KGZpZWxkcykgYXMgYW55O1xuICAgIHJldHVybiAodGhpcyBhcyBhbnkpIGFzIFN1YlF1ZXJ5PFxuICAgICAgUyxcbiAgICAgIFBOLFxuICAgICAgUFIsXG4gICAgICBQUVJULFxuICAgICAgQ1JOLFxuICAgICAgQ04sXG4gICAgICBTT2JqZWN0UmVjb3JkPFMsIENOLCBGUEMsIFI+XG4gICAgPjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgd2hlcmUoY29uZGl0aW9uczogUXVlcnlDb25kaXRpb248UywgQ04+IHwgc3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeS53aGVyZShjb25kaXRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBMaW1pdCB0aGUgcmV0dXJuaW5nIHJlc3VsdFxuICAgKi9cbiAgbGltaXQobGltaXQ6IG51bWJlcikge1xuICAgIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkubGltaXQobGltaXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNraXAgcmVjb3Jkc1xuICAgKi9cbiAgc2tpcChvZmZzZXQ6IG51bWJlcikge1xuICAgIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkuc2tpcChvZmZzZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgU3ViUXVlcnkjc2tpcCgpXG4gICAqL1xuICBvZmZzZXQgPSB0aGlzLnNraXA7XG5cbiAgLyoqXG4gICAqIFNldCBxdWVyeSBzb3J0IHdpdGggZGlyZWN0aW9uXG4gICAqL1xuICBzb3J0KHNvcnQ6IFF1ZXJ5U29ydDxTLCBDTj4pOiB0aGlzO1xuICBzb3J0KHNvcnQ6IHN0cmluZyB8IFNPYmplY3RGaWVsZE5hbWVzPFMsIENOPiwgZGlyOiBTb3J0RGlyKTogdGhpcztcbiAgc29ydChcbiAgICBzb3J0OiBRdWVyeVNvcnQ8UywgQ04+IHwgU09iamVjdEZpZWxkTmFtZXM8UywgQ04+IHwgc3RyaW5nLFxuICAgIGRpcj86IFNvcnREaXIsXG4gICkge1xuICAgIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkuc29ydChzb3J0IGFzIGFueSwgZGlyIGFzIFNvcnREaXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgU3ViUXVlcnkjc29ydCgpXG4gICAqL1xuICBvcmRlcmJ5OiB0eXBlb2YgU3ViUXVlcnkucHJvdG90eXBlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBfZXhwYW5kRmllbGRzKCkge1xuICAgIGNvbnN0IHNvYmplY3QgPSBhd2FpdCB0aGlzLl9wYXJlbnQuX2ZpbmRSZWxhdGlvbk9iamVjdCh0aGlzLl9yZWxOYW1lKTtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnkuX2V4cGFuZEZpZWxkcyhzb2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCYWNrIHRoZSBjb250ZXh0IHRvIHBhcmVudCBxdWVyeSBvYmplY3RcbiAgICovXG4gIGVuZDxcbiAgICBDUlAgZXh0ZW5kcyBTT2JqZWN0Q2hpbGRSZWxhdGlvbnNoaXBQcm9wPFxuICAgICAgQ1JOLFxuICAgICAgQ1JcbiAgICA+ID0gU09iamVjdENoaWxkUmVsYXRpb25zaGlwUHJvcDxDUk4sIENSPixcbiAgICBQUjEgZXh0ZW5kcyBSZWNvcmQgPSBQUiAmIENSUFxuICA+KCk6IFF1ZXJ5PFMsIFBOLCBQUjEsIFBRUlQ+IHtcbiAgICByZXR1cm4gKHRoaXMuX3BhcmVudCBhcyBhbnkpIGFzIFF1ZXJ5PFMsIFBOLCBQUjEsIFBRUlQ+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxZQUFZLFFBQVEsUUFBUTtBQUNyQyxTQUFpQkMsU0FBUyxRQUFRLGVBQWU7QUFDakQsT0FBT0MsWUFBWSxJQUFJQyxZQUFZLFFBQVEsaUJBQWlCO0FBRTVELFNBQVNDLFVBQVUsUUFBUSxnQkFBZ0I7O0FBd0IzQztBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBOztBQXFEQTtBQUNBO0FBQ0E7O0FBb0RBLElBQU1DLG9CQUFvQixHQUFHLENBQzNCLGFBQWEsRUFDYixTQUFTLEVBQ1QsY0FBYyxFQUNkLE9BQU8sQ0FDQztBQUlWLE9BQU8sSUFBTUMsZUFFWixHQUFHQyx1QkFBQSxDQUFBRixvQkFBb0IsRUFBQUcsSUFBQSxDQUFwQkgsb0JBQW9CLEVBQ3RCLFVBQUNJLE1BQU0sRUFBRUMsTUFBTTtFQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUFXRixNQUFNLE9BQUFHLGVBQUEsS0FBR0YsTUFBTSxFQUFHQSxNQUFNO0FBQUEsQ0FBRyxFQUNyRCxDQUFDLENBR0gsQ0FBQzs7QUFXVzs7QUFnQlo7QUFDQTtBQUNBO0FBQ0EsSUFBTUcsc0JBQXNCLEdB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