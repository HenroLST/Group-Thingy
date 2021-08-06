var el=document.getElementById("shooter");
var bull=document.getElementById("bullet");
var bull2=document.getElementById("bullet2")
var pos=0;
var ScoreCount=0;
var lives=3;
var enemyTimer=0;

var don1=document.getElementById("donut1")
var don2=document.getElementById("donut2")
var don3=document.getElementById("donut3")

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
  //collide function
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
    //enemy bullets
 async function enemyShoot(){
    if(enemyTimer>=45){
        enemyTimer=0;
        var randomEnemy=enemyArray[Math.floor(Math.random()*enemyArray.length)];
        if(randomEnemy.style.display!="none"){
           
        
            var enrect=randomEnemy.getBoundingClientRect();
            bull2.style.left=enrect.left+"px"
            
            for(var i=enrect.top;i<el.offsetTop;i+=3){
                enrect=randomEnemy.getBoundingClientRect();
                
                bull2.style.visibility="visible";
                
                bull2.style.top=i+"px"
                await sleep()
                if(collide(bull2,el)){
                    lives-=1;
                    console.log(lives)
                    break
                }
            }
            bull2.style.visibility="hidden"
        }
        else{
            
        }
        
    }
 }
 //bullet shooting
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
                        ScoreCount+=10;
                        document.getElementById("score").innerHTML="Score: "+ScoreCount;
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
    enemyTimer++

    enemyShoot()
    
    //wasd movement
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
    //score
    if(ScoreCount>=360){
        window.location.href="Win/Win.html"   
    }
    //lives
    if(lives==2){
        don3.style.visibility="hidden"
    }
    if(lives==1){
        don2.style.visibility="hidden"
    }
   
    //death screen
    setTimeout(move, tickRate);
    var botrect= document.getElementById("botenemies").getBoundingClientRect()
    if(botrect.bottom>=775){
       
        window.location.href="GameOver/GameOver.html"   
    }
    if(lives<=0){
        don1.style.visibility="hidden"
        window.location.href="GameOver/GameOver.html"   
    }
    
};
move();


//Moving enemies down
function MoveDown() {
    var i=0;
    function step() {
       document.getElementById("topenemies").style.top=i+"px";
       i=i+0.15;
      setTimeout(step,10);
    }

    step();
}
MoveDown();
function MoveDown2() {
    var i=0;
    function step() {
       document.getElementById("midenemies").style.top=i+"px";
       i=i+0.15;
       setTimeout(step,10);
    }
    step();
}
MoveDown2()
function MoveDown3() {
    var i=0;
    function step() {
       document.getElementById("botenemies").style.top=i+"px";
       i=i+.15;
        setTimeout(step,10);
    }
    step();
}
MoveDown3()
//Moving enemies left and right
function MoveLeft() {
    var i=0;
    var j=200;
    function step() {
       document.getElementById("topenemies").style.right=i+"px";
       i=i+0.15;
       if (i<=200) setTimeout(step,10);
       if (i>200) {setTimeout(step2,10);j=200}
       
    }
    function step2(){
        
        document.getElementById("topenemies").style.right=j+"px";
        
       j=j-0.5;
       if (j>=-200) setTimeout(step2,10);
       if (j<-200) {setTimeout(step,10);i=-200;}
       
    }
    step();
}
MoveLeft()
function MoveRight() {
    var i=0;
    var j=200;
    function step() {
       document.getElementById("midenemies").style.right=i+"px";
       i=i-0.15;
       if (i>=-200) setTimeout(step,10);
       if (i<-200) {setTimeout(step2,10);j=-200}
      
    }
    function step2(){
        
        document.getElementById("midenemies").style.right=j+"px";
        
       j=j+0.5;
       if (j<=200) setTimeout(step2,10);
       if (j>200) {setTimeout(step,10);i=200;}
     
    }
    step();
}
MoveRight()