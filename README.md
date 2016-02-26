# open-prh
[![Build Status](https://travis-ci.org/petja/open-prh.svg?branch=master)](https://travis-ci.org/petja/open-prh)

Search company information from open databases of Finnish Patent And Registration Office.

## Usage
Usage is pretty easy.

```
var prh = require('open-prh');

prh.company.findById('1927400-1')
    .then(function(company){
        console.log(company);
    })
    .catch(function(err){
        throw err;
    });
```
