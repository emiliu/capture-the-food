var chosenTile="start"
var usable="usable";
var start="start";
var lock="lock";
var wall="wall";
var key="key";
var flag="flag";
var finish="finish";
var mat="mat";

$(window).load( function() {
    $("#content-wrap").css("visibility", "visible");
    $(".controls").hide();
    $(".toolbar").hide();

    $("#gentable").click( function() {
        testSize();
    });

    $("#verify").click( function() {
        verify();
    });
});

function testSize() {
    var rows = parseInt($("#rows").val());
    var cols = parseInt($("#cols").val());
    console.log(rows);
    console.log(cols);
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("invalid number of rows or columns");
    } else{
        generateTable(rows, cols);
        displayToolbar();
        $("#tablesize").hide();
        $(".toolbar").show();
        $(".controls").show();
    }
}

function generateTable(rows, cols) {

    var cellsize;

    if ((window.innerHeight - 30) / rows < window.innerWidth / cols) {
        cellsize = 0.7 * (window.innerHeight - 30) / rows;
    } else {
        cellsize = 0.8 * window.innerWidth / cols;
    }
    
    // square cells
    
    for(var games = 0; games < rows; games++){
        var row = document.createElement("tr");
        for(var j = 0; j < cols; j++){
            var cell=document.createElement("td");
            cell.id="row"+games+"col"+j;
            cell.width=cellsize.toString();
            cell.height=cellsize.toString();
            cell.className="usable";
            cell.setAttribute("onclick","paint(this)");
            row.appendChild(cell);
        }
    document.getElementById("gametable").appendChild(row);
    }
    
    return cellsize;
    
}

function displayToolbar() {
    //generates the toolbar for selecting different tile types

    var table = document.getElementById("options");
    var row = document.createElement("tr");
    
    function makeSelector(kind){
        var cell = document.createElement("td");
        cell.setAttribute("onclick","paintbrush("+kind+")");
        if (kind === "flag") {
            cell.title="food";
        } else {
            cell.title=kind;
        }
        cell.width = 125;
        cell.height = 125;
        cell.className = kind;
        row.appendChild(cell);
    }

    makeSelector("start");
    makeSelector("usable");
    makeSelector("wall");
    makeSelector("key");
    table.appendChild(row);
    row = document.createElement("tr");
    makeSelector("lock");
    makeSelector("flag");
    makeSelector("finish");
    makeSelector("mat");
    table.appendChild(row);
}

function paintbrush(kind) {
    document.getElementById("selector").className = kind;
    if (kind === "flag") {
        document.getElementById("selector").title = "food";
    } else {
        document.getElementById("selector").title = kind;
    }
    chosenTile = kind;
}

function paint(tile) {
    tile.className = chosenTile;
}

function verify() {
    var verified = true;
    var starts = 0, finishes = 0, keys = 0, locks = 0;
    var table = document.getElementById("gametable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            switch (col.className) {
                case start:
                    starts++;
                    break;
                case finish:
                    finishes++;
                    break;
                case key:
                    keys++;
                    break;
                case lock:
                    locks++;
                    break;
            }
        }
    }
    // invalid levels - only one alert at a time
    if (starts !== 1) {
        alert("There must be exactly one start tile.");
    } else if (finishes !== 1) {
        alert("There must be exactly one finish tile.");
    } else if (locks > 0 && keys === 0) {
        alert("In order to have any locks, there must be a key somewhere on the stage.");
    } else if (keys > 0 && locks === 0) {
        alert("There cannot be a key on the stage if there is no lock to open.");
    } else {
        alert("You can now test your level!");
        showTest();
    }
}
function showTest(){
    var query="";
    var stage=[];//maybe this should be global
    var table=document.getElementById("gametable");//pasted in from stackoverflow again
    for (var i = 0, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        //query=query+"row"+i+"=["
        stage[i]=[];
        for (var j = 0, col; col = row.cells[j]; j++) {
            stage[i][j]=col.className;
        }
        query+=stage[i].toString(); query+="&"
    }
    query=query.substring(0, query.length - 1);
    console.log(stage);
    console.log(query);
    query=btoa(query);
    console.log(query);
    document.getElementById("test").setAttribute("href","play.html?page=test&board="+query);
    document.getElementById("test").target="_blank";
    $("#test").show();
}

function clearlevel() {
    var table=document.getElementById("gametable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            col.className = "usable";
        }
    }
}