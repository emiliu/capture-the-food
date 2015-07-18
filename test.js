var WIDTH = 700.0;

// global constants

// block constants
var USABLE = "usable";
var USED = "used";
var WALL = "wall";
var FLAG = "flag";
var START = "start";
var FINISH = "finish";
var KEY = "key";
var LOCK = "lock";
var CAT = "cat";
var CATMAT = "catmat";
var CATSTART = "catstart";
var MAT = "mat";
var U = USABLE;
var W = WALL;
var CATFINISH = "catfinish";

// keypress
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

// levels!
var testStart;
var LEVELSTARTS;

// global variables
var level = 0;
var myBoard, currentPos;
function fixFormat(lvl){ //it just needs to replace start with catstart and locate the levelstart
    for (i=0; i<lvl.length; i++){
        for (j=0; j<lvl[i].length;j++){
            if(lvl[i][j]==="start"){
            lvl[i][j]="catstart";
            testStart=[i,j,false];
            LEVELSTARTS=[testStart];
            }
        }
    }
    return lvl;
}
var lvlTest;
var queryb = window.location.search.substring(1);
$(window).load(function() {
    var qsParm = new Array();
    query=atob(queryb);
    var parms = query.split('&');
    for (var i=0; i<parms.length; i++) {
        parms[i]=parms[i].split(",");
    }
    console.log(parms); // I have no idea why this says catstart instead of start before the fixFormat function is called.
    lvlTest=fixFormat(parms);
    console.log(lvlTest);
    // load level one
    nextLevel(0);
    console.log("loaded");
    
    // restart level
    $( "button[name='restart']" ).click(function(){nextLevel(0);});
    
    $( "body" ).keydown( function(event) {
        
        switch(event.which) {
            
            // deal with arrow keys
            case UP:
                event.preventDefault();
                update(0, -1);
                break;
            case DOWN:
                event.preventDefault();
                update(0, 1);
                break;
            case LEFT:
                event.preventDefault();
                update(1, -1);
                break;
            case RIGHT:
                event.preventDefault();
                update(1, 1);
                break;
            //pressing 'r' restarts level
            case 82:
                nextLevel(0);
                break;
              default:
                console.log("not a valid key");
            
        }
        
        // advance a level
        if (checkWin(myBoard)) {
            nextLevel(1);
        }
        
    });
    
    // audio controls
    $(function() {
        $(".playback").click(function() {
            var track = $(this).next('audio').get(0);
            if (track.paused) {
                document.getElementById("mute").className = "fa fa-volume-up fa-lg";
                track.play();
            } else {
                document.getElementById("mute").className = "fa fa-volume-off fa-lg";
                track.pause();
            }
        });
    });
    
    // loading screen
    $("#content-wrap").css("visibility", "visible");
    $(".loader").fadeOut("slow");
    $(".loader").css("display", "none");
});

function nextLevel(step) {
    
    // restart or just start: step = 0
    // advance a level: step = 1
    
    console.log(level);
    if (step===0) {
    //level+=step;
    clearTable();
    myBoard = [];
    myBoard = $.extend(true, [], lvlTest);
    currentPos = LEVELSTARTS[level].slice(0);
    updateTable(generateTable(myBoard));
    }
    if (step){
    // you beat the test level
    $(".end").append('<iframe src="testdriveframe.html?'+queryb+'" width="200" height="400"></iframe>').show();
    $(".gcb").hide();
    // gcb game control buttons
    clearTable();
    }

    
}

