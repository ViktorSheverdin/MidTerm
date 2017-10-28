
/*---------------------Change bgImage---------------*/




    function changeBg(){
        newImage=document.getElementById('bgimage').value;
        document.getElementById('display').style.backgroundImage="url("+newImage+")";
   }
   
   function updateText(){
       tit=document.getElementById('title1').value;
       document.getElementById('title').innerHTML=tit;
   }
   
    function updateText2(){
       description=document.getElementById('description').value;
       document.getElementById('discription').innerHTML=description;
   }
   
   function changeColor(){
       col=document.getElementById('color').value;
       document.getElementById('title').style.color=col;
       document.getElementById('discription').style.color=col;
   }


/*------------------Chacge position-------*/
document.getElementById('controls').addEventListener('click', 
 function(){
    document.getElementById('controls').style.bottom=150+'px';
     
 });
 
 /*---------------change Image-----------*/
 document.body.addEventListener('keyup', function(ev){
     if(ev.keyCode == 13){
        changeBg();
        storeString();
        changeImage()
     }
 })
 
 /*----------------------Change title---------*/
 document.getElementById('title1').onkeydown=function(){
     updateText();
 }
 
 document.getElementById('description').onkeydown=function(){
     updateText2();
 }
 
 
 /*------------------chenge color------------*/
 changeColor();
 
 
 
 
/*----------------------Movethe di---------------*/
x=0;
y=0;
function moveup(){
document.getElementById('controls').addEventListener('keydown',
function(ev){
    console.log(ev.keyCode);
    if(ev.keyCode==38){
    x=x+10;
    document.getElementById('controls').backgroundPosition = x+"px"+" "+y+"px";
    }
})

}

moveup();

srcSTR=''
function storeString(){
    srcSTR = document.getElementById('bgimage').value;
    srcSTR = document.getElementById('bgimage').value;
    
    var val =document.getElementById('bgimage').value;
    if(val == 'horse'){
        srcSTR='img/bg1.jpg'
    }
    else if(val == 'night'){
        srcSTR='img/bg2.jpg'
    }
    else if(val =='mountain'){
        srcSTR='img/bg3.jpg'
    }
    else {
        srcSTR=val;
    }
    
}
function changeImage(){
    document.getElementById('controls').src =srcSTR;
}

storeString();