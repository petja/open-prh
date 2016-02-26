'use strict';

var request = require('superagent');

class prhCompany {
    constructor(obj){
        this.businessId         = obj.businessId;
        this.name               = obj.name;
        this.registrationDate   = new Date(obj.registrationDate);
        this.companyForm        = obj.companyForm;
    }

    static findById(businessId){
        return new Promise(function(fulfill, reject){
            request
                .get('http://avoindata.prh.fi/bis/v1/' + businessId)
                .accept('json')
                .end((err, res) => {
                    if(err) reject(err);

                    var instance = new prhCompany(res.body.results[0]); 
                    fulfill(instance);
                });
        });
    }
}

module.exports = prhCompany;
