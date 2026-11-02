const a=document.getElementById('a');
a.addEventListener('click',(e)=>{
    const c= e.target;

  document.body.style.backgroundColor=c.id;
})