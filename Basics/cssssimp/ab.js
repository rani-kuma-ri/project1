document.onkeydown= function(e){
     console.log(e.key)
    if(e.key===38){
    b=document.querySelector('.b');
    b.classlist.add('e');
    setTimeout(() =>{
      b.classlist.remove('e')
    },700  ); 
    

    
    }  
}
