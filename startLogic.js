// selecting html button for star
const btnStart = document.querySelector(".btnStart");

// start the game
const startGame = function () {
  numberOfPlayers = Number(document.querySelector("#numbersOfplayers").value);
  const player1Name = document.querySelector("#player1Name").value;
  const player2Name = document.querySelector("#player2Name").value;
  const player3Name = document.querySelector("#player3Name").value;
  const player4Name = document.querySelector("#player4Name").value;
  const player5Name = document.querySelector("#player5Name").value;
  const playersName = [
    player1Name,
    player2Name,
    player3Name,
    player4Name,
    player5Name,
  ];

  if (numberOfPlayers >= 2 && numberOfPlayers <= 5) {
    for (let e = 0; e < numberOfPlayers; e++) {
      players[1 + e] = new Player(
        playersName[e],
        0,
        3,
        document.querySelector(`.player-${1 + e}`),
        e === 0 ? true : false,
        `player${1 + e}_img.png`
      );
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
//show display
function displayOnShow(pro) {
  overlay.classList.remove("hidden");
  onShow.classList.remove("hidden");
  btnExitOnshow.classList.remove("hidden");
  onShow.src = pro;
}

// display players
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
    divProp.style.padding = "1px";
    col.appendChild(divProp).setAttribute("id", `prop${e.displayImg}`);
    for (let i of e.propertyOn) {
      let divImg = document.createElement("span");
      let pImg = document.createElement("img");
      let upImgNorth = document.createElement("img");
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

      upImgNorth.setAttribute("id", `upNorth${i.nameImg}`);
      upImgNorth.style.width = "10px";

      upImgSouth.setAttribute("id", `upSouth${i.nameImg}`);
      upImgSouth.style.width = "10px";

      divImg.appendChild(pImg);
      divImg.appendChild(upImgSouth);
      divImg.appendChild(upImgNorth);

      divImg.setAttribute("id", `${i.nameImg}`);

      divProp.appendChild(divImg);
    }

    row.appendChild(col).classList.add("col", "col-lg-2", "col-sm-2");
  }
}

btnStart.addEventListener("click", startGame);
