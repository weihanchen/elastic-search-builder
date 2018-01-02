import optionBuilder from '../';

describe('type', () => {
    it('build with empty type', () => {
        //Arrange/Act
        const option = optionBuilder().type().getOption();
        //Assert
        expect(option).toEqual({
            type: ""
        });
    });
    it('build with string type', () => {
        //Arrange/Act
        const option = optionBuilder().type('employee').getOption();
        //Assert
        expect(option).toEqual({
            type: 'employee'
        });
    });
    it('build with array type', () => {
        //Arrange/Act
        const option = optionBuilder().type(['company', 'school']).getOption();
        //Assert
        expect(option).toEqual({
            type: 'company,school'
        });
    });
    it('build with mix type', () => {
        //Arrange/Act
        const option = optionBuilder().type(['company', 'school'], 'employee', 'student').getOption();
        //Assert
        expect(option).toEqual({
            type: 'company,school,employee,student'
        });
    });
});