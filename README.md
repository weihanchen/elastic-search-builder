ElasticsearchBuilder
===

This lib working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html), flatten options and  query bodies.

## Usage
```javascript
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200'
});
const esb = require('elastic-search-builder');
const options = esb()
   .options()
   .indices(['2016.01.01'])
   .body()
   .query({
      match: {
         dialogs: 'hello world'
      }
   }).build();
client.search(options).then(body => {
   console.log(body);
})
```