//***********defining classes ***************
class player {
  constructor(
    name,
    propertyOn,
    money,
    goldBar,
    mapPosition,
    lastPosition,
    img,
    startTurn,
    finalTurn
  ) {
    this.name = name;
    this.propertyOn = propertyOn;
    this.money = money;
    this.goldBar = goldBar;
    this.mapPosition = mapPosition;
    this.lastPosition = lastPosition;
    this.img = img;
    this.startTurn = startTurn;
    this.finalTurn = finalTurn;
  }
}
//****************assigning classes *************

//fmi count as a player
const fmi = new player("fmi", [], 120000, 0, null, null, null, null, null);
//players
const player1 = new player(
  "player1",
  [],
  0,
  3,
  40,
  40,
  document.querySelector(".player-1"),
  true,
  false
);

const player2 = new player(
  "player2",
  [],
  0,
  3,
  40,
  40,
  document.querySelector(".player-2"),
  false,
  false
);

// ***********defining html element**********
// buttom tirar dado
const BtnRollDice = document.querySelector(".btnRollDice");
// dices img
const diceImg = document.querySelector(".diceImg");
const diceImg2 = document.querySelector(".diceImg2");

//*******game logic variables*********
// knowing what player is active by number
let activePlayer = 1; // i need to make a function so the 1 chnage depending of player starTurn and finalTurns

// list all player fmi is already on
const players = [fmi];
// number of player is going to be define lether by the user
let numberOfPlayers = 2;

if (numberOfPlayers === 2) {
  players.push(player1);
  players.push(player2);
}

//********** functions ***********

// when moving
const movePlayer = function (player) {
  // dices
  let dice = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  // chnage the dice img by dice value
  diceImg.src = `../tablero/dice-${dice}.png`;
  diceImg2.src = `../tablero/dice-${dice2}.png`;

  //chnage player pos
  player.lastPosition = player.mapPosition;
  player.mapPosition += dice + dice2;
  // when player make a complite board it began with 40 - pos
  if (player.mapPosition > 40) {
    player.mapPosition -= 40;
  }
  // adding and removing class so player move in the board
  player.img.classList.add(`--${player.mapPosition}`);
  player.img.classList.remove(`--${player.lastPosition}`);
};

// change strat turn to final turn
const switchStarTurn = function () {
  if (players[activePlayer].startTurn) {
    players[activePlayer].startTurn = false;
    players[activePlayer].finalTurn = true;
  }
};
// chnage final turn to next player star turn and change active player
const switchActivePlayer = function () {
  if (players[activePlayer].finalTurn) {
    //change final turn of current player to false
    players[activePlayer].finalTurn = false;
    // var that take the next player so can put as argument to reflect next player
    let nextPlayer = activePlayer + 1 > numberOfPlayers ? 1 : activePlayer + 1;
    players[nextPlayer].startTurn = true;
    // change active player by next one
    activePlayer++;
    // if active player exceeds numbers of player star for 1 again
    if (activePlayer === numberOfPlayers + 1) {
      activePlayer = 1;
    }
  }
};

//**********functions to put in a event listener*************
// roll dice
const rollDice = function () {
  for (let i = 0; i < numberOfPlayers; i++) {
    if (players[activePlayer]) {
      // all options that happen in the star of the turn when roll a dice
      if (players[activePlayer].startTurn) {
        movePlayer(players[activePlayer]);
        switchStarTurn();
        // all options that happen when is final turn
      } else if (players[activePlayer].finalTurn) {
        switchActivePlayer();
      }
    }
  }
};

// ************buttoms**********
BtnRollDice.addEventListener("click", rollDice);

//this function is to get position by clicking in the document

// document.getElementById("board").onclick = function clickEvent(e) {
//   // e = Mouse click event.
//   var rect = e.target.getBoundingClientRect();
//   var x = e.clientX - rect.left; //x position within the element.
//   var y = e.clientY - rect.top; //y position within the element.
//   console.log("Left : " + x + " ; Top : " + y);
// };
