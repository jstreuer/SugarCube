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
    }
}