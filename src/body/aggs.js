//TODO: refactoring

export default (aggsBody = {}) => {
    let name;
    for (name in aggsBody) break;
    const res = { aggs: aggsBody };
    let currentNode = aggsBody[name] || aggsBody;
    let lastNode = currentNode;
   
    return {
        appendAggs(name, type, body = {}) {
            const aggCtx = { [name]: { [type]: body } };
            Object.assign(currentNode, aggCtx);
            lastNode = aggCtx[name];
            return this;
        },
        subAggs(aggsBody = {}) {
            currentNode = lastNode;
            Object.assign(currentNode, { aggs: aggsBody});
            currentNode = aggsBody[name] || aggsBody;
            return this;
        },
        getAggs: () => res
    };
};
