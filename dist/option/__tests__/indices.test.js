'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('indices', function () {
    it('build with empty indices', function () {
        //Arrange/Act
        var option = (0, _2.default)().indices().getOption();
        //Assert
        expect(option).toEqual({
            index: '',
            ignoreUnavailable: false,
            allowNoIndices: false
        });
    });
    it('build with basic indices', function () {
        //Arrange/Act
        var indices = ['2017.01.01', '2017.01.02'];
        var option = (0, _2.default)().indices(indices).getOption();
        //Assert
        expect(option).toEqual({
            index: '2017.01.01,2017.01.02',
            ignoreUnavailable: false,
            allowNoIndices: false
        });
    });
    it('build with indices option', function () {
        //Arrange/Act
        var indices = ['2017.01.01', '2017.01.02'];
        var option = (0, _2.default)().indices(indices, true, true).getOption();
        //Assert
        expect(option).toEqual({
            index: '2017.01.01,2017.01.02',
            ignoreUnavailable: true,
            allowNoIndices: true
        });
    });
});