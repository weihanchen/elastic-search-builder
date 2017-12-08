'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * elastic-search-builder working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
 * 
 * * @return {esBuilder} Builder.
 */
var esBuilder = function esBuilder() {
   return {
      /**
       * Build with options and body.
       *
       *
       * @return {Object} search option.
       */
      build: function build() {
         var esOption = this.getOptions && this.getOptions() || {};
         var body = this.getBody && this.getBody() || {};
         return Object.assign({}, esOption, body);
      },
      options: function options(content) {
         return Object.assign(this, {}, (0, _options2.default)(content));
      },
      body: function body(content) {
         return Object.assign(this, {}, (0, _body2.default)(content));
      }
   };
};

exports.default = esBuilder;