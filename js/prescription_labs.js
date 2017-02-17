// SET UP YOUR PLAYER DETAILS
var player1 = new Object({
  icon: 'pig',
  playerMovementTotal: 1
});

var player2 = new Object({
  icon: 'koala',
  playerMovementTotal: 1
});

// DISABLE PLAYER 2'S DICE INITIALLY
document.getElementById('player2dicebtn').disabled = true;

// STUFF HAPPENS WHEN YOU ROLL THE DICE
function DiceRollPlayer(num){

  // SET REUSABLE VARIABLES
  var playerxtoken = document.getElementById('player' + num + 'token');
  var player = 'player' + num;

  // RANDOM DICE NUMBER AND ADD TO OUTPUT
  var dice = Math.floor(1 + Math.random() * 6);
  document.getElementById(player + 'diceoutput').innerHTML = dice;

  // ADD DICE ROLL NUMBER TO MOVEMENT
  this[player].playerMovementTotal = Number(this[player].playerMovementTotal) + Number(dice);

  // SET THE OUTPUT DIV TO DISPLAY THE ADDITION OF ALL PLAYER MOVEMENT 
  function moveOutput(){
    document.getElementById(player + 'movementoutput').innerHTML = this[player].playerMovementTotal;
    fuckingMove();
  }

  // ADD MOVEMENT TOTAL AS A CLASS TO PLAYER
  function fuckingMove(){
    playerxtoken.className = "playertoken";
    var playerAddClass = playerxtoken;
    playerAddClass.classList.add('moveto' + this[player].playerMovementTotal);
  }

  // LADDERS
  var ladders = {
    3: 19,
    5: 3,
    11: 15,
    20: 9
  };

  if(ladders[this[player].playerMovementTotal]) {
    setTimeout(function(){ 
      this[player].playerMovementTotal = Number(this[player].playerMovementTotal) + ladders[this[player].playerMovementTotal]; 
      moveOutput();
      moveUp();
    }, 500);
  }

  // SNAKES  
  var snakes = {
    17: -13,
    19: -12,
    21: -12,
    27: -26
  };

  if(snakes[this[player].playerMovementTotal]) {
    setTimeout(function(){ 
      this[player].playerMovementTotal = Number(this[player].playerMovementTotal) + snakes[this[player].playerMovementTotal]; 
      moveOutput();
      moveUp();
    }, 500);
  }  

   // MOVE TOKEN UP TO ROW IT BELONGS ON
  function moveUp(){
    if (this[player].playerMovementTotal > 6 && this[player].playerMovementTotal < 13) {
      playerxtoken.style.bottom = "130px";
    } else if (this[player].playerMovementTotal > 12 && this[player].playerMovementTotal < 19) {
      playerxtoken.style.bottom = "260px";
    } else if (this[player].playerMovementTotal > 18 && this[player].playerMovementTotal < 25) {
      playerxtoken.style.bottom = "390px";
    } else if (this[player].playerMovementTotal > 24 && this[player].playerMovementTotal < 31) {
      playerxtoken.style.bottom = "520px";
    } else if (this[player].playerMovementTotal > 29) {
      alert ("Hell yeah, the fucking " + this[player].icon + " wins!");  
      document.getElementById('player1dicebtn').disabled = true;
      document.getElementById('player2dicebtn').disabled = true;      
    } else {
      playerxtoken.style.bottom = "0px";
    }
  }

  moveUp();
  moveOutput();

  document.getElementById(player + 'dicebtn').disabled = true;

}