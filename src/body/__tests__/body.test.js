import bodyBuilder from '../';

describe('body', () => {
    it('build with custom body', () => {
        //Arrange/Act
        const body = bodyBuilder({
            query: {
                match: {
                    message: 'hello world'
                }
            }
        }).getBody();
        //Assert
        expect(body).toEqual({
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