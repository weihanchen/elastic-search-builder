import boolBuilder from './bool';
export default (queryBody) => ({
    bool(boolBody) {
        Object.assign(this, boolBuilder(boolBody));
        Object.assign(queryBody, this.getBool());
        return this;
    },
    getQuery: () => ({ query: queryBody}) 
});