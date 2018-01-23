'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('option', function () {
    var answer = {
        index: '20170701,20170702',
        type: 'employee',
        ignoreUnavailable: true,
        allowNoIndices: true
    };
    it('build with custom option', function () {
        //Arrange/Act
        var option = (0, _2.default)(answer).getOption();
        //Assert
        expect(option).toEqual(answer);
    });
});