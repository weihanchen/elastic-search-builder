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
    it('build with nested aggs', () => {
        //Arrange/Act
        const aggs = aggsBuilder()
            .appendAggs('total_cyclists_injured', 'sum', {
                field: 'number_of_cyclist_injured'
            })
            .appendAggs('all_boroughs', 'terms', {
                field: 'borough'
            })
            .subAggs()
            .appendAggs('cause', 'terms', {
                field: 'contributing_factor_vehicle',
                size: 3
            })
            .subAggs()
            .appendAggs('incidents_per_month', 'date_histogram', {
                field: '@timestamp',
                interval: 'month'
            })
            .getAggs();
        //Assert
        expect(aggs).toEqual({
            aggs: {
                all_boroughs: {
                    terms: {
                        field: 'borough'
                    },
                    aggs: {
                        cause: {
                            terms: {
                                field: 'contributing_factor_vehicle',
                                size: 3
                            },
                            aggs: {
                                incidents_per_month: {
                                    date_histogram: {
                                        field: '@timestamp',
                                        interval: 'month'
                                    }
                                }
                            }
                        }
                    }
                },
                total_cyclists_injured: {
                    sum: {
                        field: 'number_of_cyclist_injured'
                    }
                }
            }
        });
    });
});