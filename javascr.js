var timer =60;
var score=0;
var hitrn=0;

function makebubble()
{
 var clutter="";
for(var i=1;i<=70;i++){
   var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
var timerint = setInterval(function (){
    if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent= timer; 
}
else {clearInterval(timerint);
document.querySelector("#pbtm").innerHTML=`<H1>GAME OVER</H1>`;
}},1000);

}

function getnewhit(){
hitrn = Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent=hitrn; 
}

function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
})
runtimer();
makebubble();
getnewhit();
