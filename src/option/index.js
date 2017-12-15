import indicesBuilder from './indices';
import typeBuilder from './type';


export default (body = {}) => ( {
    /**
     * Add index field to option.
     * 
     * @param {array} indices multi index
     * @param {bool} ignoreUnavailable Whether specified concrete indices should be ignored when unavailable (missing or closed)
     * @param {bool} allowNoIndices Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes _all string or when no indices have been specified)
     * @example
     * esb()
     *  .options()
     *  .indices(['2016.01.01'], true, true, 'open')
     *  .build()
     */
    indices(indices, ignoreUnavailable, allowNoIndices) {
        Object.assign(this, indicesBuilder(indices, ignoreUnavailable, allowNoIndices));
        Object.assign(body, this.getIndex());
        return this;
    },
    /**
     * Add type field to option
     * 
     * @param {array, params} type multi type
     * @example
     * esb()
     *  .options()
     *  .type(['company', 'school'], 'employee', 'student')
     *  .build()
     */
    type(...args) {
        Object.assign(this, typeBuilder(args));
        Object.assign(body, this.getType());
        return this;
    },
    getOption: () => body
});