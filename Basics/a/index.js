//variable
const direction={x:0,y:0};
let speed=2;
let lastpainttime=0;
//func
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastpainttime)/1000< 1/speed){
    return;
}
lastpainttime=ctime;
gameEngine();

}
function gameEngine(){
    
}

//logic
window.requestAnimationFrame(main);