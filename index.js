var d1 = Math.floor((Math.random()*6)+1);
document.querySelectorAll('img')[0].setAttribute("src","images/dice" + d1 + ".png");
var d2 = Math.floor((Math.random()*6)+1);
document.querySelectorAll('img')[1].setAttribute("src","images/dice" + d2 + ".png");

if (d1>d2){
  document.querySelector("#title").innerHTML = "player 1 wins";
}
else if (d1<d2){
  document.querySelector("#title").innerHTML = "player 2 wins";
}
else{
  document.querySelector("#title").innerHTML = "draw";
}
function reloadPage(){
        location.reload(true);
    }
