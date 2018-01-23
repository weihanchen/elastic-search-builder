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
        /**
         * Add query clause to query body
         * @param {Object} queryBody any query clause
         * @return {bool} see below.
         * @example
         * //build body
         * esb()
         *  .body()
         *  .query({
         *      match: {
         *          message: 'hello'
         *      }
         *  })
         *  .build()
         * //result:
         * {
         *     body: {
         *          query: {
         *              match: {
         *                  message: 'hello'
         *              }
         *         }   
         *     }
         * }
         */
        query: function query() {
            var queryBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            Object.assign(this, (0, _query2.default)(queryBody));
            Object.assign(body, {}, this.getQuery());
            return this;
        },

        /**
         * Add aggregation to aggs body
         * @param {Object} aggsBody any aggregation body
         * @return {appendAggs|subAggs|forkAggs|mergeAggs} see below.
         * @example
         * esb()
         *  .body()
         *  .aggs({
         *      message: {
         *          terms: {
         *              field: 'message'
         *          }
         *      }
         *  })
         *  .build();
         * //result:
         * {
         *      body: {
         *          aggs: {
         *              message: {
         *                  terms: {
         *                      field: 'message'
         *                  }
         *              }
         *          }
         *      }
         * }
         */
        aggs: function aggs() {
            var aggsBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            Object.assign(this, (0, _aggs2.default)(aggsBody));
            Object.assign(body, {}, this.getAggs());
            return this;
        },

        /**
         * ***https://www.elastic.co/guide/en/elasticsearch/reference/current/search-field-caps.html***
         * @example
         * esb()
         *  .body()
         *  .fields('rating', 'count')
         *  .build()
         * //result:
         * {
         *      body: {
         *          fields: ['rating', 'count']
         *      }
         * }
         */
        fields: function fields() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            body.fields = args;
            return this;
        },

        /**
         * ***https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-from-size.html***
         * @param {number} size
         * @example
         * esb()
         *  .size(10)
         *  .build()
         * //result:
         * {
         *      body: {
         *          size: 10
         *      }
         * }
         */
        size: function size() {
            var _size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            body.size = _size;
            return this;
        },

        /**
         * ***https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-from-size.html***
         * @param {number} from
         * @example
         * esb()
         *  .from(1)
         *  .build()
         * //result:
         * {
         *      body: {
         *          from: 1
         *      }
         * }
         */
        from: function from() {
            var _from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            body.from = _from;
            return this;
        },

        getBody: function getBody() {
            return { body: body };
        }
    };
};