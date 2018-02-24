console.log('main.js linked!');

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



// Make an array that holds the win states
var winStates = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
// Make variables to store each player's choices
var choicesX = [];
var choicesO = [];
// Make a variable to count number of matches in a winning array
var counter = 0;
// Make a variable that counts the amount of times the mouse has been clicked
var round = 0;



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
        // If the numbers in the winning arrays match a number from the array of the player's choices, add to the counter
        if (winStates[i][k] === arr[j]) {
          counter++;
        }
        // If three in a row, player wins
        if (counter === 3) {
          alert ('WIN!');
        }
      }
    }
  }
}



var boxClick = function (evt) {
  // // console.log to see which box is clicked
  // // console.log('Clicked ' + evt.target.id);
  // Turn box name into a number in order to be able to compare to winning arrays
  var index = evt.target.id.charAt(3);
  // If the round is less than 9, then keep checking for wins
  if (round < 9) {
    // Differentiate between the 2 players (odd = X, even = O), and push into respective arrays
    if (round % 2 !== 0) {
      // Push into choicesX
      choicesX.push(Number(index));
      // // console.log to see the choicesX array as it's being made
      // // console.log('choicesX: ' + choicesX);
      // Call checkForWins on choicesX
      checkForWins(choicesX);
      // Add an X
      $('#box' + index).text('X');
    } else {
      // Push into choicesO
      choicesO.push(Number(index));
      // // console.log to see the choicesO array as it's being made
      // // console.log('choicesO: ' + choicesO);
      // Call checkForWins on choicesO
      checkForWins(choicesO);
      // Add an O
      $('#box' + index).text('O');
    }
  } else {
    // Otherwise, players draw when 9 rounds have passed
    alert ('DRAW!')
  }
  // Turn off the event listener once a box has been clicked so it can't be clicked again
  $(evt.target).off();
  // Add to round count with every box click
  round ++;
  console.log(round);
}



// Make a for loop to make 9 divs and add event listeners
for (var i = 1; i <= 9; i++) {
  // Create the divs with an id
  var $div = $('body').append('<div class="boxes" id="box' + i + '"></div>');
  // Style each of the divs
  $('#box' + i).css({
    'border': '5px solid black',
    'width': '150px',
    'height': '150px',
    'display': 'inline-block'
  });
  // Add event listeners to the divs for when each box is clicked
  $('#box' + i).on('click', boxClick);
}


// Add box divs into the container div
var $container = $('.container').css({'width': '500px', 'margin': '0, auto'});
var $boxes = $('.boxes');
$container.append($boxes);
