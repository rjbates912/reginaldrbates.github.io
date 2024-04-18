var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];

    
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'blue');
            background.addChild(backgroundFill);
            
            var marioBG = draw.bitmap("img/Super Mario Background.jpg"); // image of the background
            marioBG.x = 0;
            marioBG.y = -350;
            marioBG.scaleX = 1;
            marioBG.scaleY = 0.85;
            background.addChild(marioBG); // moon is part of the background

            // TODO 2: - Add a moon and starfield
            
            for(var stars = 0; stars < 400; stars++){
                var circle = draw.circle(3, "white", "white", 2); // size of the stars
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }
            
            var moon = draw.bitmap("img/moon.png"); // image of the moon
            moon.x = canvasWidth - 500;
            moon.y = groundY - 400;
            moon.scaleX = 0.4;
            moon.scaleY = 0.4;
            background.addChild(moon); // moon is part of the background
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingColors = ["cyan", "yellow", "red", "purple", "green"];
            for (var i = 0; i < 5; i++) {
                var buildingHeight = 400 * Math.random();
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
              }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); // image of a tree
            tree.x = canvasWidth - 200; 
            tree.y = groundY - 230;
            background.addChild(tree); // tree is part of the background
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 4; // speed of the tree

            if (tree.x < -300) {
            tree.x = canvasWidth; // stopping point and repeating cycle of the tree
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x - 1;

                if(building.x < -100){
                    building.x = canvasWidth;
                }
                // code to do something with each element
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
