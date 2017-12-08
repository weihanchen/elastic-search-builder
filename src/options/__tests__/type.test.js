import optionsBuilder from '../';

describe('type', () => {
    it('build with type', () => {
        //Arrange/Act
        const options = optionsBuilder().type('employee').getOptions();
        //Assert
        expect(options).toEqual({
            type: 'employee'
        });
    });
});