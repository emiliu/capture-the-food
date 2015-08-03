var public_spreadsheet_url = "1YBUXGes6B0l6PtIMYRhMA8dctrvzkXtYJkksDRIINiw"

$(document).ready( function () {
	init();
});

function init() {
	Tabletop.init( {key : public_spreadsheet_url,
					callback : showInfo,
					simpleSheet: true});
}

function showInfo(data, tabletop) {
	console.log("tabletop sucessfully processed");
	console.log(data);
	for (var i = 0; i < data.length; i++) {
		$("#levels").append('<a class="btn btn-primary" href="play.html?page=userlevel&level='+i+'" target="_blank">'+data[i]['title']+" by "+data[i]['creator']+'</a><br/><br/>');
	}
}