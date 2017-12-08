import mustBuilder from './must';
import mustNotBuilder from './mustNot';
import shouldBuilder from './should';
import boolFilterBuilder from './filter';


export default (boolBody = {}) => ({
    boolMust(...args) {
        Object.assign(this, mustBuilder(args));
        Object.assign(boolBody, this.getMust());
        return this;
    },
    boolNot(...args) {
        Object.assign(this, mustNotBuilder(args));
        Object.assign(boolBody, this.getMustNot());
        return this;
    },
    boolShould(...args) {
        Object.assign(this, shouldBuilder(args));
        Object.assign(boolBody, this.getShould());
        return this;
    },
    boolFilter(...args) {
        Object.assign(this, boolFilterBuilder(args));
        Object.assign(boolBody, this.getBoolFilter());
        return this;
    },
    getBool: () => ({ bool: boolBody})
});