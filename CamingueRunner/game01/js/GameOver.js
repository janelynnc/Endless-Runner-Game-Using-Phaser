// This is the state for Game Over when the player dies.
myGame.GameOver=function(){};
myGame.GameOver.prototype={
	
	create: function(){
		// This will show the background for Game Over
		this.game.add.sprite(0, 0, 'gameOver');
		// This is for creating a button so the player can click on it to switch states to the game screen.
		button=this.game.add.button(250, 500,'menuButton', actionOnClick);
		button.scale.setTo(2, 2);
		
		// This is a demonstration of creating my own text.
	
		var text="You died.";
		var style={font: "30px Georgia", fill: "#fff", align: "center"};
		var t=this.game.add.text(this.game.width/2, this.game.height/2 +180, text, style);
		t.anchor.set(0.5);
		
	 // This is a click function so that what the button is clicked, the player will play.	
     function actionOnClick(){
		this.game.state.start('MainMenu');
	 }
	},
	update: function(){
		
	}
	
};

		