var squarePromt=prompt("How Many Squares Per Row?","6");
var num1 = parseInt(squarePromt);
if (isNaN(num1) || (num1) > 12) {
	num1 = "6";
}

var numOfRows = num1;
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
for(var i=0; i<elements.length; i++) {
    var elem = elements[i];
    elem.id = "block" + [i];
}
