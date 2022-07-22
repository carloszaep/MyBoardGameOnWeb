// rolling on soli
function rollingOnSoli() {
  let player = players[activePlayer];
  if (
    player.mapPosition === 4 ||
    player.mapPosition === 16 ||
    player.mapPosition === 32
  ) {
    let soliCard = Math.floor(Math.random() * 18) + 1;

    // soli1
    if (soliCard === 1) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      player.img.classList.remove(`--${player.mapPosition}`);
      player.mapPosition = 24;
      player.img.classList.add(`--${player.mapPosition}`);
    }
    // soli2
    if (soliCard === 2) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      player.img.classList.remove(`--${player.mapPosition}`);
      player.mapPosition = 10;
      player.img.classList.add(`--${player.mapPosition}`);
    }
    // soli3
    if (soliCard === 3) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 2600, 1);
      switchActivePlayer();
    }
    // soli4
    if (soliCard === 4) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 3400, 1);
      switchActivePlayer();
    }
    // soli5
    if (soliCard === 5) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 2800, 1);
      switchActivePlayer();
    }
    // soli6
    if (soliCard === 6) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 3000, 1);
      switchActivePlayer();
    }
    // soli7
    if (soliCard === 7) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 4000, 1);
      switchActivePlayer();
    }
    // soli8
    if (soliCard === 8) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 3600, 1);
      switchActivePlayer();
    }
    // soli9
    if (soliCard === 9) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 2400, 1);
      switchActivePlayer();
    }
    // soli10
    if (soliCard === 10) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      for (let i = 1; i < players.length; i++) {
        players[i].money += 2000;
      }
      switchActivePlayer();
    }
    // soli11
    if (soliCard === 11) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 2200, 1);
      switchActivePlayer();
    }
    // soli12
    if (soliCard === 12) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      player.militaryCoupSaver = true;
      alert("estas liberado de golpe militar en tu proxima caida");
      switchActivePlayer();
    }
    // soli 13
    if (soliCard === 13) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 3200, 1);
      switchActivePlayer();
    }
    // soli 14
    if (soliCard === 14) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 2000, 1);
      switchActivePlayer();
    }
    // soli 15
    if (soliCard === 15) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      if (player.goldBar < 3) {
        player.goldBar = 3;
      }
      switchActivePlayer();
    }
    // soli 16
    if (soliCard === 16) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      collecting(fmi, 3800, 1);
      switchActivePlayer();
    }
    // soli 17
    if (soliCard === 17) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      if (fmi.propertyOn.indexOf(petroleo) === -1) {
        if (
          petroleo.numOfUpSouth != 3 &&
          petroleo.numOfUpNorth === petroleo.numOfUpSouth
        ) {
          petroleo.numOfUpSouth++;
        } else if (
          petroleo.numOfUpSouth != 3 &&
          petroleo.numOfUpSouth > petroleo.numOfUpNorth
        ) {
          petroleo.numOfUpNorth++;
        }
      }
      switchActivePlayer();
    }
    // soli 18
    if (soliCard === 18) {
      displayOnShow(`salidaridad/salidari${soliCard}.png`);
      player.capitalFlightSaver = true;
      alert("estas liberado de fuga de capitales en tu proxima caida");
      switchActivePlayer();
    }
  }
}

