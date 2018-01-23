'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _updateNotifier = require('update-notifier');

var _updateNotifier2 = _interopRequireDefault(_updateNotifier);

var _option = require('./option');

var _option2 = _interopRequireDefault(_option);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = require('../package.json');
(0, _updateNotifier2.default)({ pkg: pkg }).notify();

/**
 * elastic-search-builder working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
 * 
 * See more use case in the docs as well as in the tests.
 * 
 * @return {option|body|build} see below.
 *
 * @example
 * Usage
 * 
 * const elasticsearch = require('elasticsearch');
 * const client = new elasticsearch.Client({
 *      host: 'localhost:9200'
 * });
 * const esb = require('elastic-search-builder');
 * const searchparams = esb()
 *  .option()
 *  .indices(['2016.01.01'])
 *  .body()
 *  .query({
 *      match: {
 *          message: 'hello world'
 *      }
 *   })
 *  .aggs()
 *  .build();
 * client.search(searchparams).then(body => {
 *      console.log(body)
 * })
 */
var esBuilder = function esBuilder() {
    return {
        /**
        * Add custom option
        *
        * @param {Object} content option body.
        *
        * @return {indices|type} - see below
        * @example
        * //build option
        * esb().option({
        *   index: 'logs',
        *   type: '2016.01.01'
        * }).build()
        */
        option: function option(content) {
            return Object.assign(this, {}, (0, _option2.default)(content));
        },

        /**
        * Add custom body
        * 
        * @param {Object} content option body.
        * @return {query|aggs|fields|size|from} see below.
        * @example
        * esb().body({
        *    query: {
        *       match: {
        *          message: 'hello'
        *       }
        *    }   
        *})
        *.build()
        */
        body: function body(content) {
            return Object.assign(this, {}, (0, _body2.default)(content));
        },

        /**
        * Build with options and body.
        *
        *
        * @return {Object} search option.
        */
        build: function build() {
            var esOption = this.getOption && this.getOption() || {};
            var body = this.getBody && this.getBody() || {};
            return Object.assign({}, esOption, body);
        }
    };
};

exports.default = esBuilder;

module.exports = esBuilder;