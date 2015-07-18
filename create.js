$(window).load( function() {
    $("#content-wrap").css("visibility", "visible");
    $(".controls").css("display", "none");
});

var WIDTH = 700.0;
var widthHeight;
var chosenTile="start"
function testSize(){
    var rowIn = document.getElementById("rowIn").value;
    var colIn=document.getElementById("colIn").value;
    parseInt(rowIn); parseInt(colIn);
    console.log(rowIn); console.log(colIn);
    if(rowIn>12 || rowIn<5 || isNaN(rowIn)){
        if(colIn>32 || colIn<5 || isNaN(colIn)){
            alert("Invalid numbers of rows and columns. Make sure you enter numbers that meet the specified range.");
        }
        else{alert("Invalid number of rows. Make sure you enter numbers that meet the specified range.");}
    }
    else if(colIn>32 || colIn<5 || isNaN(colIn)){
        alert("Invalid number of columns. Make sure you enter numbers that meet the specified range.");
    }
    else{
        widthHeight=generateTable(rowIn,colIn);
        displayToolbar();
        document.getElementsByTagName("form")[0].style.display="none";
        $(".toolbar").show();
        $(".controls").show();
    }
}
function generateTable(rowIn,colIn) {
    
    // fixed width, variable height, square cells
    
    for(var games = 0; games < rowIn; games++){
        var row = document.createElement("tr");
        for(var j = 0; j < colIn; j++){
            var cell=document.createElement("td");
            cell.id="row"+games+"col"+j;
            cell.width=(WIDTH/colIn).toString();
            cell.height=cell.width;//(WIDTH/rowIn).toString();
            cell.className="usable";
            cell.setAttribute("onclick","paint(this)");
            row.appendChild(cell);
        }
    document.getElementById("gametable").appendChild(row);
    }
    return cell.width;
}
function displayToolbar(){//generates the toolbar for selecting different tile types. var cell has no real meaning because it keeps changing
    var table=document.getElementById("options");
    var row=document.createElement("tr");
    
    function makeSelector(kind){
        var cell=document.createElement("td");
        cell.setAttribute("onclick","paintbrush("+kind+")");
        if(kind==="flag"){cell.title="food";} else{cell.title=kind;}
        cell.width=125;
        cell.height=125;
        cell.className=kind;
        row.appendChild(cell);
    }
    makeSelector("start");
    makeSelector("usable");
    makeSelector("wall");
    makeSelector("key");
    table.appendChild(row);
    var row=document.createElement("tr");
    makeSelector("lock");
    makeSelector("flag");
    makeSelector("finish");
    makeSelector("mat");
    table.appendChild(row);
}
var usable="usable";
var start="start";
var lock="lock";
var wall="wall";
var key="key";
var flag="flag";
var finish="finish";
var mat="mat";


function paintbrush(kind){
    document.getElementById("selector").className=kind;
    if(kind==="flag"){document.getElementById("selector").title="food";} else{document.getElementById("selector").title=kind;}
    chosenTile=kind;
}

function paint(tile){
    tile.className=chosenTile;
}

function verify(){
    var verification = true; //valid until proven invalid
    var starts=0; var finishes=0; var keys=0; var locks=0;
    var table=document.getElementById("gametable");//pasted in from stackoverflow
    for (var i = 0, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        for (var j = 0, col; col = row.cells[j]; j++) {
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            switch (col.className)
            {
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
                default:
                    //I could care less.
            }

        }  
    }
    //below are the cases that constitute an invalid level
    if (starts!=1){alert("There must be exactly one start tile."); verification=false;}
    if (finishes!=1){alert("There must be exactly one finish tile."); verification=false;}
    if (locks>0 && keys===0){alert("In order to have any locks, there must be a key somewhere on the stage."); verification=false;}
    if (keys>0 && locks===0){alert("There cannot be a key on the stage if there is no lock to open."); verification=false;}
    if (keys>1){alert("Maximum 1 key allowed. (It will open all the locks)."); verification=false;}

    if (verification){
        var readyToTest=confirm("Your level has been verified. The last step is to test it yourself.\nPress OK for the ability to test drive.");
        if (readyToTest){grabLvl();}}
}
function grabLvl(){
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
    document.getElementById("testdrivebtn").setAttribute("href","test.html?"+query);
    document.getElementById("testdrivebtn").target="_blank";
    $("#testdrivebtn").show();
}

//$( "button[name='restart']" ).click(function(){
function clearlevel(){
    var table=document.getElementById("gametable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            col.className="usable";
        }
    }
}
//});
