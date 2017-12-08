export default (args) => ({
   getMust: () => ({ must: [].concat(...args).filter(el => el)})
});