Elasticsearch Builder
===

This lib working with [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html), flatten search params and  query bodies.

## Installation

## Documentation

* [API.md](./docs/API.md)
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
esb()
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

## Aggregation
### basic usage

```javascript
esb()
  .body()
  .aggs()
  .appendAggs('all_name', 'terms', {
    "field": "name"
  })
  .subAggs()
  .appendAggs('all_gender', 'terms', {
      "field": "gender"
   })
   .subAggs()
   .appendAggs('all_city', 'terms', {
      "field": "city"
   })
   .build()

// {
//   "aggs": {
//     "all_name": {
//       "terms": {
//         "field": "name"
//       },
//       "aggs": {
//         "all_gender": {
//           "terms": {
//             "field": "gender"
//           },
//           "aggs": {
//               "all_city": {
//                  "terms": {
//                       "field": "city"
//                   }
//                }
//            }
//         }
//       }
//     }
//   }
// }
```

### advanced usage
build nested aggragation without callback

```javascript
esb()
   .body()
   .aggs()
   .appendAggs('by_gender', 'terms', {
    "field": "gender"
    })
    .subAggs()
    .forkAggs()
    .appendAggs('by_city', 'terms', {
        "field": "city"
    })
    .subAggs()
    .appendAggs('all_name', 'terms', {
        "field": "name"
    })
    .mergeAggs()
    .appendAggs('by_language', 'terms', {
        "field": "language"
    })
    .subAggs()
    .appendAggs('all_name', 'terms', {
        "field": "name"
    })
   .build()

// {
//   "aggs": {
//       "by_gender": {
//           "terms": {
//             "field": "gender"
//           },
//           "aggs": {
//             "by_city": {
//                 "terms": {
//                     "field": "city"
//                 },
//                 "aggs": {
//                   "all_name": {
//                     "terms": {
//                       "field": "name"
//                     }
//                   }
//                 }
//             },
//             "by_language": {
//                   "terms": {
//                     "field": "language"
//                   },
//                   "aggs": {
//                     "all_name": {
//                         "terms": {
//                           "field": "name"
//                         }
//                     }
//                   }
//             }
//           }
//       }
//   }
}
```

## Development
#### 
#### Test case

```sh
npm run test
```

## Credits
`elastic-search-builder` is inspired by [bodybuilder](https://github.com/danpaz/bodybuilder) for documentation, build step.