var levelStart;
var testLevel;

$(window).load(function() {
    testLevel = decodeBoard(query.board);
    setup();
});

function nextLevel(step) {

    console.log(level);

    if (step===0) {
        clearTable();
        myBoard = [];
        myBoard = $.extend(true, [], testLevel);
        currentPos = levelStart.slice(0);
        updateTable(generateTable(myBoard));
    }

    if (step && level < 1){
        // beat the test level
        level++;
        $(".controls").css("width", "700px");
        $(".end").empty().append('<iframe src="testframe.html?'+
            query.board+'" scrolling="no"></iframe>').show();
        $(".gcb").hide();
        clearTable();
    }
    
}
