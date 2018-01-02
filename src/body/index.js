import aggsBuilder from './aggs';
import queryBuilder from './query';

export default (body = {}) => ({
    /**
     * Add query clause to query body
     * @param {Object} queryBody any query clause
     * @return {bool} see below.
     * @example
     * //build body
     * esb()
     *  .body()
     *  .query({
     *      match: {
     *          message: 'hello'
     *      }
     *  })
     *  .build()
     * //result:
     * {
     *     body: {
     *          query: {
     *              match: {
     *                  message: 'hello'
     *              }
     *         }   
     *     }
     * }
     */
    query(queryBody = {}) {
        Object.assign(this, queryBuilder(queryBody));
        Object.assign(body, {} ,this.getQuery());
        return this;
    },
    /**
     * Add aggragation to aggs body
     * @param {Object} aggsBody any aggragation body
     * @example
     * esb()
     *  .body()
     *  .aggs({
     *      message: {
     *          terms: {
     *              field: 'message'
     *          }
     *      }
     *  })
     *  .build();
     * //result:
     * {
     *      body: {
     *          aggs: {
     *              message: {
     *                  terms: {
     *                      field: 'message'
     *                  }
     *              }
     *          }
     *      }
     * }
     */
    aggs(aggsBody = {}) {
        Object.assign(this, aggsBuilder(aggsBody));
        Object.assign(body, {} ,this.getAggs());
        return this;
    },
    /**
     * ***https://www.elastic.co/guide/en/elasticsearch/reference/current/search-field-caps.html***
     * @example
     * esb()
     *  .body()
     *  .fields('rating', 'count')
     *  .build()
     * //result:
     * {
     *      body: {
     *          fields: ['rating', 'count']
     *      }
     * }
     */
    fields(...args) {
        body.fields = args;
        return this;
    },
    /**
     * ***https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-from-size.html***
     * @param {number} size
     * @example
     * esb()
     *  .size(10)
     *  .build()
     * //result:
     * {
     *      body: {
     *          size: 10
     *      }
     * }
     */
    size(size = 0) {
        body.size = size;
        return this;
    },
    /**
     * ***https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-from-size.html***
     * @param {number} from
     * @example
     * esb()
     *  .from(1)
     *  .build()
     * //result:
     * {
     *      body: {
     *          from: 1
     *      }
     * }
     */
    from(from = 0) {
        body.from = from;
        return this;
    },
    getBody: () => ({ body })
});