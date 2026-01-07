var lake = {

    animationtimer : 0,

    water : 0,
    waterScoopSize : 50,
    waterMax : 50,
    waterDrinkSize : 50,

    storyChapterCounter : 0,
    storyProgressCounter : 0,

    onload : function(){
        // Set initial message
        message.print("lake","You find yourself on the banks of a calm lake.");
    },


    // Setters
    setWater : function(value){
        this.water = Math.max(0,value);
        if(value !== 0) text = "You are carrying " + this.water + "ml of water.";
        else text = "You are carrying no water.";
        htmlInteraction.setInnerHtml("water", text);
    },

    // Functions
    scoopWater : function(){
        if(this.water + this.waterScoopSize > this.waterMax){
            message.print("lake","You cannot carry any more water.");
            return;
        }
        this.setWater(this.water + this.waterScoopSize);
        htmlInteraction.showButton("dropwater");
        message.print("lake","You scoop up some water with you hands.");
    },
    dropWater : function(){
        if(this.water == 0){
            message.print("lake","You are not carrying any water.");
            return;
        }
        this.setWater(0);

        if(this.storyChapterCounter == 0){
            this.storyProgressCounter += 1;
            if(this.storyProgressCounter >= 5){
                message.print("lake","You drop the water back into the lake. You are getting thirsty.");
                htmlInteraction.showButton("drinkwater");
                return;
            }
        }

        message.print("lake","You drop the water back into the lake.");
    },
    drinkWater : function(){
        if(this.water == 0){
            message.print("lake","Your mouth does not reach the lake.");
            return;
        }
        this.setWater(this.water - this. waterDrinkSize);

        if(this.storyChapterCounter == 0){
            this.storyChapterCounter += 1
            message.print("lake","How refreshing! You take a look at the beautiful meadow that surrounds you.\nYou see a bucket, washed up on the lakeside.");
            htmlInteraction.setElementVisibility("washedupbucket",true);
            htmlInteraction.showButton("getbucket");
            return;
        }
        message.print("lake","You drink some of your water.");
    },

    getBucket : function(){
        htmlInteraction.setElementVisibility("washedupbucket",false);
        htmlInteraction.setElementVisibility("inventorybucket",true);
        htmlInteraction.hideButton("getbucket");
        message.print("lake","You walk over to the bucket to pick it up.\nIt looks small, might be a toy bucket.\nYou pick it up, walk back, and step back into the water.");
        this.waterMax = 1000;
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