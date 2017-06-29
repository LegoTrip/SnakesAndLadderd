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
document.getElementById('board-wrapper').style.width = ( numOfRows * 129)+'px';

//CODE FOR BLOCK CREATION
var blockCreation = '<div class="block"></div>';

//GLOBAL EMPTY ARRAYS
var rowArray  = [];
var columnArray  = [];

//CREATE BLOCK 
function createBlock() {  
  rowArray.push(blockCreation);
}

//CREATE ROW
function createRow() {   
  for (var rowCreation = 0; rowCreation < numOfRows; rowCreation++) {
    createBlock();
  }  
  var rowShove = rowArray.join("");

  
  for (var columnCreation = 0; columnCreation < numOfColumns; columnCreation++) {
    columnArray.push('<div class="row" id="row' + columnCreation + '">' + rowShove + '</div>');
  }
  var columnShove = columnArray.join("");

  document.getElementById("board-wrapper").innerHTML = columnShove;

  blockIDing();
}

//CREATE COLUMNS
function createColumn() {  
  createRow();
}

//CREATE BOARD
function createBoard() {
  createColumn();
}
createBoard();

//GIVE EACH BLOCK IT'S OWN ID
function blockIDing() {   
  var elements = document.getElementsByClassName("block");
  var num = totalNumOfBlocks;
  for (var blockNumber = 0, n = true?num-1:0, d = true?-1:1; blockNumber < num; blockNumber++, n+=d) {
    var elem = elements[blockNumber];
    elem.id = "block" + [n];
    var generateHere = document.getElementById(elem.id);
    generateHere.innerHTML = '<p>' + [n] + '</p>';    
  }
  secondRowClass();
}

// ADD A CLASS TO EVERY SECOND ROW TO REVERSE ORDER
function secondRowClass() {   
  numOfRows2 = (numOfRows) - 1;
  for(var i = numOfRows2; i > -1; i--) {    
    var everysecondrow = i % 2 === 0;
    if (everysecondrow) {
      var leftrow = "row" + i;
      var leftrowgrab = document.getElementById(leftrow);
      leftrowgrab.className = "row leftie";
    }
  }
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

