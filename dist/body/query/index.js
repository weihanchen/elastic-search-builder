'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _bool = require('./bool');

var _bool2 = _interopRequireDefault(_bool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (queryBody) {
   return {
      bool: function bool(boolBody) {
         Object.assign(this, (0, _bool2.default)(boolBody));
         Object.assign(queryBody, this.getBool());
         return this;
      },

      getQuery: function getQuery() {
         return { query: queryBody };
      }
   };
};