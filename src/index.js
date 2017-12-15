'use strict';
import optionBuilder from './option';
import bodyBuilder from './body';

/**
 * elastic-search-builder working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
 * 
 * @return {esb} Builder.
 */
const esBuilder = () => ({
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
    },
    /**
    * Add custom option
    *
    * @param {object} content option body.
    * @return {Object} optionBuilder {
    *   indices(indices, ignoreUnavailable, allowNoIndices, expandWildcards),
    *   type(args),
    *   getOptions()    
    *}
    *
    * @example
    * //build option
    * esb().option({
    *   index: 'logs',
    *   type: '2016.01.01'
    * }).build()
    * @example
    * //get option
    * esb().option({
    *   index: 'logs',
    *   type: '2016.01.01'
    *}).getOptions()
    */
    option(content) {
        return Object.assign(this, {} ,optionBuilder(content));
    },
    /**
    * Add custom body
    * 
    * @param {object} content option body.
    * @return {esb} Builder.
    *
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
    }
});

export default esBuilder;
module.exports = esBuilder;