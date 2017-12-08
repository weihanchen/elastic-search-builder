'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _indices2 = require('./indices');

var _indices3 = _interopRequireDefault(_indices2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
   var optionsBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   return {
      indices: function indices() {
         Object.assign(optionsBody, _indices3.default.apply(undefined, arguments));
         return this;
      },
      type: function type(_type) {
         Object.assign(optionsBody, { type: _type });
         return this;
      },

      getOptions: function getOptions() {
         return optionsBody;
      }
   };
};