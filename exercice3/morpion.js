'use strict';

/**Ex3
 * MyMorpionXO
 * @param {number} sum
 * @param {number} nbr
 * @return 
 */

var MyMorpionXO = function MyMorpionXO(name){
	this.name = name;
};

MyMorpionXO.prototype.run = function() {
	this.grid();
}

MyMorpionXO.prototype.grid = function grid(){
	var gridTab = document.createElement('table');
	gridTab.setAttribute('border', '1');
	gridTab.style.cssText = 'height: 200px; width:200px;';
  document.body.appendChild(gridTab);
	for(var i = 0; i<3; i++) {
    var head = document.createElement('tr');

    for(var j = 0; j<3; j++){
      var td = document.createElement('td');
      td.textContent = ' ';
      document.querySelector('table').appendChild(td);
    }

    document.querySelector('table').appendChild(head);
  }
}

var morpion = new MyMorpionXO('hamza');
morpion.run();