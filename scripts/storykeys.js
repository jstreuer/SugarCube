var storykeys = {

    storyChapterCounter : 0,
    storyProgressCounter : 0,

    increment : function(source){

        switch(source){
            case "dropwater":
                if(this.storyChapterCounter == 0){
                    this.storyProgressCounter += 1;
                    if(this.storyProgressCounter >= 5){
                        message.print("lakeevent","You are getting thirsty.");
                        htmlInteraction.showButton("drinkwater");
                        this.storyChapterCounter = 1;
                        this.storyProgressCounter = 0;
                    }
                }
                break;
            case "drinkwater":
                if(this.storyChapterCounter == 1){
                    message.print("lakeevent","You take a look at the beautiful meadow that surrounds you.\nYou see a bucket, washed up on the lakeside.");
                    htmlInteraction.hideButton("drinkwater");
                    htmlInteraction.setElementVisibility("washedupbucket",true);
                    htmlInteraction.showButton("getbucket");
                    this.storyChapterCounter = 2
                    this.storyProgressCounter = 0;
                }
                if(this.storyChapterCounter == 4){
                    message.print("lakeevent","You look at the bucket you are holding and ponder.\nWhy not fill it directly?");
                    htmlInteraction.hideButton("drinkwater");
                    lake.equipBucket();
                    this.storyChapterCounter = 5
                    this.storyProgressCounter = 0;
                }
                break;
            case "getbucket":
                if(this.storyChapterCounter == 2){
                    message.print("lakeevent","");
                    
                    htmlInteraction.setElementVisibility("washedupbucket",false);
                    htmlInteraction.setElementVisibility("inventorybucket",true);
                    htmlInteraction.hideButton("getbucket");

                    this.storyChapterCounter = 3
                    this.storyProgressCounter = 0;
                }
                break;
            case "dropfullbucket":
                if(this.storyChapterCounter == 3){
                    message.print("lakeevent","You are getting thirsty.");
                    htmlInteraction.showButton("drinkwater");
                    this.storyChapterCounter = 4
                    this.storyProgressCounter = 0;
                }
                break;
            case "scoopwater":
                if(this.storyChapterCounter == 5){
                    message.print("lakeevent","");
                    this.storyChapterCounter = 6
                    this.storyProgressCounter = 0;
                }
                break;
        }
    }
}