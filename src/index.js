'use strict';
import optionsBuilder from './options';
import bodyBuilder from './body';

/**
 * elastic-search-builder working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
 * 
 * * @return {esBuilder} Builder.
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
   options(content) {
      return Object.assign(this, {} ,optionsBuilder(content));
   },
   body(content) {
      return Object.assign(this, {}, bodyBuilder(content));
   }
});

export default esBuilder;
module.exports = esBuilder;