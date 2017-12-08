export default (args) => ( {
   getBoolFilter: () => ({ filter: [].concat(...args).filter(el => el)})
});