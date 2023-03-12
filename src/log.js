var fTD = document.getElementById("firstTD");
fTD.style.background = "red";
console.log(fTD.clientWidth);

var newWidth = fTD.clientWidth + 200;
fTD.style.width = newWidth + "px";
console.log(newWidth);

var graytd = document.getElementById("grayTD");
graytd.innerHTML = "Новый текст";