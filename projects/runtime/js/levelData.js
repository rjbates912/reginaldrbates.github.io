var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 120 },
          { type: "sawblade", x: 700, y: groundY - 20 },
          { type: "sawblade", x: 900, y: groundY - 120 },
          { type: "SpikeTrap", x: 1200, y: groundY - 30 },
          { type: "SpikeTrap2", x: 1500, y: groundY - 30 },
          { type: "enemy", x: 600, y: groundY - 50 },
          { type: "enemy2", x: 900, y: groundY - 50 },
          { type: "enemy3", x: 1100, y: groundY - 50 },
          { type: "enemy4", x: 1400, y: groundY - 50 },
          { type: "reward", x: 3600, y: groundY - 150 },
          { type: "marker", x: 4000, y: groundY - 50 },

        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 20 },
          { type: "sawblade", x: 600, y: groundY - 120 },
          { type: "sawblade", x: 900, y: groundY - 20 },
          { type: "enemy5", x: 2100, y: groundY - 50 },
          { type: "enemy6", x: 1500, y: groundY - 50 },
          { type: "enemy7", x: 1700, y: groundY - 50 },
          { type: "enemy8", x: 1100, y: groundY - 50 },
          { type: "SpikeTrap", x: 1200, y: groundY - 30 },
          { type: "SpikeTrap2", x: 1500, y: groundY - 30 },
          { type: "reward", x: 2600, y: groundY - 50 },
          { type: "marker", x: 4000, y: groundY - 50 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
