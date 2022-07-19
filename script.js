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

class property {
  constructor(
    landValueSouth,
    landValueNorth,
    upgradeSouth1,
    upgradeSouth2,
    upgradeSouth3,
    upgradeNorth1,
    upgradeNorth2,
    upgradeNorth3,
    mapPositionSouth,
    mapPositionNorth,
    numOfUpSouth,
    numOfUpNorth,
    nameImg,
    nameImgRes
  ) {
    this.nameImg = nameImg;
    this.landValueSouth = landValueSouth;
    this.landValueNorth = landValueNorth;
    this.upgradeNorth1 = upgradeNorth1;
    this.upgradeNorth2 = upgradeNorth2;
    this.upgradeNorth3 = upgradeNorth3;
    this.upgradeSouth1 = upgradeSouth1;
    this.upgradeSouth2 = upgradeSouth2;
    this.upgradeSouth3 = upgradeSouth3;
    this.mapPositionSouth = mapPositionSouth;
    this.mapPositionNorth = mapPositionNorth;
    this.numOfUpSouth = numOfUpSouth;
    this.numOfUpNorth = numOfUpNorth;
    this.nameImgRes = nameImgRes;
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

// property
const azucar = new property(
  100,
  200,
  150,
  200,
  300,
  300,
  400,
  600,
  1,
  21,
  1,
  1,
  "azucar.png",
  "azucar_res.png"
);
const banano = new property(
  150,
  300,
  250,
  300,
  450,
  500,
  600,
  900,
  2,
  22,
  1,
  1,
  "banano.png",
  "banano_res.png"
);
const cacao = new property(
  200,
  400,
  300,
  400,
  600,
  600,
  800,
  1200,
  3,
  23,
  1,
  1,
  "cacao.png",
  "cacao_res.png"
);
// const algodon = new property(250, 500, 350, 500, 750, 750, 1000, 1500, 5, 25, 0, 0, 'algodon.png')
// const tabaco = new property(300, 600, 450, 600, 900, 900, 1200, 1800, 6, 26, 0, 0, 'tabaco.png')
// const cafe = new property(350, 700, 500, 700, 1000, 1000, 1400, 2100, 7, 27, 0, 0, 'cafe.png')
// const pesca = new property(400, 800, 600, 800, 1200, 1200, 1600, 2400, 9, 29, 0, 0, 'pesca.png')
// const ganado = new property(500, 1000, 750, 1000, 1500, 1500, 2000, 3000, 11, 31, 0, 0, 'ganado.png')
// const cobre = new property(600, 1200, 900, 1200, 1800, 1800, 2400, 3600, 13, 33, 0, 0, 'cobre.png')
// const estano = new property(700, 1400, 1050, 1400, 2100, 2100, 2800, 4200, 14, 34, 0, 0, 'estano.png')
// const hierro = new property(800, 1600, 1200, 1600, 2400, 2400, 3200, 4800, 15, 35, 0, 0, 'hierro.png')
// const petroleo = new property(1200, 2400, 1800, 2400, 3600, 3600, 4800, 7200, 17, 37, 0, 0, 'petroleo.png')

// ***********defining html element**********
// buttoms
const BtnRollDice = document.querySelector(".btnRollDice");
const btnUpgradeIndustry = document.querySelector(".btnUpgradeIndustry");
const btnBuy = document.querySelector(".btnBuy");
const btnExit = document.querySelector(".btnExit");
const btnUseGold = document.querySelector(".btnUseGold");
const btnPay = document.querySelector(".btnPay");
const btnPiracy = document.querySelector(".btnPiracy");
const btnPiraceChain = document.querySelector(".btnPiraceChain");
// dices img
const diceImg = document.querySelector(".diceImg");
const diceImg2 = document.querySelector(".diceImg2");
// on show
const onShow = document.querySelector(".onshow");
// text that show who's turn
const showTextTurn = document.querySelector("#playerTurn");

// overlay
const overlay = document.querySelector(".overlay");

//*******game logic gloval variables*********

// knowing what player is active by number
let activePlayer = 1; // i need to make a function so the 1 chnage depending of player starTurn and finalTurns

// list all player fmi is already on
const players = [fmi];
// list all properties
const properties = [azucar, banano, cacao];
// adding all properties to fmi propertyOn to star the game fmi had all property
for (i of properties) {
  player1.propertyOn.push(i);
}
// number of player is going to be define lether by the user
let numberOfPlayers = 2;

if (numberOfPlayers === 2) {
  // this function is going to change so user can put how many player
  players.push(player1);
  players.push(player2);
}
// property on play // had to make this list to know what property is going to (buy,upgrade or (es= piratiar))
let propertyPlay = [];

// this variables are to know what is happening know (and buttom exit can know where to exit)
let buyingState;
let piracyState;
let chainState;

//********** functions ***********

// when moving
const movePlayer = function (player) {
  // dices
  let dice = 1; //Math.floor(Math.random() * 6) + 1;
  let dice2 = 0; // Math.floor(Math.random() * 6) + 1;
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
    BtnRollDice.classList.add("hidden");
    btnUpgradeIndustry.classList.add("hidden");
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
    showTextTurn.textContent = players[activePlayer].name;
    BtnRollDice.classList.remove("hidden");
    btnUpgradeIndustry.classList.remove("hidden");
  }
};
// paying and getting property
function paying(whoGet, value, times) {
  if (times !== 0) {
    players[activePlayer].money -= value * times;
    whoGet.money += value * times;
  }
}

function collecting(whoPay, value, times) {
  if (times !== 0) {
    whoPay.money -= value * times;
    players[activePlayer].money += value * times;
  }
}

function getProp(whoGive, porperty) {
  players[activePlayer].propertyOn.push(porperty);
  let removeIndex = whoGive.propertyOn.indexOf(porperty);
  whoGive.propertyOn.splice(removeIndex, 1);
}

// function giveProp(whoGet) {
//   whoGet.propertyOn.push(propertyPlay[0]);
//   let removeIndex = players[activePlayer].propertyOn.indexOf(propertyPlay[0]);
//   players[activePlayer].propertyOn.splice(removeIndex, 1);
// }

// rolling on property
const rollingOnProperty = function () {
  for (let i = 0; i < properties.length; i++)
    // when rolling on a property on South
    if (players[activePlayer].mapPosition === properties[i].mapPositionSouth) {
      let proPlay = properties[i];
      // if property on fmi
      if (fmi.propertyOn.indexOf(proPlay) !== -1) {
        propertyPlay.push(proPlay);
        btnBuy.classList.remove("hidden");
        btnExit.classList.remove("hidden");
        buyingState = true;
        // always when a property need action in another function it goes to propertyPlay
        propertyPlay.push(properties[i]);
      }
      // if property onw by actual player
      if (players[activePlayer].propertyOn.indexOf(proPlay) !== -1) {
        switchActivePlayer();
        break;
      }
      // if property own by another player
      if (
        players[activePlayer].propertyOn.indexOf(proPlay) === -1 &&
        fmi.propertyOn.indexOf(proPlay) === -1
      ) {
        btnPay.classList.remove("hidden");
        if (players[activePlayer].goldBar > 0) {
          btnUseGold.classList.remove("hidden");
        }
        propertyPlay.push(proPlay);
      }
    }
};

//**********functions to put in a event listener*************
// roll dice
const rollDice = function () {
  // all options that happen in the star of the turn when roll a dice
  if (players[activePlayer].startTurn) {
    movePlayer(players[activePlayer]);
    switchStarTurn();
    // all options that happen when is final turn
  }
  if (players[activePlayer].finalTurn) {
    rollingOnProperty();
  }
};

// buying
function exitBuying() {
  propertyPlay = [];
  btnBuy.classList.add("hidden");
  btnExit.classList.add("hidden");
  buyingState = false;
  switchActivePlayer();
}

const buying = function () {
  // paying and getting property
  paying(fmi, propertyPlay[0].landValueSouth, 1);
  getProp(fmi, propertyPlay[0]);
  // adding hidden class to buttoms and
  exitBuying();
};

// pay to another player with money and gold

const payToAnotherPlayer = function () {
  for (let e = 1; e < players.length; e++) {
    // making a variable to just to see what property is in play
    let proPlay = propertyPlay[0];
    // to make skip player active
    if (e === activePlayer) {
      continue;
    }
    // paying the owner player
    if (players[e].propertyOn.indexOf(proPlay) !== -1) {
      // check if your playing in south or north
      if (players[activePlayer].mapPosition === proPlay.mapPositionSouth) {
        // paying the actual property
        paying(players[e], proPlay.landValueSouth, proPlay.numOfUpSouth);
        enterPiracy();
        // check if player had the chain (property plus 1 and 2 there are other type of check if chain)
        for (let p = 0; p < properties.length; p++) {
          if (
            proPlay === properties[p] &&
            (p === 0 || p === 3 || p === 8) &&
            players[e].propertyOn.indexOf(properties[p + 1]) !== -1 &&
            players[e].propertyOn.indexOf(properties[p + 2]) !== -1
          ) {
            paying(
              players[e],
              properties[p + 1].landValueSouth,
              properties[p + 1].numOfUpSouth
            );
            paying(
              players[e],
              properties[p + 2].landValueSouth,
              properties[p + 2].numOfUpSouth
            );
            enterPiracyChain();
          }
          if (
            proPlay === properties[p] &&
            (p === 1 || p === 4 || p === 9) &&
            players[e].propertyOn.indexOf(properties[p + 1]) !== -1 &&
            players[e].propertyOn.indexOf(properties[p - 1]) !== -1
          ) {
            paying(
              players[e],
              properties[p + 1].landValueSouth,
              properties[p + 1].numOfUpSouth
            );
            paying(
              players[e],
              properties[p - 1].landValueSouth,
              properties[p - 1].numOfUpSouth
            );
            enterPiracyChain();
          }
          if (
            proPlay === properties[p] &&
            (p === 2 || p === 5 || p === 10) &&
            players[e].propertyOn.indexOf(properties[p - 1]) !== -1 &&
            players[e].propertyOn.indexOf(properties[p - 2]) !== -1
          ) {
            paying(
              players[e],
              properties[p - 1].landValueSouth,
              properties[p - 1].numOfUpSouth
            );
            paying(
              players[e],
              properties[p - 2].landValueSouth,
              properties[p - 2].numOfUpSouth
            );
            enterPiracyChain();
          }
          if (
            proPlay === properties[6] &&
            players[e].propertyOn.indexOf(properties[7]) !== -1
          ) {
            paying(
              players[e],
              properties[7].landValueSouth,
              properties[7].numOfUpSouth
            );

            enterPiracyChain();
          } else if (
            proPlay === properties[7] &&
            players[e].propertyOn.indexOf(properties[6]) !== -1
          ) {
            paying(
              players[e],
              properties[6].landValueSouth,
              properties[6].numOfUpSouth
            );

            enterPiracyChain();
          }
        }
      }
    }
  }
};
// pay to another player with gold bar
const goldToAnotherPlayer = function () {
  // making a variable to just to see what property is in play
  let proPlay = propertyPlay[0];
  for (let e = 1; e < players.length; e++) {
    // to make skip player active
    if (e === activePlayer) {
      continue;
    }
    // paying the owner player
    if (players[e].propertyOn.indexOf(propertyPlay[0]) !== -1) {
      players[e].goldBar += 1;
      players[activePlayer].goldBar -= 1;
      // adding class and removing class and enter in piracy state
      enterPiracy();
      // knowing if player had chain so can go into chain state
      // check if player had the chain (property plus 1 and 2 there are other type of check if chain)
      for (let p = 0; p < properties.length; p++) {
        if (
          proPlay === properties[p] &&
          (p === 0 || p === 3 || p === 8) &&
          players[e].propertyOn.indexOf(properties[p + 1]) !== -1 &&
          players[e].propertyOn.indexOf(properties[p + 2]) !== -1
        ) {
          enterPiracyChain();
        }
        if (
          proPlay === properties[p] &&
          (p === 1 || p === 4 || p === 9) &&
          players[e].propertyOn.indexOf(properties[p + 1]) !== -1 &&
          players[e].propertyOn.indexOf(properties[p - 1]) !== -1
        ) {
          enterPiracyChain();
        }
        if (
          proPlay === properties[p] &&
          (p === 2 || p === 5 || p === 10) &&
          players[e].propertyOn.indexOf(properties[p - 1]) !== -1 &&
          players[e].propertyOn.indexOf(properties[p - 2]) !== -1
        ) {
          enterPiracyChain();
        }
        if (
          proPlay === properties[6] &&
          players[e].propertyOn.indexOf(properties[7]) !== -1
        ) {
          enterPiracyChain();
        } else if (
          proPlay === properties[7] &&
          players[e].propertyOn.indexOf(properties[6]) !== -1
        ) {
          enterPiracyChain();
        }
      }
    }
  }
};
// pirated property

function exitPiracy() {
  propertyPlay = [];
  btnPiracy.classList.add("hidden");
  btnExit.classList.add("hidden");
  btnPiraceChain.classList.add("hidden");
  chainState = false;
  piracyState = false;
  switchActivePlayer();
}
function enterPiracy() {
  btnPay.classList.add("hidden");
  btnUseGold.classList.add("hidden");
  btnPiracy.classList.remove("hidden");
  btnExit.classList.remove("hidden");
  piracyState = true;
}
function enterPiracyChain() {
  btnPiraceChain.classList.remove("hidden");
  chainState = true;
}
const toalValuePlusUpgrade = function (proPlay) {
  // adding all possible value to the variable total
  let total = 0;
  if (proPlay.numOfUpSouth === 0) {
    total = proPlay.landValueSouth;
  }
  if (proPlay.numOfUpSouth === 1) {
    total =
      proPlay.landValueSouth +
      proPlay.upgradeSouth1 +
      (proPlay.numOfUpNorth === 1 ? proPlay.upgradeNorth1 : 0);
  }
  if (proPlay.numOfUpSouth === 2) {
    total =
      proPlay.landValueSouth +
      proPlay.upgradeSouth1 +
      proPlay.upgradeSouth2 +
      (proPlay.numOfUpNorth === 2
        ? proPlay.upgradeNorth2 + proPlay.upgradeNorth1
        : proPlay.upgradeNorth1);
  }
  if (proPlay.numOfUpSouth === 3) {
    total =
      proPlay.landValueSouth +
      proPlay.upgradeSouth1 +
      proPlay.upgradeSouth2 +
      proPlay.upgradeSouth3 +
      (proPlay.numOfUpNorth === 3
        ? proPlay.upgradeNorth3 + proPlay.upgradeNorth1 + proPlay.upgradeNorth2
        : proPlay.upgradeNorth2 + proPlay.upgradeNorth1);
  }
  return total;
};

// when press the buttoms
const piracying = function () {
  for (let e = 1; e < players.length; e++) {
    let proPlay = propertyPlay[0];
    // to make skip player active
    if (e === activePlayer) {
      continue;
    }
    if (players[e].propertyOn.indexOf(proPlay) !== -1) {
      // finish the piracy and change turn
      paying(fmi, chainState ? 4000 : 2000, 1);
      paying(players[e], toalValuePlusUpgrade(proPlay), 1);
      getProp(players[e], propertyPlay[0]);
      exitPiracy();
    }
  }
};

const piracyingChain = function () {
  let proPlay = propertyPlay[0];
  for (let e = 1; e < players.length; e++) {
    // to make skip player active
    if (e === activePlayer) {
      continue;
    }

    if (players[e].propertyOn.indexOf(proPlay) !== -1) {
      for (let p = 0; p < properties.length; p++) {
        if (
          proPlay === properties[p] &&
          (p === 0 || p === 3 || p === 8) &&
          players[e].propertyOn.indexOf(properties[p + 1]) !== -1 &&
          players[e].propertyOn.indexOf(properties[p + 2]) !== -1
        ) {
          paying(fmi, 2000, 1);
          paying(
            players[e],
            toalValuePlusUpgrade(proPlay) +
              toalValuePlusUpgrade(properties[p + 1]) +
              toalValuePlusUpgrade(properties[p + 2]),
            1
          );
          getProp(players[e], proPlay);
          getProp(players[e], properties[p + 1]);
          getProp(players[e], properties[p + 2]);
          break;
        }
        if (
          proPlay === properties[p] &&
          (p === 1 || p === 4 || p === 9) &&
          players[e].propertyOn.indexOf(properties[p + 1]) !== -1 &&
          players[e].propertyOn.indexOf(properties[p - 1]) !== -1
        ) {
          paying(fmi, 2000, 1);
          paying(
            players[e],
            toalValuePlusUpgrade(proPlay) +
              toalValuePlusUpgrade(properties[p + 1]) +
              toalValuePlusUpgrade(properties[p - 1]),
            1
          );
          getProp(players[e], proPlay);
          getProp(players[e], properties[p + 1]);
          getProp(players[e], properties[p - 1]);
          break;
        }
        if (
          proPlay === properties[p] &&
          (p === 2 || p === 5 || p === 10) &&
          players[e].propertyOn.indexOf(properties[p - 1]) !== -1 &&
          players[e].propertyOn.indexOf(properties[p - 2]) !== -1
        ) {
          paying(fmi, 2000, 1);
          paying(
            players[e],
            toalValuePlusUpgrade(proPlay) +
              toalValuePlusUpgrade(properties[p - 1]) +
              toalValuePlusUpgrade(properties[p - 2]),
            1
          );
          getProp(players[e], proPlay);
          getProp(players[e], properties[p - 1]);
          getProp(players[e], properties[p - 2]);
          break;
        }
        if (
          proPlay === properties[6] &&
          players[e].propertyOn.indexOf(properties[7]) !== -1
        ) {
          paying(fmi, 2000, 1);
          paying(
            players[e],
            toalValuePlusUpgrade(proPlay) + toalValuePlusUpgrade(properties[7]),
            1
          );
          getProp(players[e], proPlay);
          getProp(players[e], properties[7]);

          break;
        } else if (
          proPlay === properties[7] &&
          players[e].propertyOn.indexOf(properties[6]) !== -1
        ) {
          paying(fmi, 2000, 1);
          paying(
            players[e],
            toalValuePlusUpgrade(proPlay) + toalValuePlusUpgrade(properties[6]),
            1
          );
          getProp(players[e], proPlay);
          getProp(players[e], properties[6]);
          break;
        }
      }
    }
  }
  exitPiracy();
};
//exit
const exit = function () {
  if (buyingState) {
    // if porperty is bought buy player fmi pay the price of the land

    collecting(fmi, propertyPlay[0].landValueSouth, 1);
    // then exit
    exitBuying();
  }
  if (piracyState) {
    exitPiracy();
  }
};

// ************buttoms actions**********
BtnRollDice.addEventListener("click", rollDice);
btnBuy.addEventListener("click", buying);
btnPay.addEventListener("click", payToAnotherPlayer);
btnUseGold.addEventListener("click", goldToAnotherPlayer);
btnPiracy.addEventListener("click", piracying);
btnPiraceChain.addEventListener("click", piracyingChain);
btnExit.addEventListener("click", exit);
// btnUpgradeIndustry.addEventListener("click");

//this function is to get position by clicking in the document

// document.getElementById("board").onclick = function clickEvent(e) {
//   // e = Mouse click event.
//   var rect = e.target.getBoundingClientRect();
//   var x = e.clientX - rect.left; //x position within the element.
//   var y = e.clientY - rect.top; //y position within the element.
//   console.log("Left : " + x + " ; Top : " + y);
// };
