var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createSawBlade(x, y){
      // code to spawn the obstacle
      var hitZoneSize = 25; // the area where Hallebot is suppose to be hit
      var damageFromObstacle = 10; // how much health the obstacle takes away from hitting Hallebot
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone); // the area on the obstacle where Hallebot can be hit
      var obstacleImage = draw.bitmap("img/sawblade.png"); // image of the obstacle
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.rotationalVelocity = 10; // makes the obstacle spin
    }
    
    function createSpikeTrap(x, y){ 
      // code to spawn the obstacle
      var hitZoneSize = 25; // the area where Hallebot is suppose to be hit
      var damageFromObstacle = 10; // how much health the obstacle takes away from hitting Hallebot
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone); // the area on the obstacle where Hallebot can be hit
      var obstacleImage = draw.bitmap("img/SpikeTrap.png"); // image of the obstacle
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -20;
      obstacleImage.y = -30;
      obstacleImage.scaleX = 0.5;
      obstacleImage.scaleY = 0.5;
    }
    
    function createSpikeTrap2(x, y){
      // code to spawn the obstacle
      var hitZoneSize = 25; // the area where Hallebot is suppose to be hit
      var damageFromObstacle = 10; // how much health the obstacle takes away from hitting Hallebot
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone); // the area on the obstacle where Hallebot can be hit
      var obstacleImage = draw.bitmap("img/SpikeTrap.png"); // image of the obstacle
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -20;
      obstacleImage.y = -30;
      obstacleImage.scaleX = 0.5;
      obstacleImage.scaleY = 0.5;
    }

    function createEnemy(x, y){
      // code to spawn the enemy
      var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
      var redSquare = draw.bitmap("img/Goomba (1).png"); // image of the enemy showing what it looks like
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = -4; // speed of the enemy on how fast or slow it runs
      enemy.rotationalVelocity = 0;
      redSquare.scaleX = 0.3;
      redSquare.scaleY = 0.3;
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10) // how much health Hallebot loses when hit
      };

      enemy.onProjectileCollision = function(){
        game.increaseScore(2000); // gains points when shot by Hallebot
        enemy.fadeOut();
        // enemy.shrink()
        // enemy.flyTo(0, 0)
    }
 }

 function createEnemy2(x, y){
  // code to spawn the enemy
  var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
  var redSquare = draw.bitmap("img/Spike.png"); // image of the enemy
  redSquare.x = -25;
  redSquare.y = -25;
  enemy.addChild(redSquare);
  enemy.x = x;
  enemy.y = y;
  game.addGameItem(enemy);
  enemy.velocityX = -4; // speed of the enemy
  enemy.rotationalVelocity = 0;
  redSquare.scaleX = 0.3;
  redSquare.scaleY = 0.3;
  enemy.onPlayerCollision = function(){
    game.changeIntegrity(-10) // how much health Hallebot loses
  };

  enemy.onProjectileCollision = function(){
    game.increaseScore(2000); // gains points when shot by Hallebot
    enemy.fadeOut();
    // enemy.shrink()
    // enemy.flyTo(0, 0)
  }
}

  function createEnemy3(x, y){
    // code to spawn the enemy
    var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
    var redSquare = draw.bitmap("img/KoopaTroopa (1).png"); // image of the enemy
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -4; // speed of the enemy
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.3;
    redSquare.scaleY = 0.3;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10) // how much health Hallebot loses
    };
    
    enemy.onProjectileCollision = function(){
      game.increaseScore(2000); // gains points when shot by Hallebot
      enemy.fadeOut();
      // enemy.shrink()
      // enemy.flyTo(0, 0)
    }
    
  }

  function createEnemy4(x, y){
    // code to spawn the enemy
    var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
    var redSquare = draw.bitmap("img/BulletBill.png"); // image of the enemy
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -4; // speed of the enemy
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.3;
    redSquare.scaleY = 0.3;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10) // how much health Hallebot loses
    };
    
    enemy.onProjectileCollision = function(){
      game.increaseScore(2000); // gains points when shot by Hallebot
      enemy.fadeOut();
      // enemy.shrink()
      // enemy.flyTo(0, 0)
    }
    
  }

  function createEnemy5(x, y){
    // code to spawn the enemy
    var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
    var redSquare = draw.bitmap("img/Goomba (1).png"); // image of the enemy
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -4; // speed of the enemy
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.3;
    redSquare.scaleY = 0.3;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10) // how much health Hallebot loses
    };
    
    enemy.onProjectileCollision = function(){
      game.increaseScore(2000); // gains points when shot by Hallebot
      enemy.fadeOut();
      // enemy.shrink()
      // enemy.flyTo(0, 0)
    }
    
  }

  function createEnemy6(x, y){
    // code to spawn the enemy
    var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
    var redSquare = draw.bitmap("img/Spike.png"); // image of the enemy
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -4; // speed of the enemy
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.3;
    redSquare.scaleY = 0.3;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10) // how much health Hallebot loses
    };
    
    enemy.onProjectileCollision = function(){
      game.increaseScore(2000); // gains points when shot by Hallebot
      enemy.fadeOut();
      // enemy.shrink()
      // enemy.flyTo(0, 0)
    }
    
  }

  function createEnemy7(x, y){
    // code to spawn the enemy
    var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
    var redSquare = draw.bitmap("img/KoopaTroopa (1).png"); // image of the enemy
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -4; // speed of the enemy
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.3;
    redSquare.scaleY = 0.3;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10) // how much health Hallebot loses
    };
    
    enemy.onProjectileCollision = function(){
      game.increaseScore(2000); // gains points when shot by Hallebot
      enemy.fadeOut();
      // enemy.shrink()
      // enemy.flyTo(0, 0)
    }
    
  }

  function createEnemy8(x, y){
    // code to spawn the enemy
    var enemy = game.createGameItem("enemy", 25); // causes damage to Hallebot
    var redSquare = draw.bitmap("img/BulletBill.png"); // image of the enemy
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -4; // speed of the enemy
    enemy.rotationalVelocity = 0;
    redSquare.scaleX = 0.3;
    redSquare.scaleY = 0.3;
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10) // how much health Hallebot loses
    };
    
    enemy.onProjectileCollision = function(){
      game.increaseScore(2000); // gains points when shot by Hallebot
      enemy.fadeOut();
      // enemy.shrink()
      // enemy.flyTo(0, 0)
    }
    
  }
    function createReward(x, y){
      // code to spawn the reward
      var reward = game.createGameItem("enemy", 25); 
      var redSquare = draw.bitmap("img/PowerUp.png"); // image of the reward
      redSquare.x = -45;
      redSquare.y = -45;
      reward.addChild(redSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -4; // speed of the reward
      reward.rotationalVelocity = 0 ;
      redSquare.scaleX = 0.1;
      redSquare.scaleY = 0.1;
      reward.onPlayerCollision = function(){
        game.changeIntegrity(+10) // gains health
        reward.fadeOut();
        game.increaseScore(2000); // gains points
      };

      reward.onProjectileCollision = function(){
        game.increaseScore(2000);
        reward.fadeOut();
        // reward.shrink()
        // reward.flyTo(0, 0)
    }
 }

 function createMarker(x, y){
  // code to spawn the marker
  var marker = game.createGameItem("marker", 25); // marks the end of the level to the next level
  var blueSquare = draw.bitmap("img/Pipe.png"); // image of the marker
  blueSquare.x = -40;
  blueSquare.y = -40;
  marker.addChild(blueSquare);
  marker.x = x;
  marker.y = y;
  game.addGameItem(marker);
  marker.velocityX = -4; // speed of the marker
  marker.rotationalVelocity = 0;
  blueSquare.scaleX = 0.5;
  blueSquare.scaleY = 0.5;
  marker.onPlayerCollision = function() {
    game.changeIntegrity(+10) // gains health
    startLevel(); // starts the next level
    marker.fadeOut();
  };
 }

  // function calls
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
    for (var i = 0; i < levelObjects.length; i++){
      var element = levelObjects[i];
      if (element.type === "sawblade"){
        createSawBlade(element.x, element.y);
      }
      if (element.type === "SpikeTrap"){
        createSpikeTrap(element.x, element.y);
      }
      if (element.type === "SpikeTrap2"){
        createSpikeTrap(element.x, element.y);
      }
      if (element.type === "enemy"){
        createEnemy(element.x, element.y);
      }
      if (element.type === "enemy2"){
        createEnemy2(element.x, element.y);
      }
      if (element.type === "enemy3"){
        createEnemy3(element.x, element.y);
      }
      if (element.type === "enemy4"){
        createEnemy4(element.x, element.y);
      }
      if (element.type === "enemy5"){
        createEnemy(element.x, element.y);
      }
      if (element.type === "enemy6"){
        createEnemy2(element.x, element.y);
      }
      if (element.type === "enemy7"){
        createEnemy3(element.x, element.y);
      }
      if (element.type === "enemy8"){
        createEnemy4(element.x, element.y);
      }
      if (element.type === "reward"){
        createReward(element.x, element.y);
      }
      if (element.type === "marker"){
        createMarker(element.x, element.y);
      }
    }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
