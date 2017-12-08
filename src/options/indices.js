export default (indices = [], joinToken = ',', ignoreUnavailable = false, allowNoIndices = false, expandWildcards = 'open') => Object.assign({} , {
   index: indices.join(joinToken),
   ignoreUnavailable,
   allowNoIndices,
   expandWildcards
});