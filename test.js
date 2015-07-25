// levels!
var testStart;
var LEVELSTARTS;

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
    
    setup();
});

function fixFormat(lvl){ // replace start with catstart and locate the levelstart
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
    if (step && level<1){
    // you beat the test level
    level++;
    $(".end").append('<iframe src="testdriveframe.html?'+queryb+'"></iframe>').show();
    $(".gcb").hide();
    // gcb game control buttons
    clearTable();
    }
    
}
