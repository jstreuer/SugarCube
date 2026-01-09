var meadow = {

    seedsOnGround : 0,
    peanuts : 0,
    peanutsOnGround : 0,
    birdSpawnTimer : 0,

    onload : function(){
        // Set initial message
        message.print("meadowtitle","The grassy meadow");
        message.print("meadowdescription","");
        message.print("meadowevent","");
    },

    animation : function(){
        bird.animation();
    },

    // Setters
    setSeedsOnGround : function(value){
        this.seedsOnGround = Math.max(0,value);
        buttons.checkGround();
    },
    setPeanuts : function(value){
        this.peanuts = Math.max(0,value);
        buttons.checkPeanuts();

        if(value > 1) text = "You have " + this.peanuts + " peanuts.";
        else if(value == 1) text = "You have one peanut";
        else text = "You have no peanuts.";
        htmlInteraction.setInnerHtml("peanuts", text);
    },
    setPeanutsOnGround : function(value){
        this.peanutsOnGround = Math.max(0,value);
        buttons.checkGround();
    },

    dropOnGround : function(){
        this.setSeedsOnGround(this.seedsOnGround + 1);
        this.setPeanutsOnGround(this.peanutsOnGround + 1);
    },

    secondInterval : function(){
        if(!bird.present && this.birdSpawnTimer > 0) this.birdSpawnTimer -= 1;
        if(!bird.present &&this.birdSpawnTimer == 0) bird.spawn();
    },

    setBirdSpawnTimer(){
        this.birdSpawnTimer = 1; // 120, two minutes should be good
    },

    // Functions
    investigate : function(){
        field.setSeeds(field.seeds + this.seedsOnGround);
        this.setSeedsOnGround(0);
        this.setPeanuts(this.peanuts + this.peanutsOnGround);
        this.setPeanutsOnGround(0);
        message.print("meadowdescription","You investigate and find some things.");
        message.print("meadowevent","");
    }
}