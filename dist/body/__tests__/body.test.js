'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('body', function () {
    it('build with custom body', function () {
        //Arrange/Act
        var body = (0, _2.default)({
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
    it('build with fields', function () {
        //Arrange/Act
        var body = (0, _2.default)().fields('rating', 'count').getBody();
        //Assert
        expect(body).toEqual({
            body: {
                fields: ['rating', 'count']
            }
        });
    });
    it('build with empty from/size', function () {
        //Arrange/Act
        var body = (0, _2.default)().from().size().getBody();
        //Assert
        expect(body).toEqual({
            body: {
                from: 0,
                size: 0
            }
        });
    });
    it('build with from/size', function () {
        //Arrange/Act
        var body = (0, _2.default)().from(10).size(10).getBody();
        //Assert
        expect(body).toEqual({
            body: {
                from: 10,
                size: 10
            }
        });
    });
    it('build with query', function () {
        //Arrange/Act
        var body = (0, _2.default)().query({
            match: {
                message: 'hello world'
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
    it('build with aggs', function () {
        //Arrange/Act
        var body = (0, _2.default)().aggs({
            message: {
                terms: {
                    field: 'message'
                }
            }
        }).getBody();
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