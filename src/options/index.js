import indicesBuilder from './indices';
import typeBuilder from './type';


export default (body = {}) => ( {
    indices(indices, ignoreUnavailable, allowNoIndices, expandWildcards) {
        Object.assign(this, indicesBuilder(indices, ignoreUnavailable, allowNoIndices, expandWildcards));
        Object.assign(body, this.getIndex());
        return this;
    },
    type(...args) {
        Object.assign(this, typeBuilder(args));
        Object.assign(body, this.getType());
        return this;
    },
    getOptions: () => body
});