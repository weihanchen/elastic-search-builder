import optionsBuilder from '../';

describe('indices', () => {
    it('build with basic indices', () => {
        //Arrange/Act
        const indices = ['2017.01.01', '2017.01.02'];
        const options = optionsBuilder().indices(indices).getOptions();
        //Assert
        expect(options).toEqual({
            index: '2017.01.01,2017.01.02',
            ignoreUnavailable: false,
            allowNoIndices: false
        });
    });
    it('build with indices option', () => {
        //Arrange/Act
        const indices = ['2017.01.01', '2017.01.02'];
        const options = optionsBuilder().indices(indices, true, true).getOptions();
        //Assert
        expect(options).toEqual({
            index: '2017.01.01,2017.01.02',
            ignoreUnavailable: true,
            allowNoIndices: true
        });
    });
});