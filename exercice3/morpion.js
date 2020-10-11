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
      var y = 'y' + i;
      var x = 'x' + j;
      td.className = y + ' '+ x 
      document.querySelector('table').appendChild(td);
    }

    document.querySelector('table').appendChild(head);
  }
}

MyMorpionXO.prototype.play = function play(){
	this.grid();
	var turn = 0;
	var turnDisplay = document.createElement('p');
	turnDisplay.textContent = "Place a O";
	document.body.appendChild(turnDisplay);
	var cells = document.querySelectorAll('td');
	for (var i = 0; i<cells.length; i++){
		cells[i].addEventListener('click', function(){
			
			if (turn%2 == 0){
				console.log(cells[i]);
				this.innerHTML = "O";
				var result = this.check();
				turnDisplay.textContent = 'Place a X';
				if (result === true){
					turnDisplay.textContent = "Vous avez gagné " 
				}
			}else{
				this.innerHTML = "X";
				this.check();
				turnDisplay.textContent = 'Place a O';
			}
			turn += 1;
		}.bind(this));
	}
}

MyMorpionXO.prototype.check = function check(){ // on va chercher a verifier si il y a N symboles identiques alignés
	//ligne
	var win = false;
	var symbol = '';
	for (var i = 0; i < 3; i++){
		if (document.querySelectorAll('.x0')[i].textContent === document.querySelectorAll('.x1')[i].textContent && 
			document.querySelectorAll('.x1')[i].textContent === document.querySelectorAll('.x2')[i].textContent){
			win = true;
			return win;
		}
	}
	//colonne
	for (var i = 0; i < 3; i++){
		if (document.querySelectorAll('.y0')[i].textContent === document.querySelectorAll('.y1')[i].textContent && 
			document.querySelectorAll('.y1')[i].textContent === document.querySelectorAll('.y2')[i].textContent){
			win = true;
			return win;
		}
	}
};


var morpion = new MyMorpionXO('hamza');
morpion.run();