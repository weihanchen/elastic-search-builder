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
     *          "term" : { "user" : "kimchy" }
     *      }
     *  })
     *  .build()
     */
    bool(boolBody) {
        Object.assign(this, boolBuilder(boolBody));
        Object.assign(queryBody, this.getBool());
        return this;
    },
    getQuery: () => ({ query: queryBody}) 
});