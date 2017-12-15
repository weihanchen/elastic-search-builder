import optionBuilder from '../';

describe('indices', () => {
    it('build with basic indices', () => {
        //Arrange/Act
        const indices = ['2017.01.01', '2017.01.02'];
        const option = optionBuilder().indices(indices).getOption();
        //Assert
        expect(option).toEqual({
            index: '2017.01.01,2017.01.02',
            ignoreUnavailable: false,
            allowNoIndices: false
        });
    });
    it('build with indices option', () => {
        //Arrange/Act
        const indices = ['2017.01.01', '2017.01.02'];
        const option = optionBuilder().indices(indices, true, true).getOption();
        //Assert
        expect(option).toEqual({
            index: '2017.01.01,2017.01.02',
            ignoreUnavailable: true,
            allowNoIndices: true
        });
    });
});