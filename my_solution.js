 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:
// Overall mission: Save the damsel in distress.
// Goals: Sneak past the ruffians. Save the damsel. Make your escape.
// Characters: Player, Damsel, Ruffians(x5).
// Objects: Player(position, caught?, have damsel? escaped?), Damsel, Ruffians(x5), Exit.
// Functions: moveUp, moveDown, moveRight, moveLeft

// Pseudocode
// Create a Player object that can move in 4 directions.
// Give the Player the default value of caught: false, haveDamsel: false, and escaped: false.
// Create 5 Ruffian objects and give them random positions.
// Allow Ruffians to move to random positions every time Player moves.
// If the Player is in the same position as a Ruffian, change caught to true. Game Over!
// Create a Damsel object and place her in a random position.
// If the Player is in the same position as the Damsel, change haveDamsel to true.
// Create an Exit object and place it in a random position.
// If the Player is in the same position as Exit AND haveDamsel is true, change escaped to true. You win!

// Initial Code
function rescueDamsel() {

var prompt = require('prompt');

var damsel = {
  x: Math.floor((Math.random() * 10) + 1) * 10,
  y: Math.floor((Math.random() * 10) + 1) * 10
};

console.log("You must save the Damsel! She can be found at position " + damsel.x + "," + damsel.y);

var exit = {
  x: Math.floor((Math.random() * 10) + 1) * 10,
  y: Math.floor((Math.random() * 10) + 1) * 10
};

var ruffian1 = {
  x: Math.floor((Math.random() * 10) + 1) * 10,
  y: Math.floor((Math.random() * 10) + 1) * 10
};

var ruffian2 = {
  x: Math.floor((Math.random() * 10) + 1) * 10,
  y: Math.floor((Math.random() * 10) + 1) * 10
};

var ruffian3 = {
  x: Math.floor((Math.random() * 10) + 1) * 10,
  y: Math.floor((Math.random() * 10) + 1) * 10
};

var ruffian4 = {
  x: Math.floor((Math.random() * 10) + 1) * 10,
  y: Math.floor((Math.random() * 10) + 1) * 10
};

var ruffian5 = {
  x: Math.floor((Math.random() * 10) + 1) * 10,
  y: Math.floor((Math.random() * 10) + 1) * 10
};

var player = {
  x: 0,
  y: 0,
  caught: false,
  haveDamsel: false,
  escaped: false,

  move: function(direction) {
    if(direction === 'right'){
      player.x +=10;
    }
    else if(direction === 'left'){
      player.x -=10;
    }
    else if(direction === 'up'){
      player.y += 10;
    }
    else if(direction === 'down'){
      player.y -=10;
    }

    ruffian1.x = Math.floor((Math.random() * 10) + 1) * 10;
    ruffian1.y = Math.floor((Math.random() * 10) + 1) * 10;
    console.log("Ruffian1 has moved to " + ruffian1.x + "," + ruffian1.y);

    ruffian2.x = Math.floor((Math.random() * 10) + 1) * 10;
    ruffian2.y = Math.floor((Math.random() * 10) + 1) * 10;
    console.log("Ruffian2 has moved to " + ruffian2.x + "," + ruffian2.y);

    ruffian3.x = Math.floor((Math.random() * 10) + 1) * 10;
    ruffian3.y = Math.floor((Math.random() * 10) + 1) * 10;
    console.log("Ruffian3 has moved to " + ruffian3.x + "," + ruffian3.y);

    ruffian4.x = Math.floor((Math.random() * 10) + 1) * 10;
    ruffian4.y = Math.floor((Math.random() * 10) + 1) * 10;
    console.log("Ruffian4 has moved to " + ruffian4.x + "," + ruffian4.y);

    ruffian5.x = Math.floor((Math.random() * 10) + 1) * 10;
    ruffian5.y = Math.floor((Math.random() * 10) + 1) * 10;
    console.log("Ruffian5 has moved to " + ruffian5.x + "," + ruffian5.y);

    console.log("You have moved " + direction + " to " + player.x + "," + player.y);

    if(player.x === ruffian1.x && player.y === ruffian1.y){
      console.log("Ruffian1 spotted you! Game Over.");
      player.caught = true;
    }
    else if(player.x === ruffian2.x && player.y === ruffian2.y){
      console.log("Ruffian2 spotted you! Game Over.");
      player.caught = true;
    }
    else if(player.x === ruffian3.x && player.y === ruffian3.y){
      console.log("Ruffian3 spotted you! Game Over.");
      player.caught = true;
    }
    else if(player.x === ruffian4.x && player.y === ruffian4.y){
      console.log("Ruffian4 spotted you! Game Over.");
      player.caught = true;
    }
    else if(player.x === ruffian5.x && player.y === ruffian5.y){
      console.log("Ruffian5 spotted you! Game Over.");
      player.caught = true;
    }
    else if (player.x === damsel.x && player.y === damsel.y){
      console.log("You've found the Damsel! Now you must escape! The exit can be found at position " + exit.x + "," + exit.y);
      player.haveDamsel = true;
    }
    else if (player.x === exit.x && player.y === exit.y && player.haveDamsel === true){
      console.log("You've escaped with the Damsel! You win!");
      player.escaped = true;
    }
  }
};

while (player.escape === false) {
  while (player.haveDamsel === false) {
    var whichWay = prompt("What direction do you want to go?");
    player.move(whichWay);
  }
}
}



// Refactored Code






// Reflection
//
//
//
//
//
//
//
//