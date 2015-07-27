var levelStart;
var userLevel;
var query = parseInt(window.location.search.substring(1));
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
	$("#level").html(data[query]["title"]+" by "+data[query]["creator"]);
	if (isNaN(query) || query < 0 || query >= data.length) {
		console.log("invalid query");
		alert("invalid level!");
	} else {
		userLevel = decodeBoard(data[query]["board"]);
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