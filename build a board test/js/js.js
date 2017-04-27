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

//WRAP ROWS IN DIVS
var rowdivs = document.getElementsByClassName("block");
for(var i = 0; i < rowdivs.length; i+=numOfRows) {
//    new_html = "<div id='slidesInner'>" + i + "</div>";
  
  // var wrapvar = 'block' + i;
  // var wrapid = document.getElementById("block0");
  // var content = document.createTextNode("<YOUR_CONTENT>");
  // wrapid.insertBefore(content);
  // alert(wrap1);




  var j = i + numOfRows - 1;
  var my_elem = document.getElementById('block' + j);
  var wrapp = "rowrapper" + j;

  var span = document.createElement("div");
  //span.innerHTML = '*';
  span.className = wrapp;

  my_elem.parentNode.insertBefore(span, my_elem);





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

