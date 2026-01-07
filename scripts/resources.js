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

    // Setters
    setSugar : function(value){
        this.sugar = Math.max(0,value);
        if(value !== 0) text = "There is " + this.sugar + " sugar on the pile!";
        else text = "There is no sugar pile...";
        htmlInteraction.setInnerHtml("sugar", text);
    
        if(this.sugar >= 10) htmlInteraction.showButton("lick");
        if(this.sugar >= 20) htmlInteraction.showButton("lick_qrt");
    },
    setSaliva : function(value){
        this.saliva = Math.max(0,value);
        text = "You have " + this.saliva + "ml saliva. Yuck.";
        htmlInteraction.setInnerHtml("saliva", text);
    },
    setSugarWater : function(value){
        this.sugarWater = Math.max(0,value);
        text = "You have " + this.sugarWater + "ml sugar water.";
        htmlInteraction.setInnerHtml("sugarwater", text);
    },
    setAmylase : function(value){
        this.amylase = Math.max(0,value);
        if(value == 1) text = "You have a single amylase molecule.";
        else text = "You have " + this.amylase + " amylase molecules.";
        htmlInteraction.setInnerHtml("amylase", text);
    },

    setRockCandy : function(value){
        this.rockCandy = Math.max(0,value);
        if(value == 1) text = "You have a chunk of rock candy!";
        else text = "You have " + this.rockCandy + " chunks of rock candy!";
        htmlInteraction.setInnerHtml("rockcandy", text);
        htmlInteraction.setElementVisibility("rockcandy_icon",true);
        htmlInteraction.showButton("chiselrockcube");
        htmlInteraction.showButton("chiselrocksphere");
    },
    setSugarCube : function(value){
        this.sugarCube = Math.max(0,value);
        if(value == 1) text = "You have a sugarcube!";
        else text = "You have " + this.sugarCube + " sugarcubes!";
        htmlInteraction.setInnerHtml("sugarcubes", text);
    },
    setCandy : function(value){
        this.candy = Math.max(0,value);
        if(value == 1) text = "You have a piece of candy!";
        else text = "You have " + this.candy + " pieces of candy!";
        htmlInteraction.setInnerHtml("candies", text);
    },
    setLollipop : function(value){
        this.lollipop = Math.max(0,value);
        if(value == 1) text = "You have a lollipop!";
        else text = "You have " + this.lollipop + " lollipops!";
        htmlInteraction.setInnerHtml("lollipops", text);
    },
    setJellyBabies : function(value){
        this.jellybabies = Math.max(0,value);
        if(value == 1) text = "You have a... Jelly Babies..?";
        else text = "You have " + this.jellybabies + "... Jelly Babies..?";
        htmlInteraction.setInnerHtml("jellybabies", text);
    },

    setEnergy : function(value){
        this.energy = Math.max(0,value);
        htmlInteraction.setInnerHtml("energy", "You have " + this.energy + " energy!");
    },
    setLives : function(value){
        this.lives = Math.max(0,value);
        htmlInteraction.setInnerHtml("lives", "You have " + this.lives + " lives!");
    },

    // Functions
    onload : function(){
        this.setSugar(0); // We first have 0 sugar, this sets the text
        htmlInteraction.showButton("debug");
    },

    // Interval based
    increaseSugar : function(){
        this.setSugar(this.sugar + this.sugarPerSecond);
    },
    evaporateLiquids : function(){
        // Evaporation is sped up by sugarspeed and amylase
        if(this.saliva !== 0 && random.passRandomFloat(this.saliva/100)) this.setSaliva(this.saliva - this.evaporationSpeed*this.sugarPerSecond);
        if(this.sugarWater !== 0 && random.passRandomFloat(this.sugarWater/100)){
            rockCandyGet = Math.min(this.sugarWater,this.evaporationSpeed*(1+this.amylase));
            this.setSugarWater(this.sugarWater - rockCandyGet);
            this.setRockCandy(this.rockCandy + rockCandyGet);
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
    chiselRockCube : function(){
        this.setRockCandy(this.rockCandy-1);
        this.setSugarCube(this.sugarCube+1);
    },
    chiselRockSphere : function(){
        this.setRockCandy(this.rockCandy-1);
        this.setCandy(this.candy+1);
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
