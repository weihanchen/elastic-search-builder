'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indices2 = require('./indices');

var _indices3 = _interopRequireDefault(_indices2);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
        /**
         * Add index field to option.
         * 
         * @param {Array|string} indices multi index
         * @param {boolean} ignoreUnavailable Whether specified concrete indices should be ignored when unavailable (missing or closed)
         * @param {boolean} allowNoIndices Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes _all string or when no indices have been specified)
         * @example
         * esb()
         *  .options()
         *  .indices(['2016.01.01'], true, true)
         *  .build()
         * @example
         * esb()
         *  .options()
         *  .indices('2016.01.01,2016.02.02', false, false)
         *  .build()
         */
        indices: function indices() {
            var _indices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var ignoreUnavailable = arguments[1];
            var allowNoIndices = arguments[2];

            Object.assign(this, (0, _indices3.default)(_indices, ignoreUnavailable, allowNoIndices));
            Object.assign(body, this.getIndex());
            return this;
        },

        /**
         * Add type field to option
         * 
         * @example
         * esb()
         *  .options()
         *  .type(['company', 'school'], 'employee', 'student')
         *  .build()
         */
        type: function type() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            Object.assign(this, (0, _type2.default)(args));
            Object.assign(body, this.getType());
            return this;
        },

        getOption: function getOption() {
            return body;
        }
    };
};