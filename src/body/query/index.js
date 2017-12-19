import boolBuilder from './bool';
export default (queryBody) => ({
    /**
     * Add bool clause to query body.
     * 
     * @param {Object} boolBody bool clause
     * @return {boolMust|boolNot|boolShould|boolFilter} see below.
     * @example
     * esb()
     *  .body()
     *  .query()
     *  .bool({
     *      must: {
     *          term : { user : 'kimchy' }
     *      },
     *      must_not: {
     *          range: {
     *              age: {
     *                  gte: 10,
     *                  lte: 20
     *              }
     *          }
     *      }
     *  })
     *  .build()
     * //result:
     * {
     *      "body": {
     *          "query": {
     *              "bool": {
     *                  "must": {
     *                      "term": { "user": "kimchy"}
     *                  },
     *                  "must_not": {
     *                      "range": {
     *                          "age": {
     *                              "gte": 10,
     *                              "lte": 20
     *                          }
     *                      }
     *                  }
     *              }
     *          }
     *      }
     * }
     */
    bool(boolBody) {
        Object.assign(this, boolBuilder(boolBody));
        Object.assign(queryBody, this.getBool());
        return this;
    },
    getQuery: () => ({ query: queryBody}) 
});