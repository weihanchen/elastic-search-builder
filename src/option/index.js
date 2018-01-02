import indicesBuilder from './indices';
import typeBuilder from './type';


export default (body = {}) => ( {
    /**
     * Add index field to option.
     * 
     * @param {Array} indices multi index
     * @param {boolean} ignoreUnavailable Whether specified concrete indices should be ignored when unavailable (missing or closed)
     * @param {boolean} allowNoIndices Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes _all string or when no indices have been specified)
     * @example
     * esb()
     *  .options()
     *  .indices(['2016.01.01'], true, true)
     *  .build()
     */
    indices(indices = [], ignoreUnavailable, allowNoIndices) {
        Object.assign(this, indicesBuilder(indices, ignoreUnavailable, allowNoIndices));
        Object.assign(body, this.getIndex());
        return this;
    },
    /**
     * Add type field to option
     * 
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