var instanceName = gs.getProperty('instance_name', null);
var link = 'https://' + instanceName + '.service-now.com/change_request_list.do?sysparm_query=active%3Dtrue%5Eu_environmentLIKE922524a86f051100e2ee55ff8d3ee419%5EORu_environmentLIKE793524a86f051100e2ee55ff8d3ee420%5Eassigned_to%3Djavascript%3Ags.getUserID()%5Eend_date%3Cjavascript%3Ags.hoursAgo(2)%5Estart_dateONYesterday%40javascript%3Ags.daysAgoStart(1)%40javascript%3Ags.daysAgoEnd(1)';
var title = "Link to your Open Changes";
var anchor = "<a href='" + link +"'>" + title + "</a>";
template.print(anchor + "\n");
