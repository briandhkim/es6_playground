import $ from 'jquery';
import * as math from './math';

$('#root').append('<h2> added with $</h2>');

$('#root').append(`<h3> 6 + 9 = ${math.add(6,9)}</h3>`);
$('#root').append(`<h3> 9 - 3 = ${math.subtract(9,3)} </h3>`);
$('#root').append(`<h3> 9 / 3 = ${math.div(9,3)} </h3>`);
$('#root').append(`<h3> 8 x 3 = ${math.mult(8,3)} </h3>`);
$('#root').append(`<h3> 4 / 0 = ${math.div(4,0)} </h3>`);

console.log(`math object : ${math}`, math);