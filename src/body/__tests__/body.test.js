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
    it('build with fields', () => {
        //Arrange/Act
        const body = bodyBuilder()
            .fields('rating', 'count')
            .getBody();
        //Assert
        expect(body).toEqual({
            body: {
                fields: ['rating', 'count']
            }
        });
    });
    it('build with size', () => {
        //Arrange/Act
        const body = bodyBuilder()
            .size(10)
            .getBody();
        //Assert
        expect(body).toEqual({
            body: {
                size: 10
            }
        });
    });
    it('build with from', () => {
        //Arrange/Act
        const body = bodyBuilder()
            .from(1)
            .getBody();
        //Assert
        expect(body).toEqual({
            body: {
                from: 1
            }
        });
    });
});