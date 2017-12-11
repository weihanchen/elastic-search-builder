import aggsBuilder from './aggs';
import queryBuilder from './query';

export default (body = {}) => ({
    /**
     * Add query clause to query body
     * @param {object} queryBody any query clause
     * @example
     * esb()
     *  .body()
     *  .query({
     *      match: {
     *          message: 'hello'
     *      }
     *  })
     *  .build()
     */
    query(queryBody = {}) {
        Object.assign(this, queryBuilder(queryBody));
        Object.assign(body, {} ,this.getQuery());
        return this;
    },
    aggs(aggsBody = {}) {
        Object.assign(this, aggsBuilder(aggsBody));
        Object.assign(body, {} ,this.getAggs());
        return this;
    },
    fields(...args) {
        body.fields = args;
        return this;
    },
    size(size = 0) {
        body.size = size;
        return this;
    },
    from(from = 0) {
        body.from = from;
    },
    getBody: () => ({ body })
});