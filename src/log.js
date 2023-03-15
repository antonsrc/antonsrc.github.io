

function changeDisplay(idName) {
    var id = document.getElementById(idName);
    if(id.style.display == "none") {
        id.style.display = "block";
    }
    else{
        id.style.display = "none";
    }
}

window.onload = changeFirstTD;
function changeFirstTD() {
    var fTD = document.getElementById("firstTD");
    if (fTD.style.background == "aqua"){
        fTD.style.background = "red";
        console.log(fTD.clientWidth);
        fTD.style.width = (fTD.clientWidth + 200) + "px";
    }
    else{
        fTD.style.background = "aqua";
        fTD.style.width = (fTD.clientWidth - 200) + "px";
    }

}



