'use strict';

/**Ex5
 * createForm
 *  
 */

 
function createForm(){
 	var myForm = document.createElement('form');
 	myForm.setAttribute('action', 'index.html');
 	document.body.appendChild(myForm);

 	var inputName = document.createElement('input');
 	inputName.setAttribute('name', 'formName');
 	inputName.setAttribute('pattern', "[A-Za-z ]{1,32}");
 	inputName.setAttribute('type','text');

 	var inputFirstName = document.createElement('input');
 	inputFirstName.setAttribute('name', 'formFirstName');
 	inputFirstName.setAttribute('pattern', "[A-Za-z ]{1,32}");
 	inputFirstName.setAttribute('type', 'text');

 	var inputMail = document.createElement('input');
 	inputMail.setAttribute('name', 'formMail');
 	inputMail.setAttribute('type', 'mail');
 	inputMail.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');

 	var inputPwd = document.createElement('input');
 	inputPwd.setAttribute('name', 'pwd');
 	inputPwd.setAttribute('type', 'password');
 	inputPwd.setAttribute('pattern', "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$");
 
 	var inputSubmit = document.createElement('input');
 	inputSubmit.setAttribute('type', 'submit'); 
 	myForm.appendChild(inputName);
 	myForm.appendChild(inputFirstName);
 	myForm.appendChild(inputMail);
 	myForm.appendChild(inputPwd);
 	myForm.appendChild(inputSubmit);

 }

 createForm();