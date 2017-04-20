// This is the state for the Level Selection Screen.
myGame.levelSelection=function(){};
myGame.levelSelection.prototype={
	
	create: function(){
		// This will show the background for the Level Selection Screen.
		this.game.add.sprite(0, 0, 'levelSelect');
		
		// This is for creating a button so the player can click on it to switch states to the game screen.
		button=this.game.add.button(285, 120,'toBackdrop1', actionOnClick);
		button=this.game.add.button(285, 240,'toBackdrop2', actionOnClick1);
		button=this.game.add.button(285, 360,'toBackdrop3', actionOnClick2);
		button=this.game.add.button(285, 480,'toBackdrop0', actionOnClick3);
		button=this.game.add.button(20, 0,'BackArrow', actionOnClick4);
		button.scale.setTo(2, 2);
		
	 // This is a click function so that what the button is clicked, the player will play.	
	 // The player gets to choose a level.
     function actionOnClick(){
		this.game.state.start('playGame1');
	 }
	 function actionOnClick1(){
		this.game.state.start('playGame2');
	 }
	 function actionOnClick2(){
		this.game.state.start('playGame3');
	 }
	 function actionOnClick3(){
		this.game.state.start('playGame');
	 }
	 function actionOnClick4(){
		this.game.state.start('MainMenu');
	 }
	},
	update: function(){
		
	}
	
};

		