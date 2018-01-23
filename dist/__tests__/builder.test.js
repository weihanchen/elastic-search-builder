'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('body', function () {
    it('build with custom body', function () {
        //Arrange/Act
        var option = (0, _2.default)().body({
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

describe('option', function () {
    var answer = {
        index: '20170701,20170702',
        type: 'employee',
        ignoreUnavailable: true,
        allowNoIndices: true
    };
    it('build with custom option', function () {
        //Arrange/Act
        var option = (0, _2.default)().option(answer).build();
        //Assert
        expect(option).toEqual(answer);
    });
});

describe('use case', function () {
    it('build with metrics aggregations', function () {
        //Arrange/Act
        var option = (0, _2.default)().option().indices('20170702', false, false).type('student').body().from(5).size(10).aggs().appendAggs('class', 'terms', {
            field: 'class'
        }).subAggs().appendAggs('name', 'terms', {
            field: 'name'
        }).appendAggs('grade_avg', 'avg', {
            "field": "grade",
            "missing": 10
        }).build();

        //Assert
        expect(option).toEqual({
            "index": "20170702",
            "type": "student",
            "ignoreUnavailable": false,
            "allowNoIndices": false,
            "body": {
                "from": 5,
                "size": 10,
                "aggs": {
                    "class": {
                        "terms": {
                            "field": "class"
                        },
                        "aggs": {
                            "name": {
                                "terms": {
                                    "field": "name"
                                }
                            },
                            "grade_avg": {
                                "avg": {
                                    "field": "grade",
                                    "missing": 10
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    it('build with complex case', function () {
        //Arrange/Act
        var option = (0, _2.default)().option().indices(['20170701', '20170702'], true, true).type('employee').body().from().size(10).query().bool().boolMust({
            "term": { "name": "kimchy" }
        }).boolNot({
            "term": { "name": "bob" }
        }).boolShould({
            "term": { "department": "RD" }
        }).boolFilter({
            "term": { "name": "john" }
        }).aggs().appendAggs('by_gender', 'terms', {
            "field": "gender"
        }).subAggs().forkAggs().appendAggs('by_city', 'terms', {
            "field": "city"
        }).subAggs().appendAggs('all_name', 'terms', {
            "field": "name"
        }).mergeAggs().appendAggs('by_language', 'terms', {
            "field": "language"
        }).subAggs().appendAggs('all_name', 'terms', {
            "field": "name"
        }).build();
        //Assert
        expect(option).toEqual({
            "index": "20170701,20170702",
            "type": "employee",
            "ignoreUnavailable": true,
            "allowNoIndices": true,
            "body": {
                "from": 0,
                "size": 10,
                "query": {
                    "bool": {
                        "must": [{
                            "term": { "name": "kimchy" }
                        }],
                        "must_not": [{
                            "term": { "name": "bob" }
                        }],
                        "should": [{
                            "term": { "department": "RD" }
                        }],
                        "filter": [{
                            "term": { "name": "john" }
                        }]
                    }
                },
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
            }
        });
    });
});