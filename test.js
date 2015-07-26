var levelStart;
var testLevel;
var query = window.location.search.substring(1);

$(window).load(function() {
    testLevel = decodeBoard(query);
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
        $(".end").append('<iframe src="testdriveframe.html?'+
            query+'"></iframe>').show();
        $(".gcb").hide();
        clearTable();
    }
    
}
