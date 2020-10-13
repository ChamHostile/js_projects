'use strict';

/**Ex6
 *checkPhoneNumber
 *@param {number} numTel  
 */


function checkPhoneNumber(numTel){

 	var reg = new RegExp('^((06)|(07)|(01))[0-9]{8}$', 'i');;
  return reg.test(numTel);

 }

var telTest = window.prompt('Enter a phone number');
var phoneChecked = checkPhoneNumber(telTest);
console.log(phoneChecked);