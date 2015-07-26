var testLevelStart;
var testLevel;
var query = window.location.search.substring(1);

$(window).load(function() {
    testLevel = decodeBoard(query);
    setup();
});

function decodeBoard(encoded) {
    // turn base64 encoded string into 2d array
    var board = atob(encoded).split('&');
    for (var i = 0; i < board.length; i++) {
        board[i] = board[i].split(",");
    }
    return fixFormat(board);
}

function fixFormat(board){
    // replace start with catstart and locate the levelstart
    for (i = 0; i < board.length; i++){
        for (j = 0; j < board[i].length; j++){
            if (board[i][j] === "start") {
                board[i][j] = "catstart";
                testLevelStart = [i, j, false];
                return board;
            }
        }
    }
}

function nextLevel(step) {

    console.log(level);

    if (step===0) {
        clearTable();
        myBoard = [];
        myBoard = $.extend(true, [], testLevel);
        currentPos = testLevelStart.slice(0);
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
