export default (args) => ( {
    getMustNot: () => ({ must_not: [].concat(...args).filter(el => el)})
});