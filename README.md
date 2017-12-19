Elasticsearch Builder
===

This lib working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html), flatten option and  query bodies.

## Installation


## Usage
```javascript
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200'
});
const esb = require('elastic-search-builder');
const option = esb()
   .option()
   .indices(['2016.01.01'])
   .body()
   .query({
      match: {
         dialogs: 'hello world'
      }
   }).build();
client.search(option).then(body => {
   console.log(body);
})
```

## Bool Query
```javascript

```

## Documentation

* [API.md](./docs/API.md)

## Test
Run unit tests:

```sh
npm run test
```

## Credits
`elastic-search-builder` is inspired by [bodybuilder](https://github.com/danpaz/bodybuilder) for documentation, build step.