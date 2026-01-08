var bird = {

    animationtimer : 0,
    birdhead : "&lto ",
    birdheadalt : " o&gt",

    present : true, // Start at true, to prevent message

    // Setters
    setPresent : function(bool){
        this.present = bool;
    },

    spawn : function(){
        this.setPresent(true);
        htmlInteraction.setElementVisibility("birds",true);
        message.print("meadowevent","A bird has come to visit!");
    },

    flyAway : function(){
        if(!this.present) return;
        this.setPresent(false);
        htmlInteraction.setElementVisibility("birds",false);
        message.print("meadowevent","The bird flew away!");

        meadow.setSeedsOnGround(1);
        meadow.setPeanutsOnGround(1);
        htmlInteraction.showButton("investigate");
    },

    animation : function(){
        this.animationtimer = this.animationtimer + 1;
        if(this.animationtimer == 30) this.animationtimer = 0;

        rand = random.getRandomFloat();

        birdchirp = "       ";
        if(this.animationtimer == 6){
            if(rand < 0.25) birdchirp = "*chirp*";
            else if(rand < 0.5) birdchirp = "*tweet*";
            else if(rand < 0.75){
                temp = this.birdhead;
                this.birdhead = this.birdheadalt;
                this.birdheadalt = temp;
            }
        }
        htmlInteraction.setInnerHtml("birdhead", this.birdhead);
        htmlInteraction.setInnerHtml("birdchirp", birdchirp);
    }
}