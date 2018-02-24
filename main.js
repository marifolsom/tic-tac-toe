// Tic-Tac-Toe game:
  // 9 boxes/turns in a game -- assign a number to each of the boxes
  // Players take turns placing a marker in a box
  // If three boxes in a row, player wins
  // If boxes are filled, players draw
// How to decide if an X or O will appear?
  // Make a variable that counts the amount of times the mouse has been clicked (clickTotal)
  // If the clickTotal is even, then place an X
  // Else, if the clickTotal is odd, then place an O
// How to check if board is full?
  // If clickTotal is 9 (the number of boxes/turns), then call draw


console.log('Linked!');


// Make an array that holds the win states
var winStates = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

var choicesX = [2, 5, 7, 4];
var choicesO = [1, 3, 6, 8, 9];

// Make a variable to count number of matches in a winning array
var counter = 0;
// Make a variable that counts the amount of times the mouse has been clicked
var clickTotal = 0;


var checkForWins = function (arr) {
  // Check through the array of winning arrays
  for (var i = 0; i < winStates.length; i++) {
    // Reset the counter
    counter = 0;
    // Goes through the choices of the player (choicesO or choicesX)
    for (var j = 0; j < arr.length; j++) {
      // Goes through the winStates at the given index
      for (var k = 0; k < winStates[i].length; k++) {
        // console.log to see what every loop is doing
        // console.log(winStates[i], arr[j], winStates[i][k]);
        if (winStates[i][k] === arr[j]) {
          counter++;
        }
        if (counter === 3) {
          console.log('WIN!');
        }
      }
    }
  }
}
checkForWins(choicesX);
