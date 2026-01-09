var farm = {
    
    seedsPlanted : 0,
    wheatReady : 0,
    
    secondCounter : 0,
    minuteCounter : 0,

    setSeedsPlanted : function(value){
        this.seedsPlanted = value;
        if(value > 1) text = "You have " + value + " seeds growing.";
        else if(value == 1) text = "You have one seed growing";
        else text = "You have no seeds growing.";
        htmlInteraction.setInnerHtml("growingseeds", text);
    },
    setWheatReady : function(value){
        this.wheatReady = value;
        message.print("fieldevent","Some wheat is fully grown!");
        buttons.checkGrownWheat();
        
        if(value > 0) text = "You have " + value + " wheat ready for harvest.";
        else text = "You have no wheat ready for harvest.";
        htmlInteraction.setInnerHtml("grownwheat", text);
    },

    secondInterval : function(){
        this.secondCounter += 1;
        // Clear the message
        if(this.secondCounter == 5) message.print("fieldevent","");

        if(this.seedsPlanted > 600){
            seedsgrown = Math.floor(this.seedsPlanted / 600);
            this.setWheatReady(this.wheatReady + seedsgrown);
            this.setSeedsPlanted(this.seedsPlanted - seedsgrown);
        }

        if(this.secondCounter >= 60){
            this.secondCounter = 0;
            this.minuteInterval();
        }
    },

    minuteInterval : function(){
        this.minuteCounter += 1;

        if(this.seedsPlanted >= 10 && this.seedsPlanted < 600){
            seedsgrown = Math.floor(this.seedsPlanted / 10);
            this.setWheatReady(this.wheatReady + seedsgrown);
            this.setSeedsPlanted(this.seedsPlanted - seedsgrown);
        }

        if(this.minuteCounter >= 10){
            this.minuteCounter = 0;
            this.decaminuteInterval();
        }
    },

    decaminuteInterval : function(){
        if(this.seedsPlanted >=1 && this.seedsPlanted < 10){
            this.setWheatReady(this.wheatReady + this.seedsPlanted);
            this.setSeedsPlanted(0);
        }
    },
}