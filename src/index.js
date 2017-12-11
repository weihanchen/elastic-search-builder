'use strict';
import optionsBuilder from './options';
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
        const esOption = this.getOptions && this.getOptions() || {};
        const body = this.getBody &&  this.getBody() || {};
        return Object.assign({}, esOption, body);
    },
    /**
    * Add custom options
    *
    * @param {object} content option body.
    * @return {esb} Builder.
    *
    * @example
    * esb().options({
    *   index: 'logs',
    *   type: '2016.01.01'
    * })
    * .build()
    */
    options(content) {
        return Object.assign(this, {} ,optionsBuilder(content));
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