function update(dir, step) {
    
    // dir x or y
    // step + or -
    
    var moved = false;
    
    var futurePos = currentPos.slice(0);
    futurePos[dir] += step;
    
    console.log("current"+currentPos);
    console.log("future"+futurePos);
    
    // movement logic
    
    if ((futurePos[0] < 0) || (futurePos[0] > myBoard.length - 1)
            || (futurePos[1] < 0) || (futurePos[1] > myBoard[0].length - 1)) {
        console.log("stepped off the board");
    } else {
        
        switch (myBoard[futurePos[0]][futurePos[1]]) {
            
            case USABLE:
            case FLAG:
                myBoard[futurePos[0]][futurePos[1]] = CAT;
                moved = true;
                break;
            case KEY:
                myBoard[futurePos[0]][futurePos[1]] = CAT;
                futurePos[2] = true;
                moved = true;
                break;
            case LOCK:
                if (currentPos[2]) {
                    myBoard[futurePos[0]][futurePos[1]] = CAT;
                    moved = true;
                }
                break;
            case MAT:
                myBoard[futurePos[0]][futurePos[1]] = CATMAT;
                moved = true;
                break;
            case START:
                myBoard[futurePos[0]][futurePos[1]] = CATSTART;
                moved = true;
                break;
            case FINISH:
                myBoard[futurePos[0]][futurePos[1]] = CATFINISH;
                moved = true;
                break;
            default:
                moved = false;
                console.log("can't move");
            
        }
        
        if (moved) {
            
            switch (myBoard[currentPos[0]][currentPos[1]]) {
                
                case CATSTART:
                    myBoard[currentPos[0]][currentPos[1]] = START;
                    break;
                case CATMAT:
                    myBoard[currentPos[0]][currentPos[1]] = MAT;
                    break;
                case KEY:
                case LOCK:
                case CAT:
                case FLAG:
                    myBoard[currentPos[0]][currentPos[1]] = USED;
                    break;
                case CATFINISH:
                    myBoard[currentPos[0]][currentPos[1]] = FINISH;
                    break;
                default:
                    console.log("can't move");
                
            }
            
            updateCell(myBoard, currentPos[0], currentPos[1]);
            updateCell(myBoard, futurePos[0], futurePos[1]);
            
            currentPos = futurePos;
            
        }
        
        printBoard(myBoard);
        console.log(currentPos);
        
    }
    
}

function checkWin(board) {
    
    // called each keydown
    
    var won = true;
    
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            switch (board[i][j]) {
                case USABLE:
                case LOCK:
                case KEY:
                case FLAG:
                case FINISH:
                    won = false;
            }
        }
    }
    
    return won;
    
}

function updateTable(board) {
    
    // cell by cell
    
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            updateCell(board, i, j);
        }
    }
    
    return board;
    
}

function updateCell(board, i, j) {
    
    var cell = document.getElementById("row"+i.toString()+"col"+j.toString());
    cell.className="";
    
    // update table cell class based on block status
    
    switch (board[i][j]) {
        
        case USABLE:
            cell.className = "usable";
            break;
        case USED:
            cell.className = "used";
            break;
        case WALL:
            cell.className = "wall";
            break;
        case FLAG:
            cell.className = "flag";
            break;
        case START:
            cell.className = "start";
            break;
        case FINISH:
            cell.className = "finish";
            break;
        case KEY:
            cell.className = "key";
            break;
        case LOCK:
            cell.className = "lock";
            break;
        case CAT:
            cell.className = "cat";
            break;
        case CATMAT:
        case CATSTART:
        case CATFINISH:
            cell.className = "catmat";
            break;
        case MAT:
            cell.className = "mat";
            break;
        case KEY:
            cell.className = "key";
            break;
        default:
            console.log("cell apoptosis!");
        
    }
    
}

function clearTable() {
    // remove child elements of table
    $( "#gametable" ).empty();
}

function generateTable(board) {
    
    // fixed width, variable height, square cells
    
    for(var games = 0; games < board.length; games++){
        var row = document.createElement("tr");
        for(var j = 0; j < board[0].length; j++){
            var cell=document.createElement("td");
            cell.id="row"+games+"col"+j;
            cell.width=(WIDTH/board[0].length).toString();
            cell.height=(WIDTH/board[0].length).toString();
            row.appendChild(cell);
        }
    document.getElementById("gametable").appendChild(row);
    }
    
    return board;
    
}

function printBoard(board) {
    // debugging convenience (or if you want to play it text-based)
    console.log("board:");
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}