function rollingOnFmi() {
  let player = players[activePlayer];
  if (
    player.mapPosition === 8 ||
    player.mapPosition === 19 ||
    player.mapPosition === 28
  ) {
    let fmiCard = Math.floor(Math.random() * 15) + 1;
    // 12 had to put this one first so if false take another car
    if (fmiCard === 12) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      if (checkOwnProperty(fmi)) {
        for (let p of fmi.propertyOn) {
          player.img.classList.remove(`--${player.mapPosition}`);
          player.mapPosition = p.mapPositionNorth;
          player.img.classList.add(`--${player.mapPosition}`);
          paying(fmi, p.landValueNorth * 2, 1);
          switchActivePlayer();
          break;
        }
      } else {
        fmiCard = Math.floor(Math.random() * 15) + 1;
      }
    }
    // fmi card 1
    if (fmiCard === 1) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      paying(fmi, 100, 1);
      switchActivePlayer();
    }
    // fmi 2
    if (fmiCard === 2) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      for (let i = 1; i < players.length; i++) {
        players[i].img.classList.remove(`--${players[i].mapPosition}`);
        players[i].mapPosition = 39;
        players[i].img.classList.add(`--${players[i].mapPosition}`);
      }
    }
    // fmi 3
    if (fmiCard === 3) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      player.notCollect = true;
      switchActivePlayer();
    }
    // fmi 4
    if (fmiCard === 4) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      let leftPlayer =
        activePlayer === 1 ? players.length - 1 : activePlayer - 1;
      players[leftPlayer].img.classList.remove(
        `--${players[leftPlayer].mapPosition}`
      );
      players[leftPlayer].mapPosition = 39;
      players[leftPlayer].img.classList.add(
        `--${players[leftPlayer].mapPosition}`
      );
      switchActivePlayer();
    }
    // fmi 5
    if (fmiCard === 5) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      if (checkOwnProperty(player)) {
        let totalUpsouth = 0;
        let totalUpnorth = 0;
        for (let p of player.propertyOn) {
          totalUpsouth += p.numOfUpSouth;
          totalUpnorth += p.numOfUpNorth;
        }
        paying(fmi, 200 * totalUpsouth + 400 * totalUpnorth, 1);
      }
      switchActivePlayer();
    }
    // fmi 6
    if (fmiCard === 6) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      if (players.length - 1 === 2) {
        alert("porque solo hay dos jugadores esta targeta se descartara");
        switchActivePlayer();
      } else {
        player.noPlay = true;
        player.notCollect = true;
        switchActivePlayer();
      }
    }
    // fmi 7
    if (fmiCard === 7) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      paying(fmi, 1500, 1);
      switchActivePlayer();
    }
    // fmi 8
    if (fmiCard === 8) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      let rightPlayer =
        activePlayer === players.length - 1 ? 1 : activePlayer + 1;
      paying(fmi, 1000, 1);
      players[rightPlayer].money -= 1000;
      switchActivePlayer();
    }
    // fmi 9
    if (fmiCard === 9) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      player.interest20 = true;
      switchActivePlayer();
    }
    // 10
    if (fmiCard === 10) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      collecting(fmi, 10000, 1);
      switchActivePlayer();
    }
    // 11
    if (fmiCard === 11) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      player.img.classList.remove(`--${player.mapPosition}`);
      player.mapPosition = 32;
      player.img.classList.add(`--${player.mapPosition}`);
    }
    // 13
    if (fmiCard === 13) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      for (let i = 1; i < players.length; i++) {
        players[i].money -= 750;
      }
      switchActivePlayer();
    }
    // 14
    if (fmiCard === 14) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      player.img.classList.remove(`--${player.mapPosition}`);
      player.mapPosition = 39;
      player.img.classList.add(`--${player.mapPosition}`);
      if (player.money < 0) {
        player.money = 0.15 * player.money + player.money;
      }
      switchActivePlayer();
    }
    // 15
    if (fmiCard === 15) {
      displayOnShow(`/fmi/fmi${fmiCard}.png`);
      if (checkOwnProperty(player)) {
        let waitForUser = true;
        while (waitForUser) {
          let whatProperty = prompt(
            `por favor ingrese cual propiedad quiere (no tildes)${checkOwnProperty(
              player
            )}`
          );
          for (let p of player.propertyOn) {
            if (accentsTidy(whatProperty) == p.name) {
              waitForUser = false;
              fmi.propertyOn.push(p);
              let removeIndex = player.propertyOn.indexOf(p);
              player.propertyOn.splice(removeIndex, 1);
              p.numOfUpSouth = 0;
              p.numOfUpNorth = 0;
            }
          }
        }
      } else alert("no tines propiedades");
      switchActivePlayer();
    }
  }
}

