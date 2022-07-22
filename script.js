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
const btnExitOnshow = document.querySelector(".btnExitOnshow ");
const btnBarrier = document.querySelector(".btnBarrier");

// dices img
const diceImg = document.querySelector(".diceImg");
const diceImg2 = document.querySelector(".diceImg2");
const diceImg3 = document.querySelector(".diceImg3");
const diceImg4 = document.querySelector(".diceImg4");
// on show
const onShow = document.querySelector(".onshow");
// text that show who's turn
const showTextTurn = document.querySelector("#playerTurn");
const barrierCountText = document.querySelector(".barrierCount");
const coneImg = document.querySelector(".coneImg");

// overlay
const overlay = document.querySelector(".overlay");

//*******game logic gloval variables*********

// knowing what player is active by number
let activePlayer = 1; // i need to make a function so the 1 chnage depending of player starTurn and finalTurns

// list all player fmi is already on
const players = [fmi];
// list of all player to be add in players list that is the want that playing
let listOfPlayer = [player1, player2, player3, player4, player5];
// list all properties
const properties = [
  azucar,
  banano,
  cacao,
  algodon,
  tabaco,
  cafe,
  pesca,
  ganado,
  cobre,
  estano,
  hierro,
  petroleo,
];
// adding all properties to fmi propertyOn to star the game fmi had all property
for (i of properties) {
  fmi.propertyOn.push(i);
}
// number of player is going to be define lether by the user
let numberOfPlayers;

// property on play // had to make this list to know what property is going to (buy,upgrade or (es= piratiar))
let propertyPlay = [];

// this variables are to know what is happening know (and buttom exit can know where to exit)
let firstTurn = true;
let buyingState;
let piracyState;
let payingState;
let chainState;
let barrier = false;
let barrierCount = 0;

// ***********displays functions*********
function updateDisplay() {
  for (let e = 0; e < players.length; e++) {
    // update player money and goldbar
    document.getElementById(
      `money${players[e].displayImg}`
    ).innerHTML = `Dinero💵 ${players[e].money}`;
    document.getElementById(
      `gold${players[e].displayImg}`
    ).innerHTML = `Barras de Oro🪙 ${players[e].goldBar}`;
    // update barrier count
    barrierCountText.textContent = `Faltan ${2000 - barrierCount}`;

    // update property depent where they are
    let playerP = document.getElementById(`prop${players[e].displayImg}`);
    for (let p of players[e].propertyOn) {
      let proId = document.getElementById(`${p.nameImg}`);
      playerP.appendChild(proId);

      let upSouth = document.getElementById(`upSouth${p.nameImg}`);
      let upNorth = document.getElementById(`upNorth${p.nameImg}`);

      if (p.numOfUpSouth == 1) {
        upSouth.src = `/propiedades/upgrade_south1.png`;
      } else if (p.numOfUpSouth == 2) {
        upSouth.src = `/propiedades/upgrade_south2.png`;
      } else if (p.numOfUpSouth == 3) {
        upSouth.src = `/propiedades/upgrade_south3.png`;
      }
      if (p.numOfUpNorth == 1) {
        upNorth.src = `/propiedades/upgrade_nort1.png`;
      } else if (p.numOfUpNorth == 2) {
        upNorth.src = `/propiedades/upgrade_nort2.png`;
      } else if (p.numOfUpNorth == 3) {
        upNorth.src = `/propiedades/upgrade_nort3.png`;
      }
    }
  }
}
//**********games funct ions ***********

