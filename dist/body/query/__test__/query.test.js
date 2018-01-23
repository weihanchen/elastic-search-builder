'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('query', function () {
    it('build with custom body', function () {
        //Arrange/Act
        var body = (0, _2.default)({
            match: {
                message: 'hello world'
            }
        }).getQuery();
        //Assert
        expect(body).toEqual({
            query: {
                match: {
                    message: 'hello world'
                }
            }
        });
    });
});