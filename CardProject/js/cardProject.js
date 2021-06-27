var deg = 2; // starting
var rotation_diff = 30; // you can change it to 2 if you want to rotate 2 deg in each second
var y = 0;
var dy = 10;
var x = 0;
var dx =10;
var clicks=0;
var y2=0;
var x2=0;
var y3=0;
var x3=0;
var y4=0;
var x4=0;
var deg2=2;
var deg3=2;
var deg4=2;

function start() 
{ 
   switch (clicks) {      //state machine!
      case 0:
         rotate();
         
         break;
      case 1:
         movedown();
         
         break;
      case 2:
         moveright();
         
         break;
   }
   clicks=clicks+1;
}

function rotate()
{
var img = document.getElementById("card1");

img.style.webkitTransform = "rotate("+deg+"deg)";
img.style.transform = "rotate("+deg+"deg)";
img.style.MozTransform = "rotate("+deg+"deg)";
img.style.msTransform = "rotate("+deg+"deg)";
img.style.OTransform = "rotate("+deg+"deg)";
img.style.position="relative";
img.style.top=y+"px";
y = y + dy;
img.style.left=x+"px";
x = x + dx; 

setTimeout("rotate()",50);    
deg = deg + rotation_diff;
}

function rotate2()
{
  var img = document.getElementById("card2");

img.style.webkitTransform = "rotate("+deg2+"deg)";
img.style.transform = "rotate("+deg2+"deg)";
img.style.MozTransform = "rotate("+deg2+"deg)";
img.style.msTransform = "rotate("+deg2+"deg)";
img.style.OTransform = "rotate("+deg2+"deg)";
img.style.position="relative";
img.style.top=y2+"px";
y2 = y2 + dy;
img.style.left=x2+"px";
x2 = x2 + dx; 

setTimeout("rotate2()",50);    
deg2 = deg2 + rotation_diff;

} 


function rotate3()
{
var img = document.getElementById("card3");

img.style.webkitTransform = "rotate("+deg3+"deg)";
img.style.transform = "rotate("+deg3+"deg)";
img.style.MozTransform = "rotate("+deg3+"deg)";
img.style.msTransform = "rotate("+deg3+"deg)";
img.style.OTransform = "rotate("+deg3+"deg)";
img.style.position="relative";
img.style.top=y3+"px";
y3 = y3 + dy;
img.style.left=x3+"px";
x3 = x3 + dx; 

setTimeout("rotate3()",50);    
deg3 = deg3 + rotation_diff;

}


function rotate4()
{
var img = document.getElementById("card4");
img.style.webkitTransform = "rotate("+deg4+"deg)";
img.style.transform = "rotate("+deg4+"deg)";
img.style.MozTransform = "rotate("+deg4+"deg)";
img.style.msTransform = "rotate("+deg4+"deg)";
img.style.OTransform = "rotate("+deg4+"deg)";
img.style.position="relative";
img.style.top=y4+"px";
y4 = y4 + dy;
img.style.left=x4+"px";
x4 = x4 + dx; 

setTimeout("rotate4()",50);    
deg4 = deg4 + rotation_diff;

}

function movedown()
{
var img = document.getElementById("card1");

img.style.position="relative";
img.style.top=y+"px";
console.log(y+"px");
y = y + dy;


setTimeout("movedown()",500);    
// deg = deg + rotation_diff;
}

function moveright()
{
var img = document.getElementById("card1");
img.style.position="relative";
img.style.left=x+"px";
console.log(x+"px");
x = x + dx; 

setTimeout("moveright()",500);
}