// when moving and check for dices
const movePlayer = function (player) {
  // dices
  let dice = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let dice3 = 0;
  let dice4 = 0;
  if (player.money < -10000) {
    dice3 = Math.floor(Math.random() * 6) + 1;
    diceImg3.src = `../tablero/dice-${dice3}.png`;
    diceImg3.classList.remove("hidden");
  }
  if (player.money < -20000) {
    dice4 = Math.floor(Math.random() * 6) + 1;
    diceImg4.src = `../tablero/dice-${dice4}.png`;
    diceImg4.classList.remove("hidden");
  }

  // chnage the dice img by dice value
  diceImg.src = `../tablero/dice-${dice}.png`;
  diceImg2.src = `../tablero/dice-${dice2}.png`;

  //chnage player pos
  player.lastPosition = player.mapPosition;
  player.mapPosition += dice + dice2 + dice3 + dice4;
  // when player make a complite board it began with 40 - pos
  if (player.mapPosition > 40) {
    player.mapPosition -= 40;
  }
  // adding and removing class so player move in the board
  player.img.classList.add(`--${player.mapPosition}`);
  player.img.classList.remove(`--${player.lastPosition}`);
  //charging interest when it passes through start
  if (player.money < 0) {
    if (player.lastPosition !== 38) {
      if (
        player.lastPosition >= 27 &&
        player.mapPosition >= 1 &&
        player.mapPosition <= 11
      ) {
        player.money = 0.1 * player.money + player.money;
        if (player.interest20) {
          player.money = 0.2 * player.money + player.money;
        }
      }
    }
  }
  // removing interest 20 and players notCollect when it passes through start
  if (
    player.lastPosition >= 27 &&
    player.mapPosition >= 1 &&
    player.mapPosition <= 11
  ) {
    if (player.interest20) {
      player.interest20 = false;
    }
    if (player.notCollect) {
      player.notCollect = false;
    }
  }
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
  // eliminating players if money < -30000
  if (players[activePlayer].money < -30000) {
    alert(
      `lo sinto usted deve mas de 30000, jugador ${players[activePlayer].name} fue eliminado`
    );
    for (let a of players[activePlayer].propertyOn) {
      fmi.propertyOn.push(a);
    }
    players[activePlayer].img.classList.add("hidden");
    players[activePlayer].startTurn = false;
    let removeIndex = players.indexOf(players[activePlayer]);
    players.splice(removeIndex, 1);
    numberOfPlayers -= 1;
    let nextPlayer = activePlayer + 1 > numberOfPlayers ? 1 : activePlayer + 1;
    players[nextPlayer].startTurn = true;
    // change active player by next one
    activePlayer++;
    // if active player exceeds numbers of player star for 1 again
    if (activePlayer >= numberOfPlayers + 1) {
      activePlayer = 1;
    }
    showTextTurn.textContent = players[activePlayer].name;
    BtnRollDice.classList.remove("hidden");
    btnUpgradeIndustry.classList.remove("hidden");
    diceImg3.classList.add("hidden");
    diceImg4.classList.add("hidden");
    if (numberOfPlayers === 1) {
      alert(
        `wow wow jugador ${players[activePlayer].name} gana el juego bien echo`
      );
    }
  } else {
    if (players[activePlayer].finalTurn) {
      //change final turn of current player to false
      players[activePlayer].finalTurn = false;
      // var that take the next player so can put as argument to reflect next player
      let nextPlayer =
        activePlayer + 1 > numberOfPlayers ? 1 : activePlayer + 1;
      // check if next player had no play on
      if (players[nextPlayer].noPlay) {
        // see who is going next the player can't play
        let nextNextPlayer =
          nextPlayer + 1 > numberOfPlayers ? 1 : nextPlayer + 1;
        // making that player active

        players[nextPlayer].turnWOplayCount++;

        // counting the turns without playing and if 2 can play the other turn
        if (players[nextPlayer].turnWOplayCount === 2) {
          players[nextPlayer].noPlay = false;
          players[nextPlayer].notCollect = false;
          players[nextPlayer].turnWOplayCount = 0;
        }
        players[nextNextPlayer].startTurn = true;

        activePlayer += 2;
        if (activePlayer >= numberOfPlayers + 1) {
          activePlayer = 1;
        }
        // showing player's name and img in turn
        showTextTurn.innerHTML = `${players[activePlayer].name} <img
      src="../tablero/${players[activePlayer].displayImg}"
      
      alt="playerImg" width="25px"
    />`;

        BtnRollDice.classList.remove("hidden");
        btnUpgradeIndustry.classList.remove("hidden");
        diceImg3.classList.add("hidden");
        diceImg4.classList.add("hidden");
      } else {
        players[nextPlayer].startTurn = true;
        // change active player by next one
        activePlayer++;
        // if active player exceeds numbers of player star for 1 again
        if (activePlayer >= numberOfPlayers + 1) {
          activePlayer = 1;
        }

        // showing player's name and img in turn
        showTextTurn.innerHTML = `${players[activePlayer].name} <img
      src="../tablero/${players[activePlayer].displayImg}"
      
      alt="playerImg" width="25px"
    />`;

        BtnRollDice.classList.remove("hidden");
        btnUpgradeIndustry.classList.remove("hidden");
        diceImg3.classList.add("hidden");
        diceImg4.classList.add("hidden");
      }
    }
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

function getProp(whoGive, property) {
  players[activePlayer].propertyOn.push(property);
  let removeIndex = whoGive.propertyOn.indexOf(property);
  whoGive.propertyOn.splice(removeIndex, 1);
}

function getPropChain(whoGive, property) {
  let chain1 = returnChainValue(property, whoGive).chainPro1;
  let chain2 = returnChainValue(property, whoGive).chainPro2;
  // add chain 1 to active player and actual property
  players[activePlayer].propertyOn.push(chain1);
  players[activePlayer].propertyOn.push(property);
  // only add and removing chain2 if prop is no equal to 6 or 7 props
  if (property !== pesca || property !== ganado) {
    players[activePlayer].propertyOn.push(chain2);
    let removeIndex = whoGive.propertyOn.indexOf(chain2);
    whoGive.propertyOn.splice(removeIndex, 1);
  }
  // removing actal prop and chin1
  let removeIndex2 = whoGive.propertyOn.indexOf(chain1);
  whoGive.propertyOn.splice(removeIndex2, 1);
  let removeIndex3 = whoGive.propertyOn.indexOf(property);
  whoGive.propertyOn.splice(removeIndex3, 1);
}

// rolling on property
const rollingOnProperty = function () {
  for (let i = 0; i < properties.length; i++) {
    // when rolling on a property on South
    let proPlay = properties[i];
    if (players[activePlayer].mapPosition === properties[i].mapPositionSouth) {
      // if property on fmi
      if (fmi.propertyOn.indexOf(proPlay) !== -1) {
        btnBuy.classList.remove("hidden");
        btnExit.classList.remove("hidden");
        // BtnRollDice.classList.add("hidden");
        // btnUpgradeIndustry.classList.add("hidden");
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
      // when rolling on property on north
    } else if (
      players[activePlayer].mapPosition === properties[i].mapPositionNorth
    ) {
      // if property on fmi
      if (fmi.propertyOn.indexOf(proPlay) !== -1) {
        btnPay.classList.remove("hidden");
        if (players[activePlayer].goldBar > 0) {
          btnUseGold.classList.remove("hidden");
        }
        // always when a property need action in another function it goes to propertyPlay
        propertyPlay.push(proPlay);
      }
      // if property onw by actual player
      if (players[activePlayer].propertyOn.indexOf(proPlay) !== -1) {
        if (barrier) {
          alert(
            "porque la barrera esta activa usted no cobra nada en su propiedad"
          );
          switchActivePlayer();
        } else {
          if (players[activePlayer].notCollect) {
            alert("usted no cobra nada hasta que llegue al FMI");
            switchActivePlayer();
            break;
          } else {
            collecting(fmi, proPlay.landValueNorth, proPlay.numOfUpNorth);
            switchActivePlayer();
            break;
          }
        }
      }
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
  let chechIfPlayerFinish = activePlayer;
  if (players[activePlayer].finalTurn) {
    if (chechIfPlayerFinish === activePlayer) {
      rollingOnProperty();
    }

    if (chechIfPlayerFinish === activePlayer) {
      rollingOnSoli();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingOnFmi();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingNacional();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingOn10();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingMilitaryCoup();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingCapitalFlight();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingOnFMIspace39();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingOnSpace32();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingSpace30();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingSpace38();
    }
    if (chechIfPlayerFinish === activePlayer) {
      rollingSpace20Barrier();
    }
  }
  updateDisplay();
};
// upgrading
//geting all name of property that you have if dont have return false

function checkOwnProperty(player) {
  let ownProperties = [];
  for (let a of player.propertyOn) {
    ownProperties.push(a.name);
    ownProperties.push(" ");
  }
  if (ownProperties) {
    return ownProperties.toString();
  } else return false;
}
// removing accents from user input
accentsTidy = function (s) {
  var r = s.toLowerCase();
  r = r.replace(new RegExp(/\s/g), "");
  r = r.replace(new RegExp(/[àáâãäå]/g), "a");
  r = r.replace(new RegExp(/æ/g), "ae");
  r = r.replace(new RegExp(/ç/g), "c");
  r = r.replace(new RegExp(/[èéêë]/g), "e");
  r = r.replace(new RegExp(/[ìíîï]/g), "i");
  r = r.replace(new RegExp(/ñ/g), "n");
  r = r.replace(new RegExp(/[òóôõö]/g), "o");
  r = r.replace(new RegExp(/œ/g), "oe");
  r = r.replace(new RegExp(/[ùúûü]/g), "u");
  r = r.replace(new RegExp(/[ýÿ]/g), "y");
  r = r.replace(new RegExp(/\W/g), "");
  return r;
};
const upgrade = function () {
  if (checkOwnProperty(players[activePlayer])) {
    let whatProperty = prompt(
      `por favor ingrese cual de sus propiedades => ${checkOwnProperty(
        players[activePlayer]
      )}`
    );
    for (let p of players[activePlayer].propertyOn) {
      ////// i need to make a function to upgrade depent of the upgrade
      if (accentsTidy(whatProperty) == p.name) {
        if (p.numOfUpSouth === 0) {
          paying(fmi, p.upgradeSouth1, 1);
          p.numOfUpSouth += 1;
          break;
        } else if (p.numOfUpSouth === 1 && p.numOfUpNorth === 0) {
          paying(fmi, p.upgradeNorth1, 1);
          p.numOfUpNorth += 1;
          break;
        } else if (p.numOfUpSouth === 1) {
          paying(fmi, p.upgradeSouth2, 1);
          p.numOfUpSouth += 1;
          break;
        } else if (p.numOfUpSouth === 2 && p.numOfUpNorth === 1) {
          paying(fmi, p.upgradeNorth2, 1);
          p.numOfUpNorth += 1;
          break;
        } else if (p.numOfUpSouth === 2) {
          paying(fmi, p.upgradeSouth3, 1);
          p.numOfUpSouth += 1;
          break;
        } else if (p.numOfUpSouth === 3 && p.numOfUpNorth === 2) {
          paying(fmi, p.upgradeNorth3, 1);
          p.numOfUpNorth += 1;
          break;
        }
      }
    }
  }
  updateDisplay();
};
// buying
function exitBuying() {
  propertyPlay = [];
  btnBuy.classList.add("hidden");
  btnExit.classList.add("hidden");
  buyingState = false;
  switchActivePlayer();
}
// exit after pay
function exitPaying() {
  propertyPlay = [];
  btnPay.classList.add("hidden");
  btnUseGold.classList.add("hidden");
  switchActivePlayer();
}

const buying = function () {
  // paying and getting property
  paying(fmi, propertyPlay[0].landValueSouth, 1);
  getProp(fmi, propertyPlay[0]);
  // adding hidden class to buttoms and
  exitBuying();
  updateDisplay();
};

// this function first check if player had chain and if had a return value of total change and also return what was the others chain property
function returnChainValue(proPlay, owner) {
  for (let p = 0; p < properties.length; p++) {
    // declaring variables to be returned if player had chain
    var chainPayingValueSouth;
    var chainPayingValueNorth;
    var totalCostValue;
    var chainPro1;
    var chainPro2;
    // cheking all possibilities of chain
    if (
      proPlay === properties[p] &&
      (p === 0 || p === 3 || p === 8) &&
      owner.propertyOn.indexOf(properties[p + 1]) !== -1 &&
      owner.propertyOn.indexOf(properties[p + 2]) !== -1
    ) {
      chainPayingValueSouth =
        properties[p + 1].landValueSouth * properties[p + 1].numOfUpSouth +
        properties[p + 2].landValueSouth * properties[p + 2].numOfUpSouth;
      chainPayingValueNorth =
        properties[p + 1].landValueNorth * properties[p + 1].numOfUpNorth +
        properties[p + 2].landValueNorth * properties[p + 2].numOfUpNorth;
      totalCostValue =
        toalValuePlusUpgrade(properties[p + 1]) +
        toalValuePlusUpgrade(properties[p + 2]);
      chainPro1 = properties[p + 1];
      chainPro2 = properties[p + 2];
    }
    if (
      proPlay === properties[p] &&
      (p === 1 || p === 4 || p === 9) &&
      owner.propertyOn.indexOf(properties[p + 1]) !== -1 &&
      owner.propertyOn.indexOf(properties[p - 1]) !== -1
    ) {
      chainPayingValueSouth =
        properties[p + 1].landValueSouth * properties[p + 1].numOfUpSouth +
        properties[p - 1].landValueSouth * properties[p - 1].numOfUpSouth;
      chainPayingValueNorth =
        properties[p + 1].landValueNorth * properties[p + 1].numOfUpNorth +
        properties[p - 1].landValueNorth * properties[p - 1].numOfUpNorth;
      totalCostValue =
        toalValuePlusUpgrade(properties[p + 1]) +
        toalValuePlusUpgrade(properties[p - 1]);
      chainPro1 = properties[p + 1];
      chainPro2 = properties[p - 1];
    }
    if (
      proPlay === properties[p] &&
      (p === 2 || p === 5 || p === 10) &&
      owner.propertyOn.indexOf(properties[p - 1]) !== -1 &&
      owner.propertyOn.indexOf(properties[p - 2]) !== -1
    ) {
      chainPayingValueSouth =
        properties[p - 1].landValueSouth * properties[p - 1].numOfUpSouth +
        properties[p - 2].landValueSouth * properties[p - 2].numOfUpSouth;
      chainPayingValueNorth =
        properties[p - 1].landValueNorth * properties[p - 1].numOfUpNorth +
        properties[p - 2].landValueNorth * properties[p - 2].numOfUpNorth;
      totalCostValue =
        toalValuePlusUpgrade(properties[p - 1]) +
        toalValuePlusUpgrade(properties[p - 2]);
      chainPro1 = properties[p - 1];
      chainPro2 = properties[p - 2];
    }
    if (
      proPlay === properties[6] &&
      owner.propertyOn.indexOf(properties[7]) !== -1
    ) {
      chainPayingValueSouth =
        properties[7].landValueSouth * properties[7].numOfUpSouth;
      chainPayingValueNorth =
        properties[7].landValueNorth * properties[7].numOfUpNorth;
      totalCostValue = toalValuePlusUpgrade(properties[7]);
    } else if (
      proPlay === properties[7] &&
      owner.propertyOn.indexOf(properties[6]) !== -1
    ) {
      chainPayingValueSouth =
        properties[6].landValueSouth * properties[6].numOfUpSouth;
      chainPayingValueNorth =
        properties[6].landValueNorth * properties[6].numOfUpNorth;
      totalCostValue = toalValuePlusUpgrade(properties[6]);
    }
  }
  // returning a false if player dont have chain
  if (
    (chainPayingValueSouth, chainPayingValueNorth, totalCostValue == undefined)
  ) {
    return false;
    // returning the values
  } else
    return {
      chainPayingValueSouth,
      chainPayingValueNorth,
      totalCostValue,
      chainPro1,
      chainPro2,
    };
}

// pay to another player with money and gold

const payToAnotherPlayer = function () {
  for (let e = 1; e < players.length; e++) {
    // making a variable to just to see what property is in play
    let proPlay = propertyPlay[0];
    // to make skip player active
    if (e === activePlayer) {
      continue;
    }
    //if fmi had property and player is on north
    if (fmi.propertyOn.indexOf(proPlay) !== -1) {
      paying(fmi, proPlay.landValueNorth, 1);
      exitPaying();
    }
    // paying the owner player
    if (players[e].propertyOn.indexOf(proPlay) !== -1) {
      // player on south
      if (players[activePlayer].mapPosition === proPlay.mapPositionSouth) {
        // paying the actual property
        if (players[e].notCollect) {
          alert(
            "este jugador no cobra porque sus industrias estan cerradas hasta que llegue al FMI"
          );
          enterPiracy();
          if (returnChainValue(proPlay, players[e])) {
            enterPiracyChain();
          }
        } else {
          paying(players[e], proPlay.landValueSouth, proPlay.numOfUpSouth);
          enterPiracy();
          // check if player had the chain
          if (returnChainValue(proPlay, players[e])) {
            paying(
              players[e],
              returnChainValue(proPlay, players[e]).chainPayingValueSouth,
              1
            );
            enterPiracyChain();
          }
        }
      }

      // if player on north
      if (players[activePlayer].mapPosition === proPlay.mapPositionNorth) {
        // paying the actual property
        if (players[e].notCollect) {
          alert(
            "este jugador no cobra porque sus industrias estan cerradas hasta que llegue al FMI"
          );
          exitPaying();
        } else {
          paying(players[e], proPlay.landValueNorth, proPlay.numOfUpNorth);
          // check if player had the chain
          if (returnChainValue(proPlay, players[e])) {
            paying(
              players[e],
              returnChainValue(proPlay, players[e]).chainPayingValueNorth,
              1
            );
          }
          exitPaying();
        }
      }
    }
  }
  updateDisplay();
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
    //if fmi had property and player is on north
    if (fmi.propertyOn.indexOf(proPlay) !== -1) {
      fmi.goldBar += 1;
      players[activePlayer].goldBar -= 1;
      exitPaying();
    }
    // paying the owner player
    if (players[e].propertyOn.indexOf(proPlay) !== -1) {
      // player on south
      if (players[activePlayer].mapPosition === proPlay.mapPositionSouth) {
        if (players[e].notCollect) {
          alert(
            "este jugador no cobra porque sus industrias estan cerradas hasta que llegue al FMI"
          );
          // adding class and removing class and enter in piracy state
          enterPiracy();
          // knowing if player had chain so can go into chain state
          if (returnChainValue(proPlay, players[e])) {
            enterPiracyChain();
          }
        } else {
          players[e].goldBar += 1;
          players[activePlayer].goldBar -= 1;
          // adding class and removing class and enter in piracy state
          enterPiracy();
          // knowing if player had chain so can go into chain state
          if (returnChainValue(proPlay, players[e])) {
            enterPiracyChain();
          }
        }
      }
      // if player on north
      if (players[activePlayer].mapPosition === proPlay.mapPositionNorth) {
        if (players[e].notCollect) {
          alert(
            "este jugador no cobra porque sus industrias estan cerradas hasta que llegue al FMI"
          );
          exitPaying();
        } else {
          players[e].goldBar += 1;
          players[activePlayer].goldBar -= 1;
          exitPaying();
        }
      }
    }
  }
  updateDisplay();
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
function toalValuePlusUpgrade(proPlay) {
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
}

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
  updateDisplay();
};

const piracyingChain = function () {
  let proPlay = propertyPlay[0];
  for (let e = 1; e < players.length; e++) {
    // to make skip player active
    if (e === activePlayer) {
      continue;
    }

    if (players[e].propertyOn.indexOf(proPlay) !== -1) {
      paying(fmi, 2000, 1);
      paying(
        players[e],
        toalValuePlusUpgrade(proPlay) +
          returnChainValue(proPlay, players[e]).totalCostValue,
        1
      );
      getPropChain(players[e], proPlay);
    }
  }
  exitPiracy();
  updateDisplay();
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
  updateDisplay();
};
const ExitOnshow = function () {
  overlay.classList.add("hidden");
  onShow.classList.add("hidden");
  btnExitOnshow.classList.add("hidden");
  onShow.src = "";
};

// ************buttoms actions**********

BtnRollDice.addEventListener("click", rollDice);
btnBuy.addEventListener("click", buying);
btnPay.addEventListener("click", payToAnotherPlayer);
btnUseGold.addEventListener("click", goldToAnotherPlayer);
btnPiracy.addEventListener("click", piracying);
btnPiraceChain.addEventListener("click", piracyingChain);
btnExit.addEventListener("click", exit);
btnExitOnshow.addEventListener("click", ExitOnshow);
btnUpgradeIndustry.addEventListener("click", upgrade);
btnBarrier.addEventListener("click", removeBarrier);

//this function is to get position by clicking in the document

// document.getElementById("board").onclick = function clickEvent(e) {
//   // e = Mouse click event.
//   var rect = e.target.getBoundingClientRect();
//   var x = e.clientX - rect.left; //x position within the element.
//   var y = e.clientY - rect.top; //y position within the element.
//   console.log("Left : " + x + " ; Top : " + y);
// };
