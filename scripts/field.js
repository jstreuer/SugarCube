var field = {

    seeds : 0,
    wheat : 0,

    setSeeds : function(value){
        this.seeds = Math.max(0,value);
        buttons.checkSeeds();

        if(value > 1) text = "You have " + value + " seeds.";
        else if(value == 1) text = "You have one seed";
        else text = "You have no seeds.";
        htmlInteraction.setInnerHtml("seeds", text);
    },
    setWheat : function(value){
        this.wheat = value;
        if(value > 0) text = "You have " + value + " wheat.";
        else text = "You have no wheat.";
        htmlInteraction.setInnerHtml("wheat", text);
    },

    onload : function(){
        // Set initial message
        message.print("fieldtitle","A grassy field");
        message.print("fielddescription","");
        message.print("fieldevent","");
    },

    secondInterval : function(){
        farm.secondInterval();
    },

    plantSeed : function(){
        farm.setSeedsPlanted(farm.seedsPlanted + this.seeds);
        this.setSeeds(0);
    },

    harvest : function(){
        harvest = farm.wheatReady;
        farm.setWheatReady(0);
        this.setWheat(harvest);
        this.setSeeds(harvest * 2);
        message.print("fielddescription","You harvest " + harvest + " wheat and get " + harvest * 2 + " seeds!");
    }
}