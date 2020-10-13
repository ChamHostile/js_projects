'use strict';

/**Ex4
 * renderWorldMap
 * @return 
 */

var req = new XMLHttpRequest();
req.open("GET", "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg");
req.send();

function renderWorldMap(){

	var obj = document.createElement('object', true);
  obj.setAttribute('type', 'image/svg+xml');
  obj.setAttribute('data', 'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
  obj.setAttribute('width', 600);     // image size in pixels
  obj.setAttribute('height', 500);    // set as required
  obj.addEventListener('load', function() { ; }, false);
  document.body.appendChild(obj);
  	}


renderWorldMap();