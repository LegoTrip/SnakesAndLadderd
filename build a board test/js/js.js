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

var arrayBoardBlocks = new Array();
var blockCreation = '';

//CREATE BLOCK 
function createBlock() {  
  arrayBoardBlocks[blockCreation] = document.createElement('div');
  arrayBoardBlocks[blockCreation].className = 'block';
  document.getElementById('board-wrapper').appendChild(arrayBoardBlocks[blockCreation]);
}

//CREATE ROW
function createRow() {  
  // for (var blockCreation = 0; blockCreation < numOfRows; blockCreation++) {
  //   createBlock();
  //   console.log(blockCreation);
  // }  
  var rowArray  = [];
  for (var rowCreation = 0; rowCreation < numOfRows; rowCreation++) {
    rowArray.push('<div id="block' + rowCreation + '" class="block"></div>');
  }  
  var rowShove = rowArray.join();
  document.getElementById("board-wrapper").innerHTML = '<div class="row">' + rowShove + '</div>';
}






//CREATE COLUMNS
function createColumn() {  
  for (var columnCreation = 0; columnCreation < numOfColumns; columnCreation++) {
    createRow();
  }
}













//CREATE BOARD
function createBoard() {
  createColumn();
}
createBoard();

//GIVE EACH BLOCK IT'S OWN ID
// var elements = document.getElementsByClassName("block");
// var num = totalNumOfBlocks;
// for (var blockNumber = 0, n = true?num-1:0, d = true?-1:1; blockNumber < num; blockNumber++, n+=d) {
//   var elem = elements[blockNumber];
//   elem.id = "block" + [n];
//   var generateHere = document.getElementById(elem.id);
//   generateHere.innerHTML = '<p>' + [n] + '</p>';
// }






var numOfTokens = 1;

//CREATE TOKENS
var arrayTokens = new Array();
  for (var i = 0; i < numOfTokens; i++) {
  arrayTokens[i] = document.createElement('div');
  arrayTokens[i].className = 'token';
  document.getElementById('board-wrapper').appendChild(arrayTokens[i]);
}

var initialPosition = (numOfRows*numOfRows-numOfRows);

