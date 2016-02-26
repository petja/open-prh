var assert = require('chai').assert;
var PRH = require('../index.js');

describe('Company', function() {
    describe('#findById', function() {
        var search = PRH.company.findById('0110139-9');

        it('should return Promise', function() {
            assert.instanceOf(search, Promise);
        });

        it('should have name as String', function() {
            search.then(function(company){
                console.log(company);
                // Why in the hell doesn't this assertion work?!?!
                assert.typeOf(company.name, 'lolol');
            });
        });
    });
});
