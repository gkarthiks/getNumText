# isEmptyObj

![node](https://img.shields.io/badge/node-v8.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-green.svg) [![Build Status](https://travis-ci.org/gkarthiks/isEmptyObj.svg?branch=master)](https://travis-ci.org/gkarthiks/isEmptyObj)

Checks the given object is empty recursively (if needed) and returns true for empty.

### Why this?
This library checks the given `variable` or `object` for the *null* or *empty*. This will **recursively** goes into the object if needed and checks for the null / empty values. For example if an `Object` is having multiple levels and all those levels have just empty value, this will return `true`. Even at the least level, if it finds a value associated of with any type like Array or Object or String or even number this returns `false`.

## Installation
> npm i @gkarthiks/isemptyobj

## Usage
```JS
var a = [];

var b = {};

var c = [{}];

var d = [{1:2}];

var e = { one: 1 };

var f = {
  source: {}, 
  type: 'typeValue', 
  pool: {}, 
  acquireConnectionTimeout: 30000, 
  system: [ {
            a: [1,2], 
            c: [5,6] 
            }, 
            2]
  };

var g = {
timeseries: {
  tillDate: ['val1', 'val2', 'val3', 'val4', 'val5']
  }
};

var h = {
  timeseries: {
    tillDate: [],
    }
};

var i = {
  a: [], 
  b:{ }
};

var j = {
  a: [], 
  b:{ 
    aa:[11],
    bb:{}
  }
};

var k = {
  system: [ {
            a: [1,2], 
            c: [5,6], 
            }, 
          2]
};

var l = {
      source: {}, 
      type: "", 
      pool: {},
      acquireConnectionTimeout: '', 
      system: [ {
        a: [], 
        c: []
        }, 
      ]
  };
```

```
isEmptyObj(a)         // => true
isEmptyObj(b)         // => true
isEmptyObj(c)         // => true
isEmptyObj(d)         // => false
isEmptyObj(e)         // => false
isEmptyObj(f)         // => false
isEmptyObj(g)         // => false
isEmptyObj(h)         // => true
isEmptyObj(i)         // => true
isEmptyObj(j)         // => false
isEmptyObj(k)         // => false
isEmptyObj(l)         // => true
```
