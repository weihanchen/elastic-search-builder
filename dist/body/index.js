'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _aggs = require('./aggs');

var _aggs2 = _interopRequireDefault(_aggs);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
   var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   return {
      query: function query() {
         var queryBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

         Object.assign(this, (0, _query2.default)(queryBody));
         Object.assign(body, {}, this.getQuery());
         return this;
      },
      aggs: function aggs() {
         var aggsBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

         Object.assign(this, (0, _aggs2.default)(aggsBody));
         Object.assign(body, {}, this.getAggs());
         return this;
      },
      fields: function fields() {
         for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
         }

         body.fields = args;
         return this;
      },
      size: function size() {
         var _size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

         body.size = _size;
         return this;
      },
      from: function from() {
         var _from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

         body.from = _from;
      },

      getBody: function getBody() {
         return { body: body };
      }
   };
};