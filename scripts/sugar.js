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
    },

    increaseSugar : function(){
        this.setSugar(this.number + this.sugarPerSecond);
    }
}
