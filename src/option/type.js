export default (args) => {
    const type = args.join(',');
    return {
        getType: () => ({ type })
    };
};