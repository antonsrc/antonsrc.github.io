

function changeDisplay() {
    var dostoevsky = document.getElementById("dostoevsky");
    if(dostoevsky.style.display == "none") {
        dostoevsky.style.display = "block";
    }
    else{
        dostoevsky.style.display = "none";
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

