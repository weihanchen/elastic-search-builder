export default (args) => ( {
    getShould: () => ({ should: [].concat(...args).filter(el => el)})
});