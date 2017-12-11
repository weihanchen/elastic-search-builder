import optionsBuilder from '../';

describe('type', () => {
    it('build with string type', () => {
        //Arrange/Act
        const options = optionsBuilder().type('employee').getOptions();
        //Assert
        expect(options).toEqual({
            type: 'employee'
        });
    });
    it('build with array type', () => {
        //Arrange/Act
        const options = optionsBuilder().type(['company', 'school']).getOptions();
        //Assert
        expect(options).toEqual({
            type: 'company,school'
        });
    });
    it('build with mix type', () => {
        //Arrange/Act
        const options = optionsBuilder().type(['company', 'school'], 'employee', 'student').getOptions();
        //Assert
        expect(options).toEqual({
            type: 'company,school,employee,student'
        });
    });
});