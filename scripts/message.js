var message = {

    print : function(type, value){
        if(type == "DEBUG") htmlInteraction.setInnerHtml("DEBUG", value);
        if(type == "lake") htmlInteraction.setInnerHtml("lakedescription", value);
        if(type == "lakeevent") htmlInteraction.setInnerHtml("lakeeventdescription", value);
        if(type == "meadow") htmlInteraction.setInnerHtml("meadowdescription", value);
        if(type == "meadowevent") htmlInteraction.setInnerHtml("meadoweventdescription", value);
    }
}