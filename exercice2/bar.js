'use strict';

/**Ex2
 * drawBar
 * @param {number} sum
 * @param {number} nbr
 * @return 
 */

/**
 * MyMorpionXO
* @constructor {number} sum
* @constructor {number} nbr
*/
var DrawBar = function DrawBar(sum, nbr){
	this.sum = sum;
	this.nbr = nbr;
}

/**
* run
*/
DrawBar.prototype.run = function(){
	this.set(this.sum, this.nbr);
}

/**
 * set
* @param {number} barSum
* @param {number} barNbr
*/
DrawBar.prototype.set = function setBar(barSum, barNbr){
	var bar = document.createElement('progress');
	bar.setAttribute('value', barNbr);
	bar.setAttribute('max', barSum);

	document.body.appendChild(bar);
}

var myBar = new DrawBar(254, 20);
myBar.run();