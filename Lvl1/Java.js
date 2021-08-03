var el=document.getElementById("shooter");
var bull=document.getElementById("bullet");
var pos=0;
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }

document.addEventListener("keydown",async function(event){

    if(event.keyCode==65){
        el.style.left=el.offsetLeft-10+'px'


    }
    if(event.keyCode==68){
        el.style.left=el.offsetLeft+10+'px'
    }
    if(event.keyCode==32){
        bull.style.visibility="visible"
        bull.style.left=el.offsetLeft+"px"
        bull.style.top=el.offsetTop+"px"

        for(var i=el.offsetTop;i>-100;i-=10){

            bull.style.top=i+"px"

            await sleep()

        }

    }
    var topenemynumb = document.getElementById("topenemies");
    var middleenemynumb = document.getElementById("middleenemies");
    var bottomnemynumb = document.getElementById("bottomenemies");

if (topenemynumb == 2){
    topenemynumb++;
}



}); 