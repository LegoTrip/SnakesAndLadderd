//USER TO CHOOSE AMOUNT OF SQUARES
var squarePromt=prompt("How Many Squares Per Row?","6");
var num1 = parseInt(squarePromt);
if (isNaN(num1) || (num1) > 12) {
	num1 = "6";
}

//SET THE BOARD BLOCK AMOUNT AND SIZE THE FUCKER
var numOfRows = num1;
var numOfColumns = numOfRows;
var totalNumOfBlocks = (numOfRows * numOfColumns)
alert(totalNumOfBlocks);
document.getElementById('board-wrapper').style.width = ( numOfRows * 129)+'px';

//CREATE BOARD
var arrayBoardBlocks = new Array();
for (var columnBlocks = 0; columnBlocks < totalNumOfBlocks; columnBlocks++) {
  arrayBoardBlocks[columnBlocks] = document.createElement('div');
  arrayBoardBlocks[columnBlocks].className = 'block';
  document.getElementById('board-wrapper').appendChild(arrayBoardBlocks[columnBlocks]);
}

//GIVE EACH BLOCK IT'S OWN CLASS
var elements = document.getElementsByClassName("block");
var num = totalNumOfBlocks;
for (var blockNumber = 0, n = true?num-1:0, d = true?-1:1; blockNumber < num; blockNumber++, n+=d) {
  var elem = elements[blockNumber];
  elem.id = "block" + [n];
}



var numOfTokens = 1;

//CREATE TOKENS
var arrayTokens = new Array();
  for (var i = 0; i < numOfTokens; i++) {
  arrayTokens[i] = document.createElement('div');
  arrayTokens[i].className = 'token';
  document.getElementById('board-wrapper').appendChild(arrayTokens[i]);
}

var initialPosition = (numOfRows*numOfRows-numOfRows);
alert(initialPosition);
