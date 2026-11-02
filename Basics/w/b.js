
let inputslider=document.getElementById("inputslider");
let slidervalue =document.getElementById("slidervalue");

slidervalue.textContent = slidervalue.value;
 inputslider.addEventListener('input',()=>{
    slidervalue.textContent  = slidervalue.value;
  
});

