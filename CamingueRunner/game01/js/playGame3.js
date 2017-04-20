// This is the game state where the player can actually play.
var myGame=myGame || {};

myGame.playGame3=function(){};
myGame.playGame3.prototype={
	

	create: function(){
		this.music3=new Phaser.Sound(this.game, 'gameMusic3', 1, true);
		this.music3.play();
		
		this.score_music3=new Phaser.Sound(this.game, 'scorePointSound', 1, false);
		
	    // This is for making the background look "endless" and repeating.
		this.background=this.game.add.tileSprite(0,0,this.game.world.width, this.game.world.height,'backdrop3');
	
	    this.tileWidth=this.game.cache.getImage('ground').width;
		this.tileHeight=this.game.cache.getImage('ground').height;
		
	    this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.platforms=this.game.add.group();
		
	    // We will enable physics for any object that is created in this group
	    this.platforms.enableBody=true;
		
		// create player
		this.player=this.game.add.sprite(0, this.game.world.height - 500, 'tofuWitch');
		// the player is always animated
		this.player.animations.add('walk',[0,1,2,3,4],10, true);
		this.player.animations.play('walk');
		// The player starts with a score of 0
		this.score=0;
		// enabling physics for player
		this.game.physics.arcade.enable(this.player);
		this.player.body.bounce.y=0.2;
	    this.player.body.gravity.y=0;
		
	    this.platforms=this.game.add.group();
	
	    // We will enable physics for any object that is created in this group
	    this.platforms.enableBody=true;
	
	    // This is where we create the ground
	    var ground = this.platforms.create(0, 600, 'ground');
		this.platforms.createMultiple(250, 'ground');
	
	    // Scale it to fit the width of the game (the original sprite is 400x32 in size)
     	ground.scale.setTo(2, 2);
    	ground.body.immovable = true;

		// creating the groups
		this.grounds=this.game.add.group();
		this.stars=this.game.add.group();
		this.stars.enableBody = true;

		// The score will update until the player dies. Every time a new bar spawns, the score will update.
		// My idea was having it kind of like a timer, so the score will increase as long as the player is 
		// alive. Like a timer.
		this.scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
        this.cursors = this.game.input.keyboard.createCursorKeys();
		this.timer=this.game.time.events.loop(1500, this.addMultipleGrounds,this);
		this.timer=this.game.time.events.loop(1500, this.addStars,this);
	},
	
	// This function will add stars to the screen.
	addStars: function(){
		var star = this.game.add.sprite(800, this.game.world.randomY-64, 'starSpell');
        this.stars.add(star);
		star.body.velocity.x=-400;
		star.checkWorldBounds=true;
		star.outOfBoundsKill=true;
	},
		
    // This function will add grounds/platforms/obstacles to the screen.
	addGround: function(x,y){
		var ground=this.game.add.sprite(x,y,'ground');
		this.grounds.add(ground);
		this.game.physics.arcade.enable(ground);
		ground.body.velocity.x=-600;
		ground.body.immovable=true;
		ground.checkWorldBounds=true;
		ground.outOfBoundsKill=true;
	},
	addMultipleGrounds: function(){
		var space=Math.floor(Math.random()*5)+1;
		for (var i=0; i<10;i++){
			if(i!=space && i!=space+1){
				this.addGround(800,i*60);
			}
		}
		// This updates the score.
		this.score+=1;
		this.score_music3.play();
	    this.scoreText.setText ('Score: ' + this.score);
	},

	update: function(){
		this.background.tilePosition.x-=8;
		//this.game.physics.arcade.collide(this.player, this.stars,this.collectStar,null,this);
		//this.game.physics.arcade.overlap(this.player, this.star, this.collectStar, null, this);
		this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
		this.game.physics.arcade.collide(this.player, this.grounds);
		this.player.body.velocity.x = 0;
		if (this.cursors.down.isDown){
		// Move down
		   this.player.body.velocity.y=150;
		}
		if (this.cursors.up.isDown){
	    	this.player.body.velocity.y=-150;
	    }else{	
		    this.player.animations.play('walk');
		}
		// This is facial animation change when the player hits the up button
		if(this.cursors.up.isDown||this.cursors.down.isDown){
			this.player.animations.stop();
			this.player.frame=5;
		} 
		// If the player falls off the screen, go to the Game Over Screen.
		if(this.player.y>this.game.world.height || this.player.x<0 || this.player.y<0){
		   this.goToGameOver();
		}
		
	},

	// This is a function that will switch from the game state to the Game Over state.
	goToGameOver: function(){
		this.music3.stop();
		this.game.state.start('GameOver');
	},
	collectStar: function(player, star){
	// Removes the star from the screen and updates score
			star.kill();
			this.score += 5;
	        this.score_music3.play();
	        this.scoreText.setText ('Score: ' + this.score);
	},
};