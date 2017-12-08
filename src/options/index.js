import indices from './indices';


export default (optionsBody = {}) => ( {
    indices(...args) {
        Object.assign(optionsBody, indices(...args));
        return this;
    },
    type(type) {
        Object.assign(optionsBody, {type});
        return this;
    },
    getOptions: () => optionsBody
});