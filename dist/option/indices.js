'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (indices) {
    var ignoreUnavailable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var allowNoIndices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var index = [].concat(indices).join(',');
    return {
        getIndex: function getIndex() {
            return {
                index: index,
                ignoreUnavailable: ignoreUnavailable,
                allowNoIndices: allowNoIndices
            };
        }
    };
};