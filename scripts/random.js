var random = {

    getRandomFloat : function(){
        return Math.random();
    },

    passRandomFloat : function(value){
        return value > this.getRandomFloat();
    }
}