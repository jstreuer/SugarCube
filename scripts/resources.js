var resources = {

    // Variables
    sugar : 0,
    sugarPerSecond : 1,

    saliva : 0,
    sugarWater : 0,
    evaporationSpeed : 1,
    amylase : 0,

    rockCandy : 0,
    sugarCube : 0,
    candy : 0,
    lollipop : 0,
    jellybabies : 0,
    
    energy : 0,
    lives : 0,

    // Functions
    onload : function(){
        this.setSugar(0); // We first have 0 sugar, this sets the text
        htmlInteraction.showButton("debug");
    },

    // Setters
    setSugar : function(value){
        this.sugar = value;
        
        if(this.sugar !== 0) htmlInteraction.setInnerHtml("sugar", "There is " + this.sugar + " sugar on the pile!");
        else htmlInteraction.setInnerHtml("sugar", "There is no sugar pile...");
    
        if(this.sugar >= 10) htmlInteraction.showButton("lick");
        if(this.sugar >= 20) htmlInteraction.showButton("lick_qrt");
    },
    setSaliva : function(value){
        this.saliva = value;
        htmlInteraction.setInnerHtml("saliva", "You have " + this.saliva + "ml saliva. Yuck.");
    },
    setSugarWater : function(value){
        this.sugarWater = value;
        htmlInteraction.setInnerHtml("sugarwater", "You have " + this.sugarWater + "ml sugar water.");
    },
    setAmylase : function(value){
        this.amylase = value;
        htmlInteraction.setInnerHtml("amylase", "You have " + this.amylase + " amylase molecules.");
    },

    setRockCandy : function(value){
        this.rockCandy = value;
        htmlInteraction.setInnerHtml("rockcandy", "You have " + this.rockCandy + " chunks of rock candy!");
    },
    setSugarCube : function(value){
        this.sugarCube = value;
        htmlInteraction.setInnerHtml("sugarcubes", "You have " + this.sugarCube + " sugarcubes!");
    },
    setCandy : function(value){
        this.candy = value;
        htmlInteraction.setInnerHtml("candies", "You have " + this.candy + " candies!");
    },
    setLollipop : function(value){
        this.lollipop = value;
        htmlInteraction.setInnerHtml("lollipops", "You have " + this.lollipop + " lollipops!");
    },
    setJellyBabies : function(value){
        this.jellybabies = value;
        htmlInteraction.setInnerHtml("jellybabies", "You have " + this.jellybabies + "... Jelly Babies..?");
    },

    
    setEnergy : function(value){
        this.energy = value;
        htmlInteraction.setInnerHtml("energy", "You have " + this.energy + " energy!");
    },
    setLives : function(value){
        this.lives = value;
        htmlInteraction.setInnerHtml("lives", "You have " + this.lives + " lives!");
    },

    // Interval based
    increaseSugar : function(){
        this.setSugar(this.sugar + this.sugarPerSecond);
    },
    evaporateLiquids : function(){
        if(random.passRandomFloat(this.saliva/100)) this.setSaliva(this.saliva - this.evaporationSpeed);
        if(random.passRandomFloat(this.sugarWater/100)){
            this.setSugarWater(this.sugarWater - this.evaporationSpeed);
            this.setRockCandy(this.rockCandy + this.evaporationSpeed);
        }
    },

    // Button events
    lickAll : function(){
        this.lickNumber(this.sugar);
    },
    lickQuarter : function(){
        this.lickNumber(Math.floor(this.sugar/4));
    },
    lickNumber : function(value){
        // 10% change of getting sugar water.
        sugarWaterGetFloat = value/10;
        sugarWaterGet = Math.floor(sugarWaterGetFloat);
        sugarWaterGetRandom = sugarWaterGetFloat - sugarWaterGet;
        if(random.passRandomFloat(sugarWaterGetRandom)) sugarWaterGet = sugarWaterGet + 1;
        
        // If statement for a rare scenario where some1 licks quarter and no sugar watter is gotten.
        if(sugarWaterGet !== 0) this.setSugarWater(this.sugarWater + sugarWaterGet);
        this.setSaliva(this.saliva + value - sugarWaterGet);
        this.setSugar(this.sugar - value);
    },

    // Debug button
    debug : function(){
            this.setSugar(10000000);

            this.setSaliva(1000);
            this.setSugarWater(200);
            this.setAmylase(69);

            this.setRockCandy(20);
            this.setSugarCube(10);
            this.setCandy(30);
            this.setLollipop(40);
            this.setJellyBabies(50);

            this.setEnergy(100);
            this.setLives(5);
    }
}
