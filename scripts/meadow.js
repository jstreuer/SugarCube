var meadow = {

    seeds : 0,
    seedsOnGround : 0,
    peanuts : 0,
    peanutsOnGround : 0,

    onload : function(){
        // Set initial message
        message.print("meadowdescription","");
        message.print("meadowevent","");
    },

    animation : function(){
        bird.animation();
    },

    // Setters
    setSeeds : function(value){
        this.seeds = Math.max(0,value);
        buttons.checkSeeds();

        if(value > 1) text = "You have " + this.seeds + " seeds.";
        else if(value == 1) text = "You have one seed";
        else text = "You have no seeds.";
        htmlInteraction.setInnerHtml("seeds", text);
    },
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

    // Functions
    investigate : function(){
        this.setSeeds(this.seeds + this.seedsOnGround);
        this.setSeedsOnGround(0);
        this.setPeanuts(this.peanuts + this.peanutsOnGround);
        this.setPeanutsOnGround(0);
    }
}