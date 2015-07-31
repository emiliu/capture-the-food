var levelStart;
var userLevel;
var public_spreadsheet_url = "1YBUXGes6B0l6PtIMYRhMA8dctrvzkXtYJkksDRIINiw"

$(window).load(function() {
	init();
});

function init() {
	Tabletop.init( {key : public_spreadsheet_url,
					callback : showInfo,
					simpleSheet : true});
}

function showInfo(data, tabletop) {
	console.log("tabletop sucessfully processed");
	console.log(data);
    $("#level").empty();
	$("#title").html(data[query.level]["title"]+" by "+data[query.level]["creator"]);
	if (isNaN(query.level) || query.level < 0 || query.level >= data.length) {
		console.log("invalid query");
		alert("invalid level!");
	} else {
		userLevel = decodeBoard(data[query.level]["board"]);
	}
	setup();
}

function nextLevel(step) {

    console.log(level);

    if (step===0) {
        clearTable();
        myBoard = [];
        myBoard = $.extend(true, [], userLevel);
        currentPos = levelStart.slice(0);
        updateTable(generateTable(myBoard));
    }

    if (step && level < 1){
        // beat the test level
        level++;
        $(".end").show();
        $(".gcb").hide();
        clearTable();
    }
    
}