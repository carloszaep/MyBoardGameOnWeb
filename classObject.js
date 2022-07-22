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
    finalTurn,
    notCollect,
    interest20,
    displayImg,
    militaryCoupSaver,
    capitalFlightSaver,
    noPlay,
    turnWOplayCount,
    rolling
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
    this.notCollect = notCollect;
    this.interest20 = interest20;
    this.displayImg = displayImg;
    this.militaryCoup = militaryCoupSaver;
    this.capitalFlightSaver = capitalFlightSaver;
    this.noPlay = noPlay;
    this.turnWOplayCount = turnWOplayCount;
    this.rolling = rolling;
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
    nameImgRes,
    name
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
    this.name = name;
  }
}
//****************assigning classes *************

//fmi count as a player
const fmi = new player(
  "FMI",
  [],
  120000,
  0,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "fmi_img.png"
);
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
  false,
  false,
  false,
  "player1_img.png",
  false,
  false,
  false,
  0,
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
  false,
  false,
  false,
  "player2_img.png",
  false,
  false,
  false,
  0,
  false
);
const player3 = new player(
  "player3",
  [],
  0,
  3,
  40,
  40,
  document.querySelector(".player-3"),
  false,
  false,
  false,
  false,
  "player3_img.png",
  false,
  false,
  false,
  0,
  false
);
const player4 = new player(
  "player4",
  [],
  0,
  3,
  40,
  40,
  document.querySelector(".player-4"),
  false,
  false,
  false,
  false,
  "player4_img.png",
  false,
  false,
  false,
  0,
  false
);
const player5 = new player(
  "player5",
  [],
  0,
  3,
  40,
  40,
  document.querySelector(".player-5"),
  false,
  false,
  false,
  false,
  "player5_img.png",
  false,
  false,
  false,
  0,
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
  0,
  0,
  "azucar.png",
  "azucar_res.png",
  "azucar"
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
  0,
  0,
  "banano.png",
  "banano_res.png",
  "banano"
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
  0,
  0,
  "cacao.png",
  "cacao_res.png",
  "cacao"
);
const algodon = new property(
  250,
  500,
  350,
  500,
  750,
  750,
  1000,
  1500,
  5,
  25,
  0,
  0,
  "algodon.png",
  "algodon_res.png",
  "algodon"
);
const tabaco = new property(
  300,
  600,
  450,
  600,
  900,
  900,
  1200,
  1800,
  6,
  26,
  0,
  0,
  "tabaco.png",
  "tabaco_res.png",
  "tabaco"
);
const cafe = new property(
  350,
  700,
  500,
  700,
  1000,
  1000,
  1400,
  2100,
  7,
  27,
  0,
  0,
  "cafe.png",
  "cafe_res.png",
  "cafe"
);
const pesca = new property(
  400,
  800,
  600,
  800,
  1200,
  1200,
  1600,
  2400,
  9,
  29,
  0,
  0,
  "pesca.png",
  "pesca_res.png",
  "pesca"
);
const ganado = new property(
  500,
  1000,
  750,
  1000,
  1500,
  1500,
  2000,
  3000,
  11,
  31,
  0,
  0,
  "ganado.png",
  "ganado_res.png",
  "ganado"
);
const cobre = new property(
  600,
  1200,
  900,
  1200,
  1800,
  1800,
  2400,
  3600,
  13,
  33,
  0,
  0,
  "cobre.png",
  "cobre_res.png",
  "cobre"
);
const estano = new property(
  700,
  1400,
  1050,
  1400,
  2100,
  2100,
  2800,
  4200,
  14,
  34,
  0,
  0,
  "estano.png",
  "estano_res.png",
  "estano"
);
const hierro = new property(
  800,
  1600,
  1200,
  1600,
  2400,
  2400,
  3200,
  4800,
  15,
  35,
  0,
  0,
  "hierro.png",
  "hierro_res.png",
  "hierro"
);
const petroleo = new property(
  1200,
  2400,
  1800,
  2400,
  3600,
  3600,
  4800,
  7200,
  17,
  37,
  0,
  0,
  "petroleo.png",
  "petroleo_res.png",
  "petroleo"
);

