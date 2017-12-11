export default (indices = [], ignoreUnavailable = false, allowNoIndices = false, expandWildcards = 'open') => {
    const index = indices.join(',');
    return {
        getIndex: () => ({
            index,
            ignoreUnavailable,
            allowNoIndices,
            expandWildcards
        })
    };
};