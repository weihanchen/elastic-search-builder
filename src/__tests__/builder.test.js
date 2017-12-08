import esb from '../';

describe('body', () => {
    it('build with custom body', () => {
        //Arrange/Act
        const options = esb().body({
            query: {
                match: {
                    message: 'hello world'
                }
            }
        }).build();
        //Assert
        expect(options).toEqual({
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

describe('options', () => {
    const answer = {
        index: '20170701,20170702',
        type: 'employee',
        ignoreUnavailable: true,
        allowNoIndices: true
    };
    it('build with custom options', () => {
        //Arrange/Act
        const options = esb().options(answer).getOptions();
        //Assert
        expect(options).toEqual(answer);
    });
});