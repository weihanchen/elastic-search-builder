import optionBuilder from '../';

describe('option', () => {
    const answer = {
        index: '20170701,20170702',
        type: 'employee',
        ignoreUnavailable: true,
        allowNoIndices: true
    };
    it('build with custom option', () => {
        //Arrange/Act
        const option = optionBuilder(answer).getOption();
        //Assert
        expect(option).toEqual(answer);
    });
});