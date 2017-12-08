'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function () {
   var indices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
   var joinToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
   var ignoreUnavailable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
   var allowNoIndices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
   var expandWildcards = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'open';
   return Object.assign({}, {
      index: indices.join(joinToken),
      ignoreUnavailable: ignoreUnavailable,
      allowNoIndices: allowNoIndices,
      expandWildcards: expandWildcards
   });
};