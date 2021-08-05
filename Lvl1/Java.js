
var el=document.getElementById("shooter");
var bull=document.getElementById("bullet");

var pos=0;

var enemyArray=[
document.getElementById("C1R1"),
document.getElementById("C2R1"),
document.getElementById("C3R1"),
document.getElementById("C4R1"),
document.getElementById("C5R1"),
document.getElementById("C6R1"),
document.getElementById("C7R1"),
document.getElementById("C8R1"),
document.getElementById("C9R1"),
document.getElementById("C10R1"),
document.getElementById("C11R1"),
document.getElementById("C12R1"),

document.getElementById("C1R2"),
document.getElementById("C2R2"),
document.getElementById("C3R2"),
document.getElementById("C4R2"),
document.getElementById("C5R2"),
document.getElementById("C6R2"),
document.getElementById("C7R2"),
document.getElementById("C8R2"),
document.getElementById("C9R2"),
document.getElementById("C10R2"),
document.getElementById("C11R2"),
document.getElementById("C12R2"),

document.getElementById("C1R3"),
document.getElementById("C2R3"),
document.getElementById("C3R3"),
document.getElementById("C4R3"),
document.getElementById("C5R3"),
document.getElementById("C6R3"),
document.getElementById("C7R3"),
document.getElementById("C8R3"),
document.getElementById("C9R3"),
document.getElementById("C10R3"),
document.getElementById("C11R3"),
document.getElementById("C12R3"),

]
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }
 function collide(a,b){
     var arect=a.getBoundingClientRect()
    var brect= b.getBoundingClientRect()
    
     if (arect.left<brect.right&&arect.right>brect.left&&arect.top<brect.bottom&&arect.bottom>brect.top){
        return(true)
     }
     else{
        return(false)
     }
     
     
 }
  document.addEventListener("keyup",async function(event){
    
      if(bull.offsetTop==el.offsetTop){
     
        
        if(event.keyCode==32){
            
            
            bull.style.visibility="visible"
            bull.style.left=el.offsetLeft+"px"
            loop1:  
            for(var i=el.offsetTop;i>-100;i-=10){
                bull.style.top=i+"px"
                await sleep()
                loop2:
                for(var j=0;j<enemyArray.length;j++){
                    if(collide(bull,enemyArray[j])==true){
                        enemyArray[j].style.display="none"
                        bull.style.visibility="hidden"
                        break loop1
                       
                        
                    }
                
                }
           
                
                
            }
           
                
        }
                                
            
            bull.style.visibility="hidden"
            bull.style.top=el.offsetTop+"px"  
            
    }
});

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

    
    if((el.offsetLeft>4&&el.offsetLeft<1720)){
        
        if(keyDown['left']){
            el.style.left=el.offsetLeft-10+'px'
        }

        if(keyDown['right']){
            el.style.left=el.offsetLeft+10+'px'
        }
        
    }
    else if(el.offsetLeft<=4){
        if(keyDown['right']){
            el.style.left=el.offsetLeft+10+'px'
        }
    
    }
    else if(el.offsetLeft>=1720){
        if(keyDown['left']){
            el.style.left=el.offsetLeft-10+'px'
        }
    
    }


    setTimeout(move, tickRate);
};
move();


//function findPos(obj){
    //var curleft = 0;
    //var curtop = 0;    
    //if (obj.offsetParent) {
  //do {
      //curleft += obj.offsetLeft;
      //curtop += obj.offsetTop;
     //} while (obj = obj.offsetParent);
  //return {X:curleft,Y:curtop};
   //}
//}
//Top Row//
//var resC1R1 =  findPos(document.getElementById('C1R1'));
    //console.log(resC1R1)

//var resC2R1 =  findPos(document.getElementById('C2R1'));
    //console.log(resC2R1)

//var resC1R2 =  findPos(document.getElementById('C1R2'));
    //console.log(C1R2)

function collide(a,b){
    var arect= a.getBoundingClientRect()
    var brect= b.getBoundingClientRect()
    if (arect.left<brect.right&&arect.right>brect.left&&arect.top<brect.bottom&&arect.bottom>brect.top){
        return(true)
    }
    else{
        return(false)
    }
}

if (collide(document.getElementById("C1R1"), document.getElementById("footer"))) {
    alert("game over")
}


//Moving enemies down
function MoveDown() {
    var i=0;
    function step() {
       document.getElementById("topenemies").style.top=i+"px";
       i=i+0.25;
       if (i<=600) setTimeout(step,10);
    }
    step();
}
MoveDown();
function MoveDown2() {
    var i=0;
    function step() {
       document.getElementById("midenemies").style.top=i+"px";
       i=i+0.25;
       if (i<=500) setTimeout(step,10);
    }
    step();
}
MoveDown2()
function MoveDown3() {
    var i=0;
    function step() {
       document.getElementById("botenemies").style.top=i+"px";
       i=i+0.25;
       if (i<=400) setTimeout(step,10);
    }
    step();
}
MoveDown3()
//Moving enemies left and right
function MoveLeft() {
    var i=0;
    function step() {
       document.getElementById("topenemies").style.right=i+"px";
       i=i+0.5;
       if (i<=200) setTimeout(step,10);
    }
    step();
}
MoveLeft()
function MoveRight() {
    var i=0;
    function step() {
       document.getElementById("midenemies").style.left=i+"px";
       i=i+0.5;
       if (i<=200) setTimeout(step,10);
    }
    step();
}
MoveRight()

