'use strict';

/**Ex1
 * gridGenerator
 * @param {number} xAsis
 * @param {number} yAsis
 * @return 
 */
/*

}*/

var Grid = function Grid(xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
}

Grid.prototype.run = function() {
  this.gridGenerator(this.xAxis, this.yAxis);
  var tdLength = document.querySelectorAll('td');
  setInterval(function(){ 
    for (var i = 0; i<tdLength.length; i++){
      this.randColor(i);
    }   
  }.bind(this), Math.floor(Math.random() * 1 + 1) * 1000);
}

Grid.prototype.gridGenerator = function gridGenerator(xLength,yLength){
  var grid = document.createElement('table');

  document.body.appendChild(grid);

  for(var i = 0; i<xLength; i++) {
    var head = document.createElement('tr');

    for(var j = 0; j<yLength; j++){
      var td = document.createElement('td');
      
      td.textContent = '0';
      var color = ['blue', 'green'];
      var rand = Math.floor(Math.random() * Math.floor(color.length));
      td.style.cssText = 'background-color:' + color[rand];
      document.querySelector('table').appendChild(td);
    }

    document.querySelector('table').appendChild(head);
  }

  return this;
}
Grid.prototype.randColor = function randColor(cellNum){

  var color = ['blue', 'green'];
  var rand = Math.floor(Math.random() * Math.floor(color.length));
  document.querySelectorAll('td')[cellNum].style.backgroundColor = color[rand];
  return this;

}

var myGrid = new Grid(10, 10);
myGrid.run();
//interval();