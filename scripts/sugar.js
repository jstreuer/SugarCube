var sugar = {

    // Variables
    number : 0,
    sugarPerSecond : 1,

    // Functions
    onload : function(){
        number.setSugar(0); // We first have 0 sugar
    },

    setSugar : function(value){
        this.number = value;
        
        if(this.number != 0) htmlInteraction.setInnerHtml("sugar", "There is " + this.number + " sugar on the pile!");
        else htmlInteraction.setInnerHtml("sugar", "There is no sugar pile...");
    },

    increaseSugar : function(){
        this.setSugar(this.number + this.sugarPerSecond);
    }
}
