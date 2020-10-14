/**
 * checkPalindrome
* @param {String} str 
* @return {bool} 
*/

function checkPalindrome(str){
	
var tabStr = [];
	var reverseTab = [];
	for (var i = 0; i < str.length; i++){
		if(str[i] !== ' ' && str[i] !== " " && str[i] !== '.' && 
		  str[i] !== ',' && str[i] !== '!'){
			tabStr.push(str[i].toLowerCase());
		}
	}
	console.log(tabStr);
	console.log(reverseTab);
	for (var i = tabStr.length - 1; i >= 0; i--){
		if(tabStr[i] !== ' ' && tabStr[i] !== " " && tabStr[i] !== '.'
		  && tabStr[i] !== ',' && tabStr[i] !== '!'){
			reverseTab.push(tabStr[i]);
		}  
	}
	var confirm = 0;
	for (var i = 0; i < tabStr.length; i++){
		 
		if (tabStr[i] === reverseTab[i]){
			confirm ++;
			if (confirm === tabStr.length){
				return true;
			}
		}
		
	}
	console.log(reverseTab);
	return false;
}

var palindrome = checkPalindrome("Lieur à Rueil.");
console.log(palindrome);