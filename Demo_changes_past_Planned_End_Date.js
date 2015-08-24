
new Date().getDay()!= 0 && new Date().getDay() != 1 && new Date().getDay() != 6;


var opencr = new GlideRecord('change_request');

var or = opencr.addQuery('u_environment','CONTAINS','922524a86f051100e2ee55ff8d3ee419');
or.addOrCondition('u_environment','CONTAINS','793524a86f051100e2ee55ff8d3ee420');
opencr.addQuery('active',true);
opencr.addQuery('end_date',"<", gs.hoursAgo(2));
opencr.addQuery('start_date',">",gs.daysAgoStart(1));
opencr.addQuery('start_date',"<",gs.daysAgoEnd(1));

opencr.query();

var ary1 = [];
while (opencr.next()){
	ary1.push(opencr.assigned_to.toString())};

gs.eventQueue("igprod.open.daily.changes.event", current, ary1);
