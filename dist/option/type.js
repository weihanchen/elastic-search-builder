'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (args) {
    var type = args.join(',');
    return {
        getType: function getType() {
            return { type: type };
        }
    };
};