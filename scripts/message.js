var message = {

    print : function(type, value){
        if(type == "DEBUG") htmlInteraction.setInnerHtml("DEBUG", value);
        if(type == "lake") htmlInteraction.setInnerHtml("lakedescription", value+"\n");
        if(type == "lakeevent") htmlInteraction.setInnerHtml("lakeeventdescription", value);
    }
}