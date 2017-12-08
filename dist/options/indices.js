'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function () {
   var indices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
   var joinToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
   return Object.assign({}, {
      index: indices.join(joinToken),
      ignoreUnavailable: true,
      allowNoIndices: true
   });
};