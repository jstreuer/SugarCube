var lake = {

    animationtimer : 0,

    water : 0,
    waterScoopSize : 50,
    waterMax : 50,
    waterDrinkSize : 50,

    onload : function(){
        // Set initial message
        message.print("lake","You find yourself on the banks of a calm lake.");
        message.print("lakeevent","");
    },


    // Setters
    setWater : function(value){
        this.water = Math.max(0,value);
        buttons.checkWater();

        if(value !== 0) text = "You are carrying " + this.water + "ml of water.";
        else text = "You are carrying no water.";
        htmlInteraction.setInnerHtml("water", text);
    },

    // Functions
    scoopWater : function(){
        this.setWater(this.water + this.waterScoopSize);
        htmlInteraction.showButton("dropwater");
        if(this.waterScoopSize == 50 && this.waterMax == 50) message.print("lake","You scoop up some water with your hands.");
        else if(this.waterScoopSize == 50 && this.waterMax == 1000) message.print("lake","You use your hands to scoop some water into your bucket.");
        else if(this.waterScoopSize == 1000 && this.waterMax == 1000) message.print("lake","You scoop up some water with your bucket.");
        else message.print("lake","You scoop up some water.");
        story.increment("scoopwater");
    },
    dropWater : function(){
        droppedAmount = this.water;
        this.setWater(0);
        message.print("lake","You drop the water back into the lake.");
        
        story.increment("dropwater");
        if(droppedAmount >= 1000) story.increment("dropfullbucket");
    },
    drinkWater : function(){
        this.setWater(this.water - this. waterDrinkSize);
        message.print("lake","You drink some of your water. How refreshing!");

        story.increment("drinkwater");
    },

    getBucket : function(){
        this.waterMax = 1000;
        buttons.checkWater();
        message.print("lake","You walk over to the bucket to pick it up.\nIt looks small, might be a toy bucket.\nYou pick it up, walk back, and step back into the water.");

        story.increment("getbucket");
    },
    equipBucket : function(){
        this.waterScoopSize = 1000;
        buttons.checkWater();
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