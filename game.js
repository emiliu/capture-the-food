// global constants

// levels!

var ONE = [
    [WALL, USABLE, USABLE, USABLE, FLAG, USABLE],
    [WALL, USABLE, WALL, WALL, USABLE, USABLE],
    [USABLE, USABLE, WALL, WALL, USABLE, USABLE],
    [USABLE, USABLE, WALL, WALL, USABLE, USABLE],
    [CATSTART, USABLE, WALL, WALL, USABLE, FINISH]
    ];

var ONESTART = [4, 0, false]; // row, col, key

var TWO = [
    [WALL, USABLE, USABLE, USABLE, LOCK, FLAG],
    [WALL, USABLE, WALL, WALL, WALL, USABLE],
    [WALL, KEY, WALL, WALL, WALL, USABLE],
    [WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [WALL, WALL, USABLE, USABLE, WALL, USABLE],
    [CATSTART, USABLE, USABLE, WALL, WALL, FINISH]
    ];

var TWOSTART = [5, 0, false];

var THREE = [
    [WALL, USABLE, USABLE, LOCK, USABLE, USABLE],
    [WALL, USABLE, WALL, WALL, USABLE, USABLE],
    [WALL, USABLE, WALL, WALL, USABLE, WALL],
    [WALL, USABLE, USABLE, KEY, FLAG, USABLE],
    [WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [CATSTART, USABLE, WALL, WALL, WALL, FINISH]
    ];
    
var THREESTART = [5, 0, false];

var FOUR = [
    [KEY, USABLE, USABLE, LOCK, USABLE, USABLE],
    [USABLE, USABLE, USABLE, WALL, WALL, USABLE],
    [WALL, WALL, USABLE, WALL, USABLE, USABLE],
    [WALL, WALL, USABLE, WALL, FLAG, USABLE],
    [WALL, WALL, USABLE, USABLE, USABLE, USABLE],
    [CATSTART, USABLE, USABLE, USABLE, USABLE, FINISH]
];

var FOURSTART = [5, 0, false];

var FIVE = [
    [WALL, WALL, WALL, USABLE, USABLE, WALL,WALL, WALL, WALL, USABLE, USABLE, WALL, WALL, WALL],
    [WALL, USABLE, USABLE, USABLE, USABLE, WALL, LOCK,USABLE, WALL, USABLE, USABLE, USABLE, WALL, FINISH],
    [WALL, USABLE, USABLE, USABLE, USABLE, WALL, USABLE, USABLE, WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [WALL, USABLE, KEY, USABLE, USABLE, USABLE, USABLE, USABLE, WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [WALL, USABLE, USABLE, USABLE, USABLE, WALL, WALL,USABLE, WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [WALL, USABLE, USABLE, USABLE, USABLE, WALL, USABLE, USABLE, WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [WALL, USABLE, USABLE, USABLE, USABLE, WALL, USABLE, USABLE, WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [WALL, WALL, WALL, WALL, USABLE, WALL, USABLE, USABLE, WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [WALL, WALL, WALL, WALL, USABLE, WALL, USABLE, USABLE, WALL, USABLE, USABLE, USABLE, WALL, USABLE],
    [CATSTART, USABLE, USABLE, USABLE, USABLE, WALL, WALL, USABLE, USABLE, USABLE, USABLE, USABLE, USABLE, USABLE]
    ];

var FIVESTART = [9, 0, false];

var SIX = [
    [USABLE, USABLE, USABLE, USABLE, USABLE, USABLE],
    [USABLE, USABLE, USABLE, WALL, WALL, USABLE],
    [USABLE, USABLE, USABLE, FLAG, WALL, USABLE],
    [USABLE, USABLE, WALL, USABLE, USABLE, USABLE],
    [LOCK, LOCK, KEY, USABLE, USABLE, USABLE],
    [CATSTART, USABLE, USABLE, USABLE, USABLE, FINISH]
];

var SIXSTART = [5, 0, false];

var SEVEN = [
    [U, KEY, W, U, U, U, U, U, FINISH],
    [U, U, W, U, W, W, W, U, U],
    [U, U, W, U, U, U, W, U, U],
    [U, U, W, U, CATSTART, U, W, FLAG, U],
    [U, U, W, U, U, U, W, U, U],
    [U, U, W, W, W, W, W, U, LOCK],
    [U, FLAG, U, U, U, U, U, U, U],
    [U, U, U, W, U, FLAG, U, U, U],
    [U, U, U, U, U, W, U, U, W]
    ];
    
var SEVENSTART = [3, 4, false];

var EIGHT = [
    [U, FLAG, U, U, U, U, U, U, U, U],
    [U, W, W, W, W, W, W, W, U, U],
    [LOCK, LOCK, LOCK, LOCK, LOCK, LOCK, LOCK, LOCK, MAT, U],
    [LOCK, CATSTART, U, U, FLAG, U, U, U, MAT, KEY],
    [LOCK, LOCK, LOCK, LOCK, LOCK, LOCK, LOCK, LOCK, LOCK, U],
    [U, W, W, U, U, U, U, U, U, U],
    [U, W, W, U, U, U, FLAG, W, W, W],
    [FLAG, U, U, U, U, U, U, U, U, FINISH]
    ];
    
var EIGHTSTART = [3, 1, false];

var NINE = [
[W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
[W,U,U,W,W,W,W,U,U,W,U,U,U,U,U,W,U,U,U,U,U,W,U,U,W,W,W,W,W,W,FINISH,W],
[W,U,U,W,W,W,W,U,U,W,U,U,U,U,U,W,U,W,W,W,U,W,U,U,W,W,W,W,W,W,U,W],
[W,U,U,U,W,W,U,U,U,W,U,KEY,W,W,W,W,U,W,W,W,U,W,U,U,W,W,W,W,W,W,U,W],
[W,U,W,U,U,U,U,W,U,W,U,U,W,W,W,W,U,W,W,W,U,W,U,U,W,W,W,W,W,W,U,W],
[W,U,W,W,U,U,W,W,U,W,U,U,U,U,W,W,U,W,W,W,U,W,LOCK,U,W,W,U,U,W,W,U,W],
[W,U,W,W,W,W,W,W,U,W,U,U,U,U,W,W,U,W,W,W,U,W,U,U,W,U,U,U,U,W,U,W],
[W,U,W,W,W,W,W,W,U,W,U,U,W,W,W,W,U,W,W,W,U,W,U,U,W,U,W,W,U,W,U,W],
[W,U,W,W,W,W,W,W,U,W,U,U,W,W,W,W,U,W,W,W,U,W,U,U,W,U,W,W,U,W,U,W],
[W,U,W,W,W,W,W,W,U,W,U,U,U,U,U,W,U,U,U,U,U,W,U,U,W,U,W,W,U,W,U,W],
[W,CATSTART,W,W,W,W,W,W,U,FLAG,FLAG,W,W,W,FLAG,FLAG,FLAG,FLAG,FLAG,FLAG,FLAG,FLAG,U,U,U,U,W,W,U,U,U,W],
[W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W]
];

var NINESTART = [10,1,false];

var TEN = [
[W,U,U,U,U,U,W,U,U,U,U,U],
[U,U,W,U,U,U,W,U,FLAG,U,W,U],
[U,W,W,U,U,U,W,U,U,U,W,U],
[U,W,W,W,W,U,U,U,U,U,U,U],
[U,U,W,U,U,U,W,W,W,W,U,U],
[U,U,U,U,U,KEY,U,U,W,W,W,U],
[U,W,U,W,FINISH,U,U,U,U,U,W,U],
[U,W,U,U,U,U,U,U,U,U,W,U],
[U,W,U,U,W,U,U,U,U,U,U,U],
[U,U,U,U,U,W,W,W,W,W,W,W],
[U,LOCK,U,U,U,W,W,W,W,W,W,W],
[CATSTART,U,U,W,W,W,W,W,W,W,W,W]
];

var TENSTART = [11,0,false];

var LEVELS = [ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN];
var LEVELSTARTS = [ONESTART, TWOSTART, THREESTART, FOURSTART, FIVESTART, SIXSTART, SEVENSTART, EIGHTSTART, NINESTART, TENSTART];

$(window).load(function() {
    setup();
});

function nextLevel(step) {
    
    // restart or just start: step = 0
    // advance a level: step = 1
    
    console.log(level);
    
    level+=step;
    clearTable();
    
    if (level < LEVELS.length) {
        // clear and update variables and level display
        document.getElementById('level').innerHTML="Level "+(level+1).toString();
        myBoard = [];
        myBoard = $.extend(true, [], LEVELS[level]);
        currentPos = LEVELSTARTS[level].slice(0);
        updateTable(generateTable(myBoard));
    } else {
        // sorry, there's no more! (for now)
        $(".end").show();
        $("iframe").css("height", (window.innerHeight * 0.6).toString()+"px");
        $(".gcb").hide();
        // gcb game control buttons
    }
    
}
