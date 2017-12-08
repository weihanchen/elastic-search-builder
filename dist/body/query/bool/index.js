'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _must = require('./must');

var _must2 = _interopRequireDefault(_must);

var _mustNot = require('./mustNot');

var _mustNot2 = _interopRequireDefault(_mustNot);

var _should = require('./should');

var _should2 = _interopRequireDefault(_should);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
   var boolBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   return {
      boolMust: function boolMust() {
         for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
         }

         Object.assign(this, (0, _must2.default)(args));
         Object.assign(boolBody, this.getMust());
         return this;
      },
      boolNot: function boolNot() {
         for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
         }

         Object.assign(this, (0, _mustNot2.default)(args));
         Object.assign(boolBody, this.getMustNot());
         return this;
      },
      boolShould: function boolShould() {
         for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
         }

         Object.assign(this, (0, _should2.default)(args));
         Object.assign(boolBody, this.getShould());
         return this;
      },
      boolFilter: function boolFilter() {
         for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
         }

         Object.assign(this, (0, _filter2.default)(args));
         Object.assign(boolBody, this.getBoolFilter());
         return this;
      },

      getBool: function getBool() {
         return { bool: boolBody };
      }
   };
};