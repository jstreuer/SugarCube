var main = {

    // Functions
    onload : function(){
        // Set recurring events
        window.setInterval(this.deciSecondInterval.bind(this), 100);
        window.setInterval(this.secondInterval.bind(this), 1000);
   },

    deciSecondInterval : function(){
        // Fast interval
    },

    secondInterval : function(){
        // Regular interval
        sugar.increaseSugar();
    }

  };    

window.onload = main.onload.bind(main);
