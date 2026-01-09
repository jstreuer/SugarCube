var main = {

    // Functions
    onload : function(){
        message.print("DEBUG","DEBUG");
        
        // Prevents some stupid refresh bugs of the browser
        htmlInteraction.enableButtonClass("home_button");
        
        // Various loads
        lake.onload();
        meadow.onload();
        field.onload();
        resources.onload();
        // Set recurring events
        window.setInterval(this.deciSecondInterval.bind(this), 100);
        window.setInterval(this.secondInterval.bind(this), 1000);
   },

    deciSecondInterval : function(){
        // Fast interval
        lake.animation();
        meadow.animation();

        resources.evaporateLiquids();
    },

    secondInterval : function(){
        // Regular interval
        resources.increaseSugar();
        meadow.secondInterval();
        field.secondInterval();
    },

    // Debug button
    debug : function(){
        story.storyChapterCounter = 6;
        lake.getBucket();
        lake.equipBucket();
        lake.water = 50;
        lake.drinkWater();


        resources.setSugar(10000000);

        resources.setSaliva(1000);
        resources.setSugarWater(200);
        resources.setAmylase(69);

        resources.setRockCandy(20);
        resources.setSugarCube(10);
        resources.setCandy(30);
        resources.setLollipop(40);
        resources.setJellyBabies(50);

        resources.setEnergy(100);
        resources.setLives(5);
    }

  };

window.onload = main.onload.bind(main);
