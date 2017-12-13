export default (indices = [], ignoreUnavailable = false, allowNoIndices = false) => {
    const index = indices.join(',');
    return {
        getIndex: () => ({
            index,
            ignoreUnavailable,
            allowNoIndices,
        })
    };
};