var meadow = {

    animationtimer : 0,
    birdhead : "&lto ",
    birdheadalt : " o&gt",

    onload : function(){
        // Set initial message
        message.print("meadow","The grassy meadow");
        message.print("meadowevent","");
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