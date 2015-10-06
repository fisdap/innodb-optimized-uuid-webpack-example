import * as iouuid from 'innodb-optimized-uuid';

var iouuidCjs = require('innodb-optimized-uuid');

var uuidCjs = iouuid.generate();
var uuidEs6 = iouuid.generate();

document.getElementById('content-cjs').value = uuidCjs;
document.getElementById('content-es6').value = uuidEs6;