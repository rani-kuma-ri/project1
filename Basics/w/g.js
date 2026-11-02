let a=0;
let b=0;

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEvetlistener("click",()=>{
        console.log("choice was clicked");

    })
})