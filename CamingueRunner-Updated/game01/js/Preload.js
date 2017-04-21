// This is the preloading state.
var myGame= myGame || {};
// loading the game assets
myGame.Preload=function(){};
myGame.Preload.prototype={
	preload: function(){
		// This will show the preloading bar.
		this.preloadBar=this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);
		
		// load the game assets
		this.load.image('playButton','assets/img/Play_button.png');
		this.load.image('backdrop','assets/img/Backdrop.png');
		this.load.image('titleScreen','assets/img/Title_Screen.png');
		this.load.spritesheet('tofuWitch','assets/img/tofu_witch.png', 64, 58);
		this.load.image('ground','assets/img/bar.png');
		this.load.image('gameOver','assets/img/Game_Over_Screen.png');
		this.load.image('backdrop1','assets/img/Backdrop1.png');
		this.load.image('levelSelect','assets/img/Level_Select_Screen.png');
		this.load.image('toBackdrop1','assets/img/icon_backdrop1.png');
		this.load.image('menuButton','assets/img/Main_Menu_Button.png');
		this.load.audio('gameMusic','assets/audio/Tofu_Witch_Music 2.ogg');
		this.load.audio('scorePointSound','assets/audio/completetask_0.mp3');
		this.load.audio('gameMusic1','assets/audio/BackgroundMusic1.ogg');
		this.load.audio('gameMusic2','assets/audio/Background2.ogg');
		this.load.audio('gameMusic3','assets/audio/background3.ogg');
		this.load.image('backdrop2','assets/img/Backdrop2.png');
		this.load.image('toBackdrop2','assets/img/icon_backdrop2.png');
		this.load.image('backdrop3','assets/img/Backdrop3.png');
		this.load.image('toBackdrop3','assets/img/icon_backdrop3.png');
		this.load.image('toBackdrop0','assets/img/icon_backdrop0.png');
		this.load.image('starSpell','assets/img/star.png');
		this.load.image('creditsButton','assets/img/Credits_button.png');
		this.load.image('howToPlayButton','assets/img/How_To_Play_Button.png');
		this.load.image('Instructions','assets/img/how_to_play_screen.png');
		this.load.image('creditsScreen','assets/img/credits_page.png');
		this.load.image('BackArrow','assets/img/arrow.png');

	},
	// This will take the player to the Main Menu once the assets have loaded and the preload bar is done.
	create: function(){
		this.state.start('MainMenu');
	}
};