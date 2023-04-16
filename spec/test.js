/* global expect */

'use strict';

var nerdamer = require('../nerdamer.core.js');
require('../Algebra.js');
require('../Calculus.js');
require('../Solve.js');

let d;

//     d = nerdamer("log(0.01*s)")
//     .divide("(-239263565+51955423*log(s))");
// console.log(d.text());
//     d = d.subtract(nerdamer("1"))
// console.log(d.text());
//     d = d.simplify();
// console.log(d.text());

d = nerdamer("(-239263565+51955423*log(s))^(-1)*(-51955423*log(s)+239263565+log((1/100)*s))");
console.log(d.text());
d = d.simplify();
console.log(d.text());

// console.log("version 2");
// d = nerdamer("log(0.01*s)")
//     .divide(nerdamer("-23926356+51955423*log(s)"))
//     .subtract(nerdamer("1"));

// console.log(d.text());
// d= d.simplify();
// console.log(d.text());
