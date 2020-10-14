'use strict';

/**Ex4
 * renderWorldMap
 * @return 
 */


/**Ex4
 * WorldMap
 *@constructor 
 */

var WorldMap = function WorldMap(){
  this.map;
  this.active = null; 
}

/**Ex4
 * run
 * 
 */
WorldMap.prototype.run = function(){

  this.renderWorldMap();
  this.svgHover();
  this.svgClick();

}

/**Ex4
 * renderWorldMap
 * 
 */
WorldMap.prototype.renderWorldMap = function renderWorldMap(){

  var req = new XMLHttpRequest();
  req.open("GET", "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg", false);
  req.send();
  var svg = req.responseXML.getElementsByTagName('svg')[0];
  document.body.prepend(svg);

}

/**Ex4
 * svgHover 
 */
WorldMap.prototype.svgHover = function svgHover(){
  this.map = document.querySelector('svg');
  var countries = this.map.querySelectorAll('path');

  for(var i = 0; i < countries.length; i++){
    countries[i].addEventListener('mouseover', function(e){
      if (e.target.id !== this.active){
        this.style.fill = "blue";
      };
    });

    countries[i].addEventListener('mouseout', function(e){
      if (e.target.id !== this.active){
        this.style.fill = "black";
      };
    });

  }
}

/**Ex4
 * svgClick
 *@return {object} this 
 */
WorldMap.prototype.svgClick = function svgClik(){

  this.map = document.querySelector('svg');
  var countries = this.map.querySelectorAll('path');
  for(var i = 0; i < countries.length; i++){

    countries[i].addEventListener('click', function(e){

      if (this.active !== this.id){
        e.target.style.fill = "red";
        this.active = e.target.id;

        return this;
      }

      this.active = null;
      countries[i].style.fill = 'black';
      return this;
    });

  }
}

/**Ex4
 * caption 
 */

WorldMap.prototype.caption = function caption(country){

  this.map = document.querySelector('svg');
  var caption = document.createElement('p');

  caption.textContent = country.id + '';

  this.map.appendChild(caption);

}



var myMap = new WorldMap();
myMap.run();