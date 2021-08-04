var el=document.getElementById("shooter");
var bull=document.getElementById("bullet");
var pos=0;
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }
 
  document.addEventListener("keyup",async function(event){
      if(bull.offsetTop==el.offsetTop){
          console.log(bull.offsetTop)

        if(event.keyCode==32){
            
            
            bull.style.visibility="visible"
            bull.style.left=el.offsetLeft+"px"
 
            for(var i=el.offsetTop;i>-100;i-=10){

                bull.style.top=i+"px"
                await sleep()
            
            }
                                
            
            bull.style.visibility="hidden"
            bull.style.top=el.offsetTop+"px"  
            
        }
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


function findPos(obj){
    var curleft = 0;
    var curtop = 0;    
    if (obj.offsetParent) {
  do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
     } while (obj = obj.offsetParent);
  return {X:curleft,Y:curtop};
   }
}
//Top Row//
var res =  findPos(document.getElementById('top1'));
  alert("The x-cordinate is "+res.X);
  alert("The y-cordinate is "+res.Y);
var res =  findPos(document.getElementById('top2'));
  alert("The x-cordinate is "+res.X);
  alert("The y-cordinate is "+res.Y);
//Middle Row//
var res =  findPos(document.getElementById('middle1'));
  alert("The x-cordinate is "+res.X);
  alert("The y-cordinate is "+res.Y);