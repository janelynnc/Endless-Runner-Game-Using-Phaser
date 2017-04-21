// This is the Boot state.
var myGame=myGame || {};
myGame.Boot=function(){};

// This loads the assets for the loading screen.
myGame.Boot.prototype={
	preload: function(){
		// This is the asset used in loading screen.
		this.load.image('preloadbar','assets/img/Loading_bar.png');
	},
	create: function(){
		// The background is white.
		this.game.stage.backgroundColor='#fff';
		
		// The is for physics for movement.
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		// Afterwards, the next state is preloading, so the loading bar will show.
		this.state.start('Preload');
	}
};