function rollingSpace20Barrier() {
  let player = players[activePlayer];
  if (player.mapPosition === 20) {
    if (barrier) {
      barrierCountText.classList.add("hidden");
      coneImg.classList.add("hidden");
      btnBarrier.classList.add("hidden");
      barrierCount = 0;
      barrier = false;
    } else {
      barrierCountText.classList.remove("hidden");
      coneImg.classList.remove("hidden");
      btnBarrier.classList.remove("hidden");
      barrier = true;
    }
    switchActivePlayer();
  }
}
function removeBarrier() {
  let playerDeposit = null;

  while (playerDeposit === null || playerDeposit === NaN) {
    playerDeposit = Number(prompt("cuento quieres depositar (solo numeros)"));
  }
  if (playerDeposit != NaN) {
    paying(fmi, playerDeposit, 1);
    barrierCount += playerDeposit;
  }
  if (barrierCount >= 2000) {
    barrierCountText.classList.add("hidden");
    coneImg.classList.add("hidden");
    btnBarrier.classList.add("hidden");
    barrierCount = 0;
    barrier = false;
  }
  updateDisplay();
}

function rollingSpace38() {
  let player = players[activePlayer];
  if (player.mapPosition === 38) {
    switchActivePlayer();
  }
}

function rollingSpace30() {
  let player = players[activePlayer];
  if (player.mapPosition === 30) {
    collecting(fmi, 50, 1);
    switchActivePlayer();
  }
}

function rollingOnSpace32() {
  let player = players[activePlayer];
  if (player.mapPosition === 32) {
    if (player.goldBar > 1) {
      player.goldBar--;
    }
    switchActivePlayer();
  }
}

function rollingOnFMIspace39() {
  let player = players[activePlayer];
  if (player.mapPosition === 39) {
    switchActivePlayer();
  }
}

function rollingCapitalFlight() {
  let player = players[activePlayer];
  if (player.mapPosition === 12) {
    if (!player.capitalFlightSaver) {
      paying(fmi, (Math.floor(Math.random() * 6) + 1) * 1000, 1);
    } else player.capitalFlightSaver = false;
    switchActivePlayer;
  }
}

function rollingMilitaryCoup() {
  let player = players[activePlayer];

  if (player.mapPosition === 18) {
    if (player.money > 0 && !player.militaryCoupSaver) {
      player.money = 0;
    }
    if (player.militaryCoupSaver) {
      alert("te liberas de esta");
      player.militaryCoup = false;
    }
    switchActivePlayer();
  }
}

function rollingOn10() {
  let player = players[activePlayer];
  if (player.mapPosition === 10) {
    if (checkOwnProperty(player)) {
      let waitForUser = true;
      while (waitForUser) {
        let whatProperty = prompt(
          `por favor ingrese cual propiedad quiere mejorar a mitad de precio solo una ves (no tildes)${checkOwnProperty(
            player
          )}`
        );
        for (let p of player.propertyOn) {
          if (accentsTidy(whatProperty) == p.name) {
            waitForUser = false;
            if (p.numOfUpSouth != 3 && p.numOfUpNorth === p.numOfUpSouth) {
              p.numOfUpSouth++;
              paying(fmi, p.upgradeSouth1 / 2, 1);
              break;
            }
            if (p.numOfUpSouth != 3 && p.numOfUpSouth > p.numOfUpNorth) {
              p.numOfUpNorth++;
              paying(fmi, p.upgradeNorth1 / 2, 1);
            }
          }
        }
      }
    } else alert("Lo siento no tines niguna propierdad");
    switchActivePlayer();
  }
  //   switchActivePlayer();
}

function rollingNacional() {
  if (players[activePlayer].mapPosition === 24) {
    if (checkOwnProperty(fmi)) {
      let waitForUser = true;
      while (waitForUser) {
        let whatProperty = prompt(
          `por favor ingrese cual propiedad quiere (no tildes)${checkOwnProperty(
            fmi
          )}`
        );
        for (let p of fmi.propertyOn) {
          if (accentsTidy(whatProperty) == p.name) {
            waitForUser = false;
            getProp(fmi, p);
            p.numOfUpSouth = 1;
          }
        }
      }
    } else alert("Lo siento todas las propiedades ya fueron vendidas");
    switchActivePlayer();
  }
}
