

var numOfRows = 2;
var numOfColumns = numOfRows;

document.getElementById('board-wrapper').style.width = ( numOfRows * 129)+'px';

var arrayDiv = new Array();

for (var j = 0; j < numOfColumns; j++) {
  for (var i = 0; i < numOfRows; i++) {
    arrayDiv[i] = document.createElement('div');
    //arrayDiv[i].id = 'block' + i;
    arrayDiv[i].className = 'block';

    document.getElementById('board-wrapper').appendChild(arrayDiv[i]);
  }
  document.getElementById('board-wrapper').appendChild(arrayDiv[j]);
}

var elements = document.getElementsByClassName("block");
var id = '';
for(var i=0; i<elements.length; i++) {
	//alert("here");
    document.querySelector('div.block').id = 'block6'; //only adding to first??
}
document.write(id);