const btnStart = document.querySelector(".btnStart");

// start the game
const startGame = function () {
  numberOfPlayers = Number(document.querySelector("#numbersOfplayers").value);
  player1.name = document.querySelector("#player1Name").value;
  player2.name = document.querySelector("#player2Name").value;
  player3.name = document.querySelector("#player3Name").value;
  player4.name = document.querySelector("#player4Name").value;
  player5.name = document.querySelector("#player5Name").value;

  if (numberOfPlayers >= 2 && numberOfPlayers <= 5) {
    for (let e = 0; e < numberOfPlayers; e++) {
      players.push(listOfPlayer[e]);
    }
    document.querySelector(".formStar").classList.add("hidden");
    overlay.classList.add("hidden");
    showTextTurn.innerHTML = `${players[activePlayer].name} <img
      src="../tablero/${players[activePlayer].displayImg}"
      
      alt="playerImg" width="25px"
    />`;
    for (let e = 1; e < players.length; e++) {
      players[e].money = (Math.floor(Math.random() * 6) + 1) * 1000;
    }
    displayPlayers();
    firstTurn = false;
  }
};
//show on show
function displayOnShow(pro) {
  overlay.classList.remove("hidden");
  onShow.classList.remove("hidden");
  btnExitOnshow.classList.remove("hidden");
  onShow.src = pro;
}

// displays pllayer
function displayPlayers() {
  for (let e of players) {
    let row = document.querySelector(".row");
    let col = document.createElement("div");
    let divProp = document.createElement("div");
    let hName = document.createElement("h2");
    let pMoney = document.createElement("p");
    let pGold = document.createElement("p");

    let money = document.createTextNode(`Dinero💵 ${e.money}`);
    let name = document.createTextNode(`${e.name}`);

    let playerImg = document.createElement("img");

    let goldBars = document.createTextNode(`Barras de Oro🪙 ${e.goldBar}`);
    playerImg.src = `/tablero/${e.displayImg}`;
    playerImg.style.width = "40px";

    hName.appendChild(name);

    hName.appendChild(playerImg);

    pMoney.appendChild(money);
    pMoney.setAttribute("id", `money${e.displayImg}`);

    pGold.appendChild(goldBars);
    pGold.setAttribute("id", `gold${e.displayImg}`);

    col.appendChild(hName);
    col.appendChild(pMoney);
    col.appendChild(pGold);
    col.appendChild(divProp).setAttribute("id", `prop${e.displayImg}`);
    for (let i of e.propertyOn) {
      let divImg = document.createElement("span");
      let pImg = document.createElement("img");
      let upImgNort = document.createElement("img");
      let upImgSouth = document.createElement("img");

      pImg.src = `/propiedades/${i.nameImgRes}`;
      pImg.style.paddingLeft = "0.3rem";
      pImg.style.width = "60px";
      pImg.addEventListener("click", () => {
        overlay.classList.remove("hidden");
        onShow.classList.remove("hidden");
        btnExitOnshow.classList.remove("hidden");
        onShow.src = `/propiedades/${i.nameImg}`;
      });

      upImgNort.setAttribute("id", `upNorth${i.nameImg}`);
      upImgNort.style.width = "10px";

      upImgSouth.setAttribute("id", `upSouth${i.nameImg}`);
      upImgSouth.style.width = "10px";

      divImg.appendChild(pImg);
      divImg.appendChild(upImgSouth);
      divImg.appendChild(upImgNort);

      divImg.setAttribute("id", `${i.nameImg}`);

      divProp.appendChild(divImg);
    }

    row.appendChild(col).classList.add("col", "col-lg-2", "col-sm-2");
  }
}

btnStart.addEventListener("click", startGame);
