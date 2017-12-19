import queryBuilder from '../';

describe('query', () => {
    it('build with custom body', () => {
        //Arrange/Act
        const body = queryBuilder({
            match: {
                message: 'hello world'
            }
        }).getQuery();
        //Assert
        expect(body).toEqual({
            query: {
                match: {
                    message: 'hello world'
                }
            }
        });
    });
});