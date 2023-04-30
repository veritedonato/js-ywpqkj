// Aurora: Designed by Aerai Brooks of Creative Media
// A complete web operating system geared for social gaming and fun.




class Widget {
constructor(x,y,w,h,t,c,b,movable,clicked) {

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.movable=movable;
this.clicked=clicked;

this.layers=[];



this.layer = function(layer) { 

this.layers.push(layer);

}

this.move=function(offsetX,offsetY) {

  if(!this.movable)
return;


this.x+=offsetX;
this.y+=offsetY;

this.render();

};

this.pollGamepad=function() {
this.gamepad=navigator.getGamepads()[0];

if(!this.gamepad) {
return;
}

if(this.gamepad.buttons[14].pressed)
this.move(-10,0);
if(this.gamepad.buttons[15].pressed)
this.move(10,0);
if(this.gamepad.buttons[12].pressed)
this.move(0,-10);
if(this.gamepad.buttons[13].pressed)
this.move(0,10);

};


this.createEvents = function() { // creates essential events for the widget

if(this.clicked())
window.addEventListener("onclick",function() {


this.clicked();

});

window.addEventListener("onkeydown",function() {

if(e.keyCode==37) {

this.move(-10,0);


}
if(e.keyCode==39) {

this.move(10,0);


}
if(e.keyCode==38) {


this.move(0,-10);

}
if(e.keyCode==40) {

this.move(0,10);


}

});

window.addEventListener("gamepadconnected",(e) => {

this.gamepadLoop=setInterval(this.pollGamepad,100);

});

window.addEventListener("gamepaddisconnected",(e) => {

clearInterval(this.gamepadLoop);

});

}

this.render=function() {

this.element=document.createElement('div');

this.element.style.backgroundImage=b;


this.element.style.position="absolute";
this.element.style.left=this.x;
this.element.style.top=this.y;
this.element.style.width=this.w;
this.element.style.height=this.h;


this.element.style.color=this.color;

this.element.style.fontFamily="arial";
this.element.style.fontSize=24;
this.element.style.fontWeight="bold";

this.element.innerHTML=t;


};

this.renderLayers = function () {

    this.render();

    for ( var i = 0; i < this.layers.length; i++ ) {

          this.layers.render();

    }

}

}
}

  
function main() {

  document.body.style.backgroundColor = "black";

    var w = new Widget(250,250,250,250,"KODI","white","https://cdn.wallpapersafari.com/51/91/yk2thu.png",true,function () {



    });

      w.renderLayers();

}

main();