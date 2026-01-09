var message = {

    print : function(type, value){
        if(type == "DEBUG") htmlInteraction.setInnerHtml("DEBUG", value);
        if(type == "laketitle") htmlInteraction.setInnerHtml("laketitle", value);
        if(type == "lakedescription") htmlInteraction.setInnerHtml("lakedescription", value);
        if(type == "lakeevent") htmlInteraction.setInnerHtml("lakeeventdescription", value);
        if(type == "meadowtitle") htmlInteraction.setInnerHtml("meadowtitle", value);
        if(type == "meadowdescription") htmlInteraction.setInnerHtml("meadowdescription", value);
        if(type == "meadowevent") htmlInteraction.setInnerHtml("meadoweventdescription", value);
        if(type == "fieldtitle") htmlInteraction.setInnerHtml("fieldtitle", value);
        if(type == "fielddescription") htmlInteraction.setInnerHtml("fielddescription", value);
        if(type == "fieldevent") htmlInteraction.setInnerHtml("fieldeventdescription", value);
    }
}