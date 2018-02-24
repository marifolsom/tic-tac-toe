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



console.log('main.js linked!');



// Make an array that holds the win states
var winStates = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

// Make variables for each player's choices
var choicesX = [];
var choicesO = [];
// // var choicesX = [2, 5, 7, 4];
// // var choicesO = [1, 3, 6, 8, 9];

// Make a variable to count number of matches in a winning array
var counter = 0;

var checkForWins = function (arr) {
  // Check through the array of winning arrays
  for (var i = 0; i < winStates.length; i++) {
    // Reset the counter
    counter = 0;
    // Goes through the choices of the player (choicesO or choicesX)
    for (var j = 0; j < arr.length; j++) {
      // Goes through the winStates at the given index
      for (var k = 0; k < winStates[i].length; k++) {
        // // console.log to see what every loop is doing
        // // console.log(winStates[i], arr[j], winStates[i][k]);
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



// Make a variable that counts the amount of times the mouse has been clicked
var round = 0;

var boxClick = function (evt) {
  // // console.log to see what box is clicked
  // // console.log('Clicked ' + evt.target.id);
  // Add to round count with every click
  round ++;
  // Turn box name into a number in order to be able to compare to winning arrays
  var index = evt.target.id.charAt(3);
  // Differentiate between the 2 players (odd = X, even = O), and push into respective arrays
  if (round % 2 !== 0) {
    // Push into choicesX
    choicesX.push(index)
    console.log('choicesX: ' + choicesX);
    // Call checkForWins on choicesX
    checkForWins(choicesX);
  } else {
    // Push into choicesO
    choicesO.push(index)
    console.log('choicesO: ' + choicesO);
    // Call checkForWins on choicesO
    checkForWins(choicesO);
  }
  // Turn off the event listener once a box has been clicked
  $(evt.target).off();
}

// // Make variables for each box
// var $box1 = $('#box-1');
// var $box2 = $('#box-2');
// var $box3 = $('#box-3');
// var $box4 = $('#box-4');
// var $box5 = $('#box-5');
// var $box6 = $('#box-6');
// var $box7 = $('#box-7');
// var $box8 = $('#box-8');
// var $box9 = $('#box-9');

// Make a for loop to make 9 divs
for (var i = 1; i <= 9; i++) {
  // Create the divs with an id
  var $div = $('body').append('<div id="box' + i + '">' + i + '</div>');
  // Style each of the divs
  $('#box' + i).css({'border': '5px solid black', 'width': '150px', 'height': '150px'});
  // Add event listeners to the divs for when each box is clicked
  $('#box' + i).on('click', boxClick);
}
