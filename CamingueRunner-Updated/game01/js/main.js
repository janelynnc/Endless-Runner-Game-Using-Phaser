// This is the main.js
// This is where I add in the different states I made in my game.
// I am still thinking about whether or not to add in a GAMEOVER state if the player dies or just go back to 
// the main menu.
// So far, all of the assets are mine and have been created by me solely for this assignment.
var myGame=myGame || {};
myGame.game=new Phaser.Game(800, 600, Phaser.AUTO,'');

myGame.game.state.add('Boot', myGame.Boot); 
myGame.game.state.add('Preload',myGame.Preload);
myGame.game.state.add('MainMenu',myGame.MainMenu);
myGame.game.state.add('playGame',myGame.playGame);
myGame.game.state.add('playGame1',myGame.playGame1);
myGame.game.state.add('playGame2',myGame.playGame2);
myGame.game.state.add('playGame3',myGame.playGame3);
myGame.game.state.add('HowToPlay',myGame.HowToPlay);
myGame.game.state.add('Credits',myGame.Credits);

myGame.game.state.add('levelSelection',myGame.levelSelection);
myGame.game.state.add('GameOver',myGame.GameOver);
// Start off by going to the Boot state.
myGame.game.state.start('Boot');