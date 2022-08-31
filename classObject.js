class Player {
  constructor(name, money, goldBar, img, startTurn, displayImg) {
    this.name = name;
    this.propertyOn = [];
    this.money = money;
    this.goldBar = goldBar;
    this.mapPosition = 40;
    this.lastPosition = 40;
    this.img = img;
    this.startTurn = startTurn;
    this.finalTurn = false;
    this.notCollect = false;
    this.interest20 = false;
    this.displayImg = displayImg;
    this.militaryCoup = false;
    this.capitalFlightSaver = false;
    this.noPlay = false;
    this.turnWOplayCount = 0;
    this.rolling = false;
  }
}

class Property {
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
const fmi = new Player("FMI", 120000, 0, null, null, "fmi_img.png");

// property
const azucar = new Property(
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
const banano = new Property(
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
const cacao = new Property(
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
const algodon = new Property(
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
const tabaco = new Property(
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
const cafe = new Property(
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
const pesca = new Property(
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
const ganado = new Property(
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
const cobre = new Property(
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
const estano = new Property(
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
const hierro = new Property(
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
const petroleo = new Property(
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
