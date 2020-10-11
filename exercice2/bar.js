'use strict';

/**Ex2
 * drawBar
 * @param {number} sum
 * @param {number} nbr
 * @return 
 */


var DrawBar = function DrawBar(sum, nbr){
	this.sum = sum;
	this.nbr = nbr;
}

DrawBar.prototype.run = function(){
	this.set(this.sum, this.nbr);
}

DrawBar.prototype.set = function setBar(barSum, barNbr){
	var bar = document.createElement('progress');
	bar.setAttribute('value', barNbr);
	bar.setAttribute('max', barSum);

	document.body.appendChild(bar);
}

var myBar = new DrawBar(254, 20);
myBar.run();