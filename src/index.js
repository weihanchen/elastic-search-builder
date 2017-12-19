'use strict';
import optionBuilder from './option';
import bodyBuilder from './body';

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
const esBuilder = () => ({
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
    option(content) {
        return Object.assign(this, {} ,optionBuilder(content));
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
    body(content) {
        return Object.assign(this, {}, bodyBuilder(content));
    },
    /**
    * Build with options and body.
    *
    *
    * @return {Object} search option.
    */
    build(){
        const esOption = this.getOption && this.getOption() || {};
        const body = this.getBody &&  this.getBody() || {};
        return Object.assign({}, esOption, body);
    }
});

export default esBuilder;
module.exports = esBuilder;