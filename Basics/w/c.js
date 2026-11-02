const body=document.querySelector("body");

body.addEventListener("mousemove",(e)=>{
const a=e.offsetX;
const b=e.offsetY;
const c=document.createElement("span");
c.style.left=a+"px";
c.style.right=b+"px";
const  cc=Math.random()* 100;
c.style.width=cc+"px";
c.style.height=cc+"px"
 body.appendChild(c);
setTimeout(() =>{
    c.remove();
},3000);




});