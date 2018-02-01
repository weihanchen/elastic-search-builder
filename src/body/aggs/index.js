//TODO: refactoring

const objectDeepCopy = source => JSON.parse(JSON.stringify(source));

export default (aggsBody = {}) => {
    const name = Object.keys(aggsBody).shift();
    const res = { aggs: aggsBody };
    let currentNode = aggsBody[name] || aggsBody;
    let subNode = currentNode;
    const forks = [];
    return {
        /**
         * Add an aggregation clause to the aggs body.
         * @param {string} name Name of the aggregation.
         * @param {string} type Name of the aggregation type, such as `'sum'` or `'terms'`.
         * @param {Object} body Options to include in the aggregation.
         * @example
         * esb()
         *  .body()
         *  .aggs()
         *  .appendAggs('message', 'terms', {
         *      field: 'message'
         *  })
         *  .build();
         */
        appendAggs(name, type, body) {
            const aggCtx = { [name]: { [type]: body } };
            Object.assign(currentNode, aggCtx);
            subNode = aggCtx[name];
            return this;
        },
        /**
         * Add aggregation to sub aggs body.
         * @param {Object} aggsBody 
         * @example
         * esb()
         *  .body()
         *  .aggs()
         *  .appendAggs('message', 'terms', {
         *      field: 'message'
         *  })
         *  .subAggs()
         *  .appendAggs('name', 'terms', {  
         *      field: 'name'
         *  })
         *  .build();
         * //result
         * {
         *  "body": {
         *      "aggs": {
         *          "message": {
         *              "terms": {
         *                  "field": "message"
         *              },
         *              "aggs": {
         *                  "name": {
         *                      "terms": {
         *                          "field": "name"
         *                      }
         *                  }
         *              }
         *          }
         *      }
         *  }
         * }
         */
        subAggs(aggsBody = {}) {
            const name = Object.keys(aggsBody).shift();
            currentNode = subNode;
            Object.assign(currentNode, { aggs: aggsBody });
            currentNode = aggsBody[name] || aggsBody;
            return this;
        },
        /**
         * fork from current aggs node
         * @example
         * esb()
         *  .body()
         *  .aggs()
         *  .appendAggs('by_gender', 'terms', {
         *       "field": "gender"
         *   })
         *  .subAggs()
         *  .forkAggs()
         *  .appendAggs('by_city', 'terms', {
         *      "field": "city"
         *  })
         *  .subAggs()
         *  .appendAggs('all_name', 'terms', {
         *      "field": "name"
         *  })
         *  .mergeAggs()
         *  .appendAggs('by_language', 'terms', {
         *      "field": "language"
         *  })
         *  .subAggs()
         *  .appendAggs('all_name', 'terms', {
         *      "field": "name"
         *  })
         *  .build()
         * //result:
         * {
         *   "aggs": {
         *       "by_gender": {
         *           "terms": {
         *               "field": "gender"
         *           },
         *           "aggs": {
         *               "by_city": {
         *                   "terms": {
         *                       "field": "city"
         *                   },
         *                   "aggs": {
         *                       "all_name": {
         *                           "terms": {
         *                               "field": "name"
         *                           }
         *                       }
         *                   }
         *               },
         *               "by_language": {
         *                   "terms": {
         *                       "field": "language"
         *                   },
         *                   "aggs": {
         *                       "all_name": {
         *                           "terms": {
         *                               "field": "name"
         *                           }
         *                       }
         *                   }
         *               }
         *           }
         *       }
         *   }
         *}
         */
        forkAggs() {
            const fork = {
                currentNode,
                subNode
            };
            currentNode = objectDeepCopy(currentNode);
            subNode = objectDeepCopy(subNode);
            Object.assign(fork, { draftNode: currentNode });
            forks.push(fork);
            return this;
        },
        /**
         * @see {@link forkAggs}
         */
        mergeAggs() {
            if (forks.length <= 0) return this;
            const fork = forks.pop();
            Object.assign(fork.currentNode, fork.draftNode);
            ({ currentNode, subNode } = fork);
            return this;
        },
        getAggs: () => res
    };
};
