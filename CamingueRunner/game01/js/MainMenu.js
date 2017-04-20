// This is the state for a main menu.
myGame.MainMenu=function(){};
myGame.MainMenu.prototype={
	
	create: function(){
		// This will show the background for Main Menu
		this.game.add.sprite(0, 0, 'titleScreen');
	
		// This is for creating a button so the player can click on it to switch states to the game screen.
		button=this.game.add.button(250, 500,'playButton', actionOnClick);
		button.scale.setTo(2, 2);
		button=this.game.add.button(55, 300,'howToPlayButton', actionOnClick1);
		button.scale.setTo(2, 2);
		button=this.game.add.button(460, 300,'creditsButton', actionOnClick2);
		button.scale.setTo(2, 2);
		
		// This is a demonstration of creating my own text.
		var text="Press PLAY to begin!";
		var style={font: "30px Georgia", fill: "#fff", align: "center"};
		var t=this.game.add.text(this.game.width/2, this.game.height/2 +180, text, style);
		t.anchor.set(0.5);
		
	 // This is a click function so that what the button is clicked, the player will be taken to a screen.
	 // The player can go to the level selection screen, the how to play screen, or the credits screen.
     function actionOnClick(){
		this.game.state.start('levelSelection');
		
	 }
	 function actionOnClick1(){
		this.game.state.start('HowToPlay');
		
	 }
	 function actionOnClick2(){
		this.game.state.start('Credits');
		
	 }
	},
	update: function(){
		
	}
	
};

		