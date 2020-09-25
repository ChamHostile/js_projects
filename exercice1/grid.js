'use strict';

/**Ex1
 * gridGenerator
 * @param {number} xAsis
 * @param {number} yAsis
 * @return 
 */
/*
var myInterval; 
function interval(){
    myInterval = setInterval(function(){ gridGenerator(10,10)}, Math.floor(Math.random() * 1 ) +1 );
}*/

var Grid = function Grid(xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
}

Grid.prototype.run = function() {
  this.gridGenerator(this.xAxis, this.yAxis);
}

Grid.prototype.gridGenerator = function gridGenerator(xLength,yLength){
  var grid = document.createElement('table');

  document.body.appendChild(grid);

  for(var i = 0; i<xLength; i++) {
    var head = document.createElement('tr');

    for(var j = 0; j<yLength; j++){
      var td = document.createElement('td');
      
      td.textContent = '0';
      document.querySelector('table').appendChild(td);
    }

    document.querySelector('table').appendChild(head);
  }

  return this;
}

var myGrid = new Grid(10, 10);
myGrid.run();
//interval();