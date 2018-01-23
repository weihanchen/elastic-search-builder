"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//TODO: refactoring

var objectDeepCopy = function objectDeepCopy(source) {
    return JSON.parse(JSON.stringify(source));
};

exports.default = function () {
    var aggsBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var name = Object.keys(aggsBody).shift();
    var res = { aggs: aggsBody };
    var currentNode = aggsBody[name] || aggsBody;
    var subNode = currentNode;
    var forks = [];
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
        appendAggs: function appendAggs(name, type, body) {
            var aggCtx = _defineProperty({}, name, _defineProperty({}, type, body));
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
        subAggs: function subAggs() {
            var aggsBody = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var name = Object.keys(aggsBody).shift();
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
        forkAggs: function forkAggs() {
            var fork = {
                currentNode: currentNode,
                subNode: subNode
            };
            currentNode = objectDeepCopy(currentNode);
            subNode = objectDeepCopy(subNode);
            Object.assign(fork, { draftNode: currentNode });
            forks.push(fork);
            return this;
        },

        /**
         * merge to forked aggs
         */
        mergeAggs: function mergeAggs() {
            if (forks.length <= 0) return this;
            var fork = forks.pop();
            Object.assign(fork.currentNode, fork.draftNode);
            currentNode = fork.currentNode;
            subNode = fork.subNode;

            return this;
        },

        getAggs: function getAggs() {
            return res;
        }
    };
};