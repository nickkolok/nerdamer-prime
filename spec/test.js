/* global expect */

'use strict';

var nerdamer = require('../nerdamer.core.js');
require('../Algebra.js');
require('../Calculus.js');
require('../Solve.js');

console.log(nerdamer('solve(x=2^x/4,x)').toString());

