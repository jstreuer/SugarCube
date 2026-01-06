var lake = {

    animationtimer : 0,

    description : "You find yourself on the banks of a calm lake.",

    water : 0,
    waterScoopSize : 50,
    waterMax : 50,
    waterDrinkSize : 50,

    storyChapterCounter : 0,
    storyProgressCounter : 0,

    onload : function(){
        // Set initial description
        this.setDescription(this.description);
    },


    // Setters
    setDescription : function(value){
        this.description = value;
        htmlInteraction.setInnerHtml("lakedescription", value);
    },

    setWater : function(value){
        this.water = Math.max(0,value);
        if(value !== 0) message = "You are carrying " + this.water + "ml of water.";
        else message = "You are carrying no water.";
        htmlInteraction.setInnerHtml("water", message);
    },

    // Functions
    scoopWater : function(){
        if(this.water + this.waterScoopSize > this.waterMax){
            this.setDescription("You cannot carry any more water.");
            return;
        }
        this.setWater(this.water + this.waterScoopSize);
        htmlInteraction.showButton("dropwater");
        this.setDescription("You scoop up some water with you hands.");
    },
    dropWater : function(){
        if(this.water == 0){
            this.setDescription("You are not carrying any water.");
            return;
        }
        this.setWater(0);

        if(this.storyChapterCounter == 0){
            this.storyProgressCounter += 1;
            if(this.storyProgressCounter >= 5){
                this.setDescription("You drop the water back into the lake. You are getting thirsty.");
                htmlInteraction.showButton("drinkwater");
                return;
            }
        }

        this.setDescription("You drop the water back into the lake.");
    },
    drinkWater : function(){
        if(this.water == 0){
            this.setDescription("Your mouth does not reach the lake.");
            return;
        }
        this.setWater(this.water - this. waterDrinkSize);

        if(this.storyChapterCounter == 0){
            this.storyChapterCounter += 1
            this.setDescription("How refreshing! You take a look at the beautiful meadow that surrounds you. You see a bucket, washed up on the lakeside.");
            return;
        }
        this.setDescription("You drink some of your water.");
    },

    animation : function(){
        this.animationtimer = this.animationtimer + 1;
        if(this.animationtimer == 30){
            this.animationtimer = 0;
            htmlInteraction.showButton("scoopwater");
        }
        wave1 = "   ";
        wave2 = "   ";
        if(this.animationtimer == 6) wave2 = "-^-";
        else if(this.animationtimer == 7) wave2 = " - ";
        else if(this.animationtimer == 11) wave1 = "-^-";
        else if(this.animationtimer == 12) wave1 = " - ";
        htmlInteraction.setInnerHtml("lakewave1", wave1);
        htmlInteraction.setInnerHtml("lakewave2", wave2);
    }
}