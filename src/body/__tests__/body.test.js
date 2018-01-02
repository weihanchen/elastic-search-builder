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
    it('build with empty from/size', () => {
        //Arrange/Act
        const body = bodyBuilder()
            .from()
            .size()
            .getBody();
        //Assert
        expect(body).toEqual({
            body: {
                from: 0,
                size: 0
            }
        });
    });
    it('build with from/size', () => {
        //Arrange/Act
        const body = bodyBuilder()
            .from(10)
            .size(10)
            .getBody();
        //Assert
        expect(body).toEqual({
            body: {
                from: 10,
                size: 10
            }
        });
    });
    it('build with query', () => {
        //Arrange/Act
        const body = bodyBuilder()
            .query({
                match: {
                    message: 'hello world'
                }
            })
            .getBody();
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
    it('build with aggs', () => {
        //Arrange/Act
        const body = bodyBuilder()
            .aggs({
                message: {
                    terms: {
                        field: 'message'
                    }
                }
            })
            .getBody();
        //Assert
        expect(body).toEqual({
            body: {
                aggs: {
                    message: {
                        terms: {
                            field: 'message'
                        }
                    }
                }
            }
        });
    });
});