

var numOfRows = 10;
var numOfColumns = numOfRows;

document.getElementById('board-wrapper').style.width = ( numOfRows * 129)+'px';

var arrayDiv = new Array();

for (var j = 0; j < numOfColumns; j++) {
  for (var i = 0; i < numOfRows; i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].id = 'block' + i;
    arrayDiv[i].className = 'block';

    document.getElementById('board-wrapper').appendChild(arrayDiv[i]);
  }
  document.getElementById('board-wrapper').appendChild(arrayDiv[j]);
}


