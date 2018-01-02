import mustBuilder from './must';
import mustNotBuilder from './mustNot';
import shouldBuilder from './should';
import boolFilterBuilder from './filter';


export default (boolBody = {}) => ({
    /**
     * The clause (query) must appear in matching documents and will contribute to the score.
     * @param {...*} args 
     * @example
     * esb()
     *  .body()
     *  .query()
     *  .bool()
     *  .boolMust({
     *      term : { user : 'kimchy' }
     *  })
     *  .build()
     * 
     * //result
     * {
     *  "body": {
     *      "query": {
     *          "bool": {
     *              "must": [
     *                  {
     *                      "term" : { 
     *                          "user" : 'kimchy' 
     *                      }
     *                  }
     *              ]
     *          }
     *      }
     *  }
     * }
     */
    boolMust(...args) {
        Object.assign(this, mustBuilder(args));
        Object.assign(boolBody, this.getMust());
        return this;
    },
    /**
     * The clause (query) must not appear in the matching documents. 
     * Clauses are executed in filter context meaning that scoring is ignored and clauses are considered for caching. 
     * Because scoring is ignored, a score of 0 for all documents is returned.
     * @param {...*} args 
     * @example
     * esb()
     *  .body()
     *  .query()
     *  .bool()
     *  .boolNot({
     *      term : { user : 'kimchy' }
     *  })
     *  .build()
     * 
     * //result
     * {
     *  "body": {
     *      "query": {
     *          "bool": {
     *              "must_not": [
     *                  {
     *                      "term" : { 
     *                          "user" : 'kimchy' 
     *                      }
     *                  }
     *              ]
     *          }
     *      }
     *  }
     * }
     */
    boolNot(...args) {
        Object.assign(this, mustNotBuilder(args));
        Object.assign(boolBody, this.getMustNot());
        return this;
    },
    /**
     * The clause (query) should appear in the matching document. 
     * If the bool query is in a query context and has a must or filter clause then a document will match the bool query even if none of the should queries match. 
     * In this case these clauses are only used to influence the score. 
     * If the bool query is a filter context or has neither must or filter then at least one of the should queries must match a document for it to match the bool query. 
     * This behavior may be explicitly controlled by settings the minimum_should_match parameter.
     * @param {...*} args 
     * @example
     * esb()
     *  .body()
     *  .query()
     *  .bool()
     *  .boolShould({
     *      term : { user : 'kimchy' }
     *  })
     *  .build()
     * 
     * //result
     * {
     *  "body": {
     *      "query": {
     *          "bool": {
     *              "should": [
     *                  {
     *                      "term" : { 
     *                          "user" : 'kimchy' 
     *                      }
     *                  }
     *              ]
     *          }
     *      }
     *  }
     * }
     */
    boolShould(...args) {
        Object.assign(this, shouldBuilder(args));
        Object.assign(boolBody, this.getShould());
        return this;
    },
    /**
     * The clause (query) must appear in matching documents. 
     * However unlike must the score of the query will be ignored. 
     * Filter clauses are executed in filter context, meaning that scoring is ignored and clauses are considered for caching.
     * @param {...*} args 
     * @example
     * esb()
     *  .body()
     *  .query()
     *  .bool()
     *  .boolFilter({
     *      term : { user : 'kimchy' }
     *  })
     *  .build()
     * 
     * //result
     * {
     *  "body": {
     *      "query": {
     *          "bool": {
     *              "filter": [
     *                  {
     *                      "term" : { 
     *                          "user" : 'kimchy' 
     *                      }
     *                  }
     *              ]
     *          }
     *      }
     *  }
     * }
     */
    boolFilter(...args) {
        Object.assign(this, boolFilterBuilder(args));
        Object.assign(boolBody, this.getBoolFilter());
        return this;
    },
    getBool: () => ({ bool: boolBody})
});