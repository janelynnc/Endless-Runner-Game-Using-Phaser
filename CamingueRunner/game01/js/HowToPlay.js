// This is the state for the How to Play Screen
myGame.HowToPlay=function(){};
myGame.HowToPlay.prototype={
	
	create: function(){
		// This will show the background for the How to Play Screen
		this.game.add.sprite(0, 0, 'Instructions');
		
		// This is for creating a button so the player can click on it to switch states back to the game screen.
		button=this.game.add.button(30, 9,'BackArrow', actionOnClick);
		button.scale.setTo(2, 2);
		
	 // This is a click function so that what the button is clicked, the player will go to the Main Menu.
     function actionOnClick(){
		this.game.state.start('MainMenu');
	 }
	
	},
	update: function(){
		
	}
	
};

		