var buttons = {

    enableButton : function(value){
        htmlInteraction.enableButton(value);
    },
    disableButton : function(value){
        htmlInteraction.disableButton(value);
    },

    checkWater : function(){
        
        if(lake.water + lake.waterScoopSize <= lake.waterMax || lake.waterScoopSize >= 1000 && lake.water !== lake.waterMax) this.enableButton("scoopwater");
        else this.disableButton("scoopwater");

        if(lake.water > 0) this.enableButton("dropwater");
        else this.disableButton("dropwater");
        
        if(lake.water >= 50) this.enableButton("drinkwater");
        else this.disableButton("drinkwater");
    },

    checkSeeds : function(){
        if(field.seeds !== 0){
            htmlInteraction.showButton("plantseed");
            this.enableButton("plantseed");
        }
        else this.disableButton("plantseed");
    },
    checkGrownWheat : function(){
        if(farm.wheatReady !== 0){
            htmlInteraction.showButton("harvest");
            this.enableButton("harvest");
        }
        else this.disableButton("harvest");
    },
    checkPeanuts : function(){
        
    },
    checkGround : function(){
        if(meadow.seedsOnGround > 0 || meadow.peanutsOnGround > 0) this.enableButton("investigate");
        else this.disableButton("investigate");
    }
}