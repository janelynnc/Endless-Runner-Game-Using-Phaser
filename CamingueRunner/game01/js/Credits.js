// This is the state forthe Credits screen.
myGame.Credits=function(){};
myGame.Credits.prototype={
	
	create: function(){
		// This will show the background for the Credits screen.
		this.game.add.sprite(0, 0, 'creditsScreen');
		
		// This is for creating a button so the player can click on it to switch states to go back to the game screen.
		button=this.game.add.button(30, 0,'BackArrow', actionOnClick);
		button.scale.setTo(2, 2);
		
	 // This is a click function so that what the button is clicked, the player will go to the Main Menu.	
     function actionOnClick(){
		this.game.state.start('MainMenu');
	 }
	
	},
	update: function(){
		
	}
	
};

		