// This is the game state where the player can actually play.
var myGame=myGame || {};

myGame.playGame=function(){};
myGame.playGame.prototype={
	
// not needed?

//var player;
//var cursors;
//var platforms;
//var score = 0;
//var scoreText;

	create: function(){
		
		
	    // This is for making the background look "endless" and repeating.
		this.background=this.game.add.tileSprite(0,0,this.game.world.width, this.game.world.height,'backdrop');
		
      
		////////////////////////////////////////////////////////////////////////////////////////////
	
	this.tileWidth=this.game.cache.getImage('ground').width;
		this.tileHeight=this.game.cache.getImage('ground').height;
		
	    this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.platforms=this.game.add.group();
		
	    // We will enable physics for any object that is created in this group
	    this.platforms.enableBody=true;
		//this.platforms.createMultiple(250, 'ground');
		
/////////////////////////////////////////////////////////////////////////////////////////////////	
		
		// create player
		this.player=this.game.add.sprite(0, this.game.world.height - 500, 'tofuWitch');
		// the player is always animated
		this.player.animations.add('walk',[0,1,2,3,4],10, true);
		this.player.animations.play('walk');
		// player initial score of 0
		this.playerScore=0;
		// enabling physics for player
		this.game.physics.arcade.enable(this.player);
		this.player.body.bounce.y=0.2;
	    this.player.body.gravity.y=430;
				// The platforms group contains the ground and the 2 ledges we can jump on 
	    this.platforms=this.game.add.group();
	
	    // We will enable physics for any object that is created in this group
	    this.platforms.enableBody=true;
	
	    // This is where we create the ground
	    var ground = this.platforms.create(0, this.game.world.height - 100, 'ground');
	
	    // Scale it to fit the width of the game (the original sprite is 400x32 in size)
     	ground.scale.setTo(2, 2);
	
    	// This stops it from falling away when you jump on it
    	ground.body.immovable = true;
    //	this.ground=this.add.tileSprite(0,300, 100, 100, 'ground');
	  var ledge = this.platforms.create(0, 300, 'ground');
	    ledge.body.immovable=true;
		
		this.grounds=this.game.add.group();
	
 	
    	
	
      
       
/////////////////////////////////////////////////////////////////////////////////////////////////
		// I plan to have the player only have 1 life, and if the player gets off screen, the player is dead.
		//this.player.body.collideWorldBounds=true;
		
		// The score will update once I create something to collect.
		this.scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
        this.cursors = this.game.input.keyboard.createCursorKeys();
		
		this.timer=this.game.time.events.loop(1500, this.addRowOfGrounds,this);
	},
	
	////////////////////////
	addOneGround: function(x,y){
		var ground=this.game.add.sprite(x,y,'ground');
		this.grounds.add(ground);
		this.game.physics.arcade.enable(ground);
		ground.body.velocity.x=-200;
		ground.checkWorldBounds=true;
		ground.outOfBoundsKill=true;
	},
	addRowOfGrounds: function(){
		var space=Math.floor(Math.random()*5)+1;
		for (var i=0; i<8;i++)
			if(i!=space && i!=space+1)
				this.addOneGround(400,i*60+10);
			this.score+=1;
			this.labelScore=this.score;
	},
		////////////////////////////////////
	update: function(){
		this.background.tilePosition.x-=8;
		var hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);
		this.game.physics.arcade.collide(this.player, this.grounds);
		this.player.body.velocity.x = 0;
		if (this.cursors.up.isDown && this.player.body.touching.down && hitPlatform){
		
		   // I will comment these out later. I am trying to figure out how to create a different face animation of the 
		   // sprite when jumping and continue to be animated after landing back on the platform.
		   // this.player.animations.stop();
		   // this.player.frame=3;
		   
	    	this.player.body.velocity.y=-350;
  
	       }else{	
		         this.player.animations.play('walk');
	       }
		   
		   // If the player is offscreen, go back to the main menu.
		   // The second argument is used to test the GameOver state.
		   if(this.player.y<0 || this.player.x<0){
			   this.restartGame();
		   }
		
	},
	restartGame: function(){
		this.game.state.start('MainMenu');
	},
};