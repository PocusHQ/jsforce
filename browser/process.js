import "core-js/modules/es.array.push.js";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
function ownKeys(e, r) { var t = _Object$keys(e); if (_Object$getOwnPropertySymbols) { var o = _Object$getOwnPropertySymbols(e); r && (o = _filterInstanceProperty(o).call(o, function (r) { return _Object$getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context3, _context4; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _forEachInstanceProperty(_context3 = ownKeys(Object(t), !0)).call(_context3, function (r) { _defineProperty(e, r, t[r]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : _forEachInstanceProperty(_context4 = ownKeys(Object(t))).call(_context4, function (r) { _Object$defineProperty(e, r, _Object$getOwnPropertyDescriptor(t, r)); }); } return e; }
import _Array$isArray from "@babel/runtime-corejs3/core-js-stable/array/is-array";
import _JSON$stringify from "@babel/runtime-corejs3/core-js-stable/json/stringify";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
/**
 * @file Process class to manage/run workflow rule and approval process
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/**
 *
 */

/**
 *
 */

/**
 * A class which manages process (workflow) rules
 */
export var ProcessRule = /*#__PURE__*/function () {
  /**
   *
   */
  function ProcessRule(conn) {
    _classCallCheck(this, ProcessRule);
    this._conn = conn;
  }

  /**
   * Get all process rule definitions registered to sobjects
   */
  return _createClass(ProcessRule, [{
    key: "list",
    value: (function () {
      var _list = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var res;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._conn.request('/process/rules');
            case 2:
              res = _context.sent;
              return _context.abrupt("return", res.rules);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function list() {
        return _list.apply(this, arguments);
      }
      return list;
    }()
    /**
     * Trigger process rule for given entities
     */
    )
  }, {
    key: "trigger",
    value: function trigger(contextIds) {
      var contextIds_ = _Array$isArray(contextIds) ? contextIds : [contextIds];
      // https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_process_rules_trigger.htm
      return this._conn.request({
        method: 'POST',
        url: '/process/rules/',
        body: _JSON$stringify({
          contextIds: contextIds_
        }),
        headers: {
          'content-type': 'application/json'
        }
      });
    }
  }]);
}();

/**
 *
 */

/**
 *
 */

/**
 *
 */

/**
 * A class which manages approval processes
 */
export var ApprovalProcess = /*#__PURE__*/function () {
  /**
   *
   */
  function ApprovalProcess(conn) {
    _classCallCheck(this, ApprovalProcess);
    this._conn = conn;
  }

  /**
   * Get all approval process definitions registered to sobjects
   */
  return _createClass(ApprovalProcess, [{
    key: "list",
    value: (function () {
      var _list2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var res;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this._conn.request('/process/approvals');
            case 2:
              res = _context2.sent;
              return _context2.abrupt("return", res.approvals);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function list() {
        return _list2.apply(this, arguments);
      }
      return list;
    }()
    /**
     * Send bulk requests for approval process
     */
    )
  }, {
    key: "request",
    value: function request(requests) {
      var requests_ = _mapInstanceProperty(requests).call(requests, function (req) {
        return '_request' in req ? req._request : req;
      });
      return this._conn.request({
        method: 'POST',
        url: '/process/approvals',
        headers: {
          'content-type': 'application/json'
        },
        body: _JSON$stringify({
          requests: requests_
        })
      });
    }

    /**
     * Create approval process request
     *
     * @private
     */
  }, {
    key: "_createRequest",
    value: function _createRequest(actionType, contextId, comments) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return new ApprovalProcessRequest(this, _objectSpread({
        actionType: actionType,
        contextId: contextId,
        comments: comments
      }, options));
    }

    /**
     * Submit approval request for an item
     */
  }, {
    key: "submit",
    value: function submit(contextId, comments, options) {
      return this._createRequest('Submit', contextId, comments, options);
    }

    /**
     * Approve approval request for an item
     */
  }, {
    key: "approve",
    value: function approve(workitemId, comments) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this._createRequest('Approve', workitemId, comments, options);
    }

    /**
     * Reject approval request for an item
     */
  }, {
    key: "reject",
    value: function reject(workitemId, comments) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this._createRequest('Reject', workitemId, comments, options);
    }
  }]);
}();

/**
 *
 */
/**
 * A class representing approval process request
 */
var ApprovalProcessRequest = /*#__PURE__*/function () {
  function ApprovalProcessRequest(process, request) {
    _classCallCheck(this, ApprovalProcessRequest);
    this._process = process;
    this._request = request;
  }

  /**
   * Promise/A+ interface
   * http://promises-aplus.github.io/promises-spec/
   */
  return _createClass(ApprovalProcessRequest, [{
    key: "then",
    value: function then(onResolve, onReject) {
      if (!this._promise) {
        this._promise = this._process.request([this]).then(function (rets) {
          return rets[0];
        });
      }
      this._promise.then(onResolve, onReject);
    }
  }]);
}();
/**
 * A class which manages process rules and approval processes
 */
export var Process = /*#__PURE__*/_createClass(
/**
 *
 */
function Process(conn) {
  _classCallCheck(this, Process);
  this.rule = new ProcessRule(conn);
  this.approval = new ApprovalProcess(conn);
});
export default Process;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9jZXNzUnVsZSIsImNvbm4iLCJfY2xhc3NDYWxsQ2hlY2siLCJfY29ubiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2xpc3QiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlcyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJyZXF1ZXN0Iiwic2VudCIsImFicnVwdCIsInJ1bGVzIiwic3RvcCIsImxpc3QiLCJhcHBseSIsImFyZ3VtZW50cyIsInRyaWdnZXIiLCJjb250ZXh0SWRzIiwiY29udGV4dElkc18iLCJfQXJyYXkkaXNBcnJheSIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJfSlNPTiRzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQXBwcm92YWxQcm9jZXNzIiwiX2xpc3QyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJhcHByb3ZhbHMiLCJyZXF1ZXN0cyIsInJlcXVlc3RzXyIsIl9tYXBJbnN0YW5jZVByb3BlcnR5IiwiY2FsbCIsInJlcSIsIl9yZXF1ZXN0IiwiX2NyZWF0ZVJlcXVlc3QiLCJhY3Rpb25UeXBlIiwiY29udGV4dElkIiwiY29tbWVudHMiLCJvcHRpb25zIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiQXBwcm92YWxQcm9jZXNzUmVxdWVzdCIsIl9vYmplY3RTcHJlYWQiLCJzdWJtaXQiLCJhcHByb3ZlIiwid29ya2l0ZW1JZCIsInJlamVjdCIsInByb2Nlc3MiLCJfcHJvY2VzcyIsInRoZW4iLCJvblJlc29sdmUiLCJvblJlamVjdCIsIl9wcm9taXNlIiwicmV0cyIsIlByb2Nlc3MiLCJydWxlIiwiYXBwcm92YWwiXSwic291cmNlcyI6WyIuLi9zcmMvcHJvY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIFByb2Nlc3MgY2xhc3MgdG8gbWFuYWdlL3J1biB3b3JrZmxvdyBydWxlIGFuZCBhcHByb3ZhbCBwcm9jZXNzXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cbiAqL1xuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCB7IFByb2Nlc3NSdWxlcywgU2NoZW1hIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2Vzc1J1bGVEZWZpbml0aW9uID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9iamVjdDogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBQcm9jZXNzUnVsZVRyaWdnZXJSZXN1bHQgPVxuICB8IHtcbiAgICAgIHN1Y2Nlc3M6IHRydWU7XG4gICAgfVxuICB8IHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlO1xuICAgICAgZXJyb3JzOiBBcnJheTx7IG1lc3NhZ2U6IHN0cmluZyB9PjtcbiAgICB9O1xuXG4vKipcbiAqIEEgY2xhc3Mgd2hpY2ggbWFuYWdlcyBwcm9jZXNzICh3b3JrZmxvdykgcnVsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2Nlc3NSdWxlPFMgZXh0ZW5kcyBTY2hlbWE+IHtcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+KSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBwcm9jZXNzIHJ1bGUgZGVmaW5pdGlvbnMgcmVnaXN0ZXJlZCB0byBzb2JqZWN0c1xuICAgKi9cbiAgYXN5bmMgbGlzdCgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3Q8eyBydWxlczogUHJvY2Vzc1J1bGVzIH0+KFxuICAgICAgJy9wcm9jZXNzL3J1bGVzJyxcbiAgICApO1xuICAgIHJldHVybiByZXMucnVsZXM7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBwcm9jZXNzIHJ1bGUgZm9yIGdpdmVuIGVudGl0aWVzXG4gICAqL1xuICB0cmlnZ2VyKGNvbnRleHRJZHM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY29udGV4dElkc18gPSBBcnJheS5pc0FycmF5KGNvbnRleHRJZHMpID8gY29udGV4dElkcyA6IFtjb250ZXh0SWRzXTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5zYWxlc2ZvcmNlLmNvbS9kb2NzL2F0bGFzLmVuLXVzLmFwaV9yZXN0Lm1ldGEvYXBpX3Jlc3QvZG9tZV9wcm9jZXNzX3J1bGVzX3RyaWdnZXIuaHRtXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxcbiAgICAgIHwge1xuICAgICAgICAgIGVycm9yczogbnVsbDtcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlO1xuICAgICAgICB9XG4gICAgICB8IHtcbiAgICAgICAgICAvLyBEb2NzIGRvbid0IHNheSB3aGF0IHRoZSB0cmlnZ2VyIGVycm9ycyBhcmVcbiAgICAgICAgICBlcnJvcnM6IGFueVtdO1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlO1xuICAgICAgICB9XG4gICAgPih7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9wcm9jZXNzL3J1bGVzLycsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbnRleHRJZHM6IGNvbnRleHRJZHNfLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQXBwcm92YWxQcm9jZXNzRGVmaW5pdGlvbiA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBvYmplY3Q6IHN0cmluZztcbiAgc29ydE9yZGVyOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0UmVzdWx0ID1cbiAgfCB7XG4gICAgICBzdWNjZXNzOiB0cnVlO1xuICAgICAgYWN0b3JJZHM6IHN0cmluZ1tdO1xuICAgICAgZW50aXR5SWQ6IHN0cmluZztcbiAgICAgIGluc3RhbmNlSWQ6IHN0cmluZztcbiAgICAgIGluc3RhbmNlU3RhdHVzOiBzdHJpbmc7XG4gICAgICBuZXdXb3JrSXRlbUlkczogc3RyaW5nW107XG4gICAgfVxuICB8IHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlO1xuICAgICAgZXJyb3JzOiBBcnJheTx7IG1lc3NhZ2U6IHN0cmluZyB9PjtcbiAgICB9O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIEFwcHJvdmFsUHJvY2Vzc0FjdGlvbk9wdGlvbnMgPSB7XG4gIHByb2Nlc3NEZWZpbml0aW9uTmFtZU9ySWQ/OiBzdHJpbmc7XG4gIHNraXBFbnRyeUNyaXRlcmlhPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQSBjbGFzcyB3aGljaCBtYW5hZ2VzIGFwcHJvdmFsIHByb2Nlc3Nlc1xuICovXG5leHBvcnQgY2xhc3MgQXBwcm92YWxQcm9jZXNzPFMgZXh0ZW5kcyBTY2hlbWE+IHtcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+KSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBhcHByb3ZhbCBwcm9jZXNzIGRlZmluaXRpb25zIHJlZ2lzdGVyZWQgdG8gc29iamVjdHNcbiAgICovXG4gIGFzeW5jIGxpc3QoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5fY29ubi5yZXF1ZXN0PHtcbiAgICAgIGFwcHJvdmFsczogeyBbaW5kZXg6IHN0cmluZ106IEFwcHJvdmFsUHJvY2Vzc0RlZmluaXRpb24gfTtcbiAgICB9PignL3Byb2Nlc3MvYXBwcm92YWxzJyk7XG4gICAgcmV0dXJuIHJlcy5hcHByb3ZhbHM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBidWxrIHJlcXVlc3RzIGZvciBhcHByb3ZhbCBwcm9jZXNzXG4gICAqL1xuICByZXF1ZXN0KFxuICAgIHJlcXVlc3RzOiBBcnJheTxBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0Q29uZmlnIHwgQXBwcm92YWxQcm9jZXNzUmVxdWVzdDxTPj4sXG4gICkge1xuICAgIGNvbnN0IHJlcXVlc3RzXyA9IHJlcXVlc3RzLm1hcCgocmVxKSA9PlxuICAgICAgJ19yZXF1ZXN0JyBpbiByZXEgPyByZXEuX3JlcXVlc3QgOiByZXEsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PEFwcHJvdmFsUHJvY2Vzc1JlcXVlc3RSZXN1bHRbXT4oe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvcHJvY2Vzcy9hcHByb3ZhbHMnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlcXVlc3RzOiByZXF1ZXN0c18gfSksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFwcHJvdmFsIHByb2Nlc3MgcmVxdWVzdFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVJlcXVlc3QoXG4gICAgYWN0aW9uVHlwZTogJ1N1Ym1pdCcgfCAnQXBwcm92ZScgfCAnUmVqZWN0JyxcbiAgICBjb250ZXh0SWQ6IHN0cmluZyxcbiAgICBjb21tZW50cz86IHN0cmluZyxcbiAgICBvcHRpb25zOiBBcHByb3ZhbFByb2Nlc3NBY3Rpb25PcHRpb25zID0ge30sXG4gICkge1xuICAgIHJldHVybiBuZXcgQXBwcm92YWxQcm9jZXNzUmVxdWVzdCh0aGlzLCB7XG4gICAgICBhY3Rpb25UeXBlLFxuICAgICAgY29udGV4dElkLFxuICAgICAgY29tbWVudHMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCBhcHByb3ZhbCByZXF1ZXN0IGZvciBhbiBpdGVtXG4gICAqL1xuICBzdWJtaXQoXG4gICAgY29udGV4dElkOiBzdHJpbmcsXG4gICAgY29tbWVudHM/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEFwcHJvdmFsUHJvY2Vzc0FjdGlvbk9wdGlvbnMsXG4gICkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVSZXF1ZXN0KCdTdWJtaXQnLCBjb250ZXh0SWQsIGNvbW1lbnRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHByb3ZlIGFwcHJvdmFsIHJlcXVlc3QgZm9yIGFuIGl0ZW1cbiAgICovXG4gIGFwcHJvdmUoXG4gICAgd29ya2l0ZW1JZDogc3RyaW5nLFxuICAgIGNvbW1lbnRzPzogc3RyaW5nLFxuICAgIG9wdGlvbnM6IEFwcHJvdmFsUHJvY2Vzc0FjdGlvbk9wdGlvbnMgPSB7fSxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVJlcXVlc3QoJ0FwcHJvdmUnLCB3b3JraXRlbUlkLCBjb21tZW50cywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVqZWN0IGFwcHJvdmFsIHJlcXVlc3QgZm9yIGFuIGl0ZW1cbiAgICovXG4gIHJlamVjdChcbiAgICB3b3JraXRlbUlkOiBzdHJpbmcsXG4gICAgY29tbWVudHM/OiBzdHJpbmcsXG4gICAgb3B0aW9uczogQXBwcm92YWxQcm9jZXNzQWN0aW9uT3B0aW9ucyA9IHt9LFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlUmVxdWVzdCgnUmVqZWN0Jywgd29ya2l0ZW1JZCwgY29tbWVudHMsIG9wdGlvbnMpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQXBwcm92YWxQcm9jZXNzUmVxdWVzdENvbmZpZyA9IHtcbiAgYWN0aW9uVHlwZTogJ1N1Ym1pdCcgfCAnQXBwcm92ZScgfCAnUmVqZWN0JztcbiAgY29udGV4dElkOiBzdHJpbmc7XG4gIGNvbW1lbnRzPzogc3RyaW5nO1xuICBuZXh0QXBwcm92ZXJJZHM/OiBzdHJpbmdbXTtcbiAgcHJvY2Vzc0RlZmluaXRpb25OYW1lT3JJZD86IHN0cmluZztcbiAgc2tpcEVudHJ5Q3JpdGVyaWE/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudGluZyBhcHByb3ZhbCBwcm9jZXNzIHJlcXVlc3RcbiAqL1xuY2xhc3MgQXBwcm92YWxQcm9jZXNzUmVxdWVzdDxTIGV4dGVuZHMgU2NoZW1hPiB7XG4gIF9wcm9jZXNzOiBBcHByb3ZhbFByb2Nlc3M8Uz47XG4gIF9yZXF1ZXN0OiBBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0Q29uZmlnO1xuICBfcHJvbWlzZTogUHJvbWlzZTxBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0UmVzdWx0PiB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm9jZXNzOiBBcHByb3ZhbFByb2Nlc3M8Uz4sXG4gICAgcmVxdWVzdDogQXBwcm92YWxQcm9jZXNzUmVxdWVzdENvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5fcHJvY2VzcyA9IHByb2Nlc3M7XG4gICAgdGhpcy5fcmVxdWVzdCA9IHJlcXVlc3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvbWlzZS9BKyBpbnRlcmZhY2VcbiAgICogaHR0cDovL3Byb21pc2VzLWFwbHVzLmdpdGh1Yi5pby9wcm9taXNlcy1zcGVjL1xuICAgKi9cbiAgdGhlbjxVPihcbiAgICBvblJlc29sdmU/OiAoXG4gICAgICByZXM6IEFwcHJvdmFsUHJvY2Vzc1JlcXVlc3RSZXN1bHQsXG4gICAgKSA9PiBVIHwgUHJvbWlzZUxpa2U8VT4gfCBudWxsLFxuICAgIG9uUmVqZWN0PzogKGVycjogYW55KSA9PiBVIHwgUHJvbWlzZUxpa2U8VT4gfCBudWxsLFxuICApIHtcbiAgICBpZiAoIXRoaXMuX3Byb21pc2UpIHtcbiAgICAgIHRoaXMuX3Byb21pc2UgPSB0aGlzLl9wcm9jZXNzXG4gICAgICAgIC5yZXF1ZXN0KFt0aGlzXSlcbiAgICAgICAgLnRoZW4oKHJldHM6IGFueSkgPT4gcmV0c1swXSk7XG4gICAgfVxuICAgIHRoaXMuX3Byb21pc2UudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3Mgd2hpY2ggbWFuYWdlcyBwcm9jZXNzIHJ1bGVzIGFuZCBhcHByb3ZhbCBwcm9jZXNzZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2Nlc3M8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBydWxlOiBQcm9jZXNzUnVsZTxTPjtcbiAgYXBwcm92YWw6IEFwcHJvdmFsUHJvY2VzczxTPjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4pIHtcbiAgICB0aGlzLnJ1bGUgPSBuZXcgUHJvY2Vzc1J1bGUoY29ubik7XG4gICAgdGhpcy5hcHByb3ZhbCA9IG5ldyBBcHByb3ZhbFByb2Nlc3MoY29ubik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvY2VzcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7O0FBVUE7QUFDQTtBQUNBO0FBQ0EsV0FBYUEsV0FBVztFQUd0QjtBQUNGO0FBQ0E7RUFDRSxTQUFBQSxZQUFZQyxJQUFtQixFQUFFO0lBQUFDLGVBQUEsT0FBQUYsV0FBQTtJQUMvQixJQUFJLENBQUNHLEtBQUssR0FBR0YsSUFBSTtFQUNuQjs7RUFFQTtBQUNGO0FBQ0E7RUFGRSxPQUFBRyxZQUFBLENBQUFKLFdBQUE7SUFBQUssR0FBQTtJQUFBQyxLQUFBO01BQUEsSUFBQUMsS0FBQSxHQUFBQyxpQkFBQSxlQUFBQyxtQkFBQSxDQUFBQyxJQUFBLENBR0EsU0FBQUMsUUFBQTtRQUFBLElBQUFDLEdB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