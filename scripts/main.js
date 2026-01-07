var main = {

    // Functions
    onload : function(){
        message.print("DEBUG","DEBUG");
        
        // Prevents some stupid refresh bugs of the browser
        htmlInteraction.enableButtonClass("home_button");
        
        // Various loads
        lake.onload();
        resources.onload();
        // Set recurring events
        window.setInterval(this.deciSecondInterval.bind(this), 100);
        window.setInterval(this.secondInterval.bind(this), 1000);
   },

    deciSecondInterval : function(){
        // Fast interval
        lake.animation();

        resources.evaporateLiquids();
    },

    secondInterval : function(){
        // Regular interval
        resources.increaseSugar();
    }

  };    

window.onload = main.onload.bind(main);
