//TODO: refactoring

const objectDeepCopy = source => JSON.parse(JSON.stringify(source));

export default (aggsBody = {}) => {
    const name = Object.keys(aggsBody).shift();
    const res = { aggs: aggsBody };
    let currentNode = aggsBody[name] || aggsBody;
    let subNode = currentNode;
    const forks = [];
    return {
        appendAggs(name, type, body = {}) {
            const aggCtx = { [name]: { [type]: body } };
            Object.assign(currentNode, aggCtx);
            subNode = aggCtx[name];
            return this;
        },
        subAggs(aggsBody = {}) {
            const name = Object.keys(aggsBody).shift();
            currentNode = subNode;
            Object.assign(currentNode, { aggs: aggsBody });
            currentNode = aggsBody[name] || aggsBody;
            return this;
        },
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
        mergeAggs() {
            const fork = forks.pop();
            Object.assign(fork.currentNode, fork.draftNode);
            ({currentNode, subNode} = fork);
            return this;
        },
        getAggs: () => res
    };
};
