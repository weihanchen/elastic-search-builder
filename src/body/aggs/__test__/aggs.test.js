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
    it('build with sub aggs', () => {
        //Arrange/Act
        const aggs = aggsBuilder()
            .appendAggs('genres', 'terms', {
                field: 'geners'
            })
            .subAggs()
            .appendAggs('title', 'terms', {
                field: 'title'
            })
            .subAggs()
            .appendAggs('name', 'terms', {
                field: 'name'
            })
            .getAggs();
        //Assert
        expect(aggs).toEqual({
            aggs: {
                genres: {
                    terms: {
                        field: 'geners'
                    },
                    aggs: {
                        title: {
                            terms: {
                                field: 'title'
                            },
                            aggs: {
                                name: {
                                    terms: {
                                        field: 'name'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    it('build with custom subaggs', () => {
        //Arrange/Act
        const aggs = aggsBuilder({
            genres: {
                terms: {
                    field: 'geners'
                }
            }
        }).subAggs({
            title: {
                terms: {
                    field: 'title'
                }
            }
        }).getAggs();
        //Assert
        expect(aggs).toEqual({
            aggs: {
                genres: {
                    terms: {
                        field: 'geners'
                    },
                    aggs: {
                        title: {
                            terms: {
                                field: 'title'
                            }

                        }
                    }
                }
            }
        });
    });
    it('build with mixed aggs', () => {
        //Arrange/Act
        const aggs = aggsBuilder()
            .appendAggs('by_gender', 'terms', {
                "field": "gender"
            })
            .subAggs()
            .forkAggs()
            .appendAggs('by_city', 'terms', {
                "field": "city"
            })
            .subAggs()
            .appendAggs('all_name', 'terms', {
                "field": "name"
            })
            .mergeAggs()
            .appendAggs('by_language', 'terms', {
                "field": "language"
            })
            .subAggs()
            .appendAggs('all_name', 'terms', {
                "field": "name"
            })
            .getAggs();
        //Assert
        expect(aggs).toEqual({
            "aggs": {
                "by_gender": {
                    "terms": {
                        "field": "gender"
                    },
                    "aggs": {
                        "by_city": {
                            "terms": {
                                "field": "city"
                            },
                            "aggs": {
                                "all_name": {
                                    "terms": {
                                        "field": "name"
                                    }
                                }
                            }
                        },
                        "by_language": {
                            "terms": {
                                "field": "language"
                            },
                            "aggs": {
                                "all_name": {
                                    "terms": {
                                        "field": "name"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    it('build with complex aggs', () => {
        //Arrange/Act
        const aggs = aggsBuilder()
            .appendAggs('by_gender', 'terms', {
                "field": "gender"
            })
            .subAggs()
            .forkAggs()
            .appendAggs('by_city', 'terms', {
                "field": "city"
            })
            .subAggs()
            .appendAggs('all_name', 'terms', {
                "field": "name"
            })
            .forkAggs()
            .appendAggs('by_language', 'terms', {
                "field": "language"
            })
            .subAggs()
            .appendAggs('all_name', 'terms', {
                "field": "name"
            })
            .mergeAggs()
            .mergeAggs()
            .getAggs();
        //Assert
        expect(aggs).toEqual({
            "aggs": {
                "by_gender": {
                    "terms": {
                        "field": "gender"
                    },
                    "aggs": {
                        "by_city": {
                            "terms": {
                                "field": "city"
                            },
                            "aggs": {
                                "all_name": {
                                    "terms": {
                                        "field": "name"
                                    }

                                },
                                "by_language": {
                                    "terms": {
                                        "field": "language"
                                    },
                                    "aggs": {
                                        "all_name": {
                                            "terms": {
                                                "field": "name"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    it('build with fork/merge side effect', () => {
        //Arrange/Act
        const aggs = aggsBuilder()
            .appendAggs('by_gender', 'terms', {
                "field": "gender"
            })
            .subAggs()
            .forkAggs()
            .appendAggs('by_city', 'terms', {
                "field": "city"
            })
            .subAggs()
            .appendAggs('all_name', 'terms', {
                "field": "name"
            })
            .mergeAggs()
            .mergeAggs()
            .getAggs();
        //Assert
        expect(aggs).toEqual({
            "aggs": {
                "by_gender": {
                    "terms": {
                        "field": "gender"
                    },
                    "aggs": {
                        "by_city": {
                            "terms": {
                                "field": "city"
                            },
                            "aggs": {
                                "all_name": {
                                    "terms": {
                                        "field": "name"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
});