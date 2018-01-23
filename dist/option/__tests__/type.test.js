'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('type', function () {
    it('build with empty type', function () {
        //Arrange/Act
        var option = (0, _2.default)().type().getOption();
        //Assert
        expect(option).toEqual({
            type: ""
        });
    });
    it('build with string type', function () {
        //Arrange/Act
        var option = (0, _2.default)().type('employee').getOption();
        //Assert
        expect(option).toEqual({
            type: 'employee'
        });
    });
    it('build with array type', function () {
        //Arrange/Act
        var option = (0, _2.default)().type(['company', 'school']).getOption();
        //Assert
        expect(option).toEqual({
            type: 'company,school'
        });
    });
    it('build with mix type', function () {
        //Arrange/Act
        var option = (0, _2.default)().type(['company', 'school'], 'employee', 'student').getOption();
        //Assert
        expect(option).toEqual({
            type: 'company,school,employee,student'
        });
    });
});