'use strict';

/**Ex7
 *computeNotes
 *@param {array} numTel  
 */

function computeNotes(noteArray){
	var moyenne = 0;
	console.log(noteArray)
	for (var i = 0; i<noteArray.length; i++){
		moyenne += noteArray[i];
		console.log(noteArray[i]);
		console.log(moyenne);
	}

	moyenne = moyenne/noteArray.length;

	return moyenne;
}

var myArray = [10, 13, 13, 12, 15, 12, 11, 16, 14];
var average = computeNotes(myArray);
console.log(average);