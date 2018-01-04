export default (indices, ignoreUnavailable = false, allowNoIndices = false) => {
    const index = [].concat(indices).join(',');
    return {
        getIndex: () => ({
            index,
            ignoreUnavailable,
            allowNoIndices,
        })
    };
};