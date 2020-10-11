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
	this.play();
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
      td.textContent = ' d';
      document.querySelector('table').appendChild(td);
    }

    document.querySelector('table').appendChild(head);
  }
}

MyMorpionXO.prototype.play = function play(){
	this.grid();
	var turn = 0;
	var turnDisplay = document.createElement('p');
	document.body.appendChild(turnDisplay);
	if (turn%2 == 0){
		turnDisplay.textContent = 'Place a O';
	}else{
		turnDisplay.textContent = 'Place a X';
	}
	var cells = document.querySelectorAll('td');
	for (var i = 0; i<cells.length; i++){
		cells[i].addEventListener('click', function(){
			console.log(cells[i]);
			if (turn%2 == 0){
				console.log(cells[i]);
				this.innerHTML = "O";
			}else{
				this.innerHTML = "X";
			}
			turn += 1;
		});
	}
}
var morpion = new MyMorpionXO('hamza');
morpion.run();