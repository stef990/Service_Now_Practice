function returnCurrentUserGroup(){
    var myUserObject = gs.getUser();
    var myUserGroups = myUserObject.getMyGroups();
    var groupsArray = new Array();
    var it = myUserGroups.iterator();
    var i=0;
    while(it.hasNext()){
        var myGroup = it.next();
        groupsArray[i]=myGroup;
        i++;
    }
    return groupsArray;
}
 
var test = returnCurrentUserGroup();
gs.print(test[0]);
