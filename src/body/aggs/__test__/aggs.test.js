import aggsBuilder from '../';

describe('aggs', () => {
    it('build with custom aggs', () => {
        //Arrange/Act
        const aggs = aggsBuilder({
            message: {
                terms: {
                    field: 'message'
                }
            }
        }).getAggs();
        //Assert
        expect(aggs).toEqual({
            aggs: {
                message: {
                    terms: {
                        field: 'message'
                    }
                }
            }
        });
    });
    it('build with flat aggs', () => {
        //Arrange/Act
        const aggs = aggsBuilder()
            .appendAggs('genres', 'terms', {
                field: 'genre'
            })
            .appendAggs('title', 'terms', {
                field: 'title'
            })
            .getAggs();
        //Assert
        expect(aggs).toEqual({
            aggs: {
                genres: {
                    terms: {
                        field: 'genre'
                    }
                },
                title: {
                    terms: {
                        field: 'title'
                    }
                }
            }
        });
    });
});