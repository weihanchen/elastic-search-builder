Elasticsearch Builder
===

This lib working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html), flatten search params and  query bodies.

## Installation


## Usage
```javascript
/* in ES 5 */
const elasticsearch = require('elasticsearch');
const esb = require('elastic-search-builder');
/* in ES6 */
import elasticsearch from 'elasticsearch';
import esb from 'elastic-search-builder';
/* new elasticsearch client */
const client = new elasticsearch.Client({
  host: 'localhost:9200'
});
/* build search params by elastic-search-builder */
const searchParams = esb()
   .option()
   .indices(['2016.01.01'])
   .body()
   .query({
      match: {
         dialogs: 'hello world'
      }
   }).build();
client.search(searchParams).then(body => {
   console.log(body);
})
```

## Bool Query
```javascript
const searchParams = esb()
  .body()
  .query()
  .bool()
  .boolMust({
    "term" : { "user" : "kimchy" }
  }, {
    "term" : { "user" : "blob" }
  })
  .boolNot([{
    "term": { "user": "john" }
  },{
    "term": { "user": "belly" }
  }])
  .build();

// {
//   body: {
//      query: {
//         bool: {
//            must: [
//               {
//                  "term" : { "user" : "kimchy" }
//               },
//               {
//                  "term" : { "user" : "blob" }
//               }
//            ],
//            must_not: [
//               {
//                  "term": { "user": "john" }
//               },
//               {
//                  "term": { "user": "belly" }
//               }
//            ]
//         }
//      }
//   }
// }
```

## Nested aggregation

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