import esb from '../';

describe('body', () => {
    it('build with custom body', () => {
        //Arrange/Act
        const option = esb().body({
            query: {
                match: {
                    message: 'hello world'
                }
            }
        }).build();
        //Assert
        expect(option).toEqual({
            body: {
                query: {
                    match: {
                        message: 'hello world'
                    }
                }
            }
        });
    });
});

describe('option', () => {
    const answer = {
        index: '20170701,20170702',
        type: 'employee',
        ignoreUnavailable: true,
        allowNoIndices: true
    };
    it('build with custom option', () => {
        //Arrange/Act
        const option = esb().option(answer).getOption();
        //Assert
        expect(option).toEqual(answer);
    });
});