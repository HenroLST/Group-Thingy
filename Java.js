var el=document.getElementById("shooter");
var bull=document.getElementById("bullet");
var pos=0;
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }
  var shoot = async function(){
    bull.style.visibility="visible"
    bull.style.left=el.offsetLeft+"px"
    bull.style.top=el.offsetTop+"px"
    
    for(var i=el.offsetTop;i>-100;i-=10){

        bull.style.top=i+"px"

        await sleep()
    
    }
}
  var tickRate = 30,
  keyDown = {},
  keyMap = {
      65: 'left',
      68: 'right',
      32: 'space',

  };
document.addEventListener("keydown",function(e){keyDown[keyMap[e.which]]=true;})
document.addEventListener("keyup",function(e){keyDown[keyMap[e.which]]=false;})
var move =  async function(){

    if(keyDown['left']){
        el.style.left=el.offsetLeft-10+'px'
        
        
    }
    if(keyDown['right']){
        el.style.left=el.offsetLeft+10+'px'
    }
    if(keyDown['space']){

        shoot()
        

    }
    setTimeout(move, tickRate);

};
move();
