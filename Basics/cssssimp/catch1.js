function a (b,c){
    setTimeout(() =>{
        console.log(b);
        if(c){
            c();
        }

    },5000);
} 

//callback hell
a(1,() =>{
    console.log("hi");
    a(2,() =>{
         console.log("hii");
         a(3,() =>{
             console.log("hiii");
         });
    });
});




//promise
//[
let promise =new promise((resolve,reject) =>{
    console.log("hi");
    reject("some error");
});
//]

[
function a (b,c){
    return new promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log(b);
        reject("error")
        if(c){
            c();
        }

    },5000);
} 
]

[
const a =() =>{
    return new promise((resolve,reject) =>{
   
        console.log(b);
        resolve('hi')
    });
}


 let z=   a();
 z.then((resolve) =>{
     console.log("hi" resolve);  
 })
]

[
    const a =() =>{
    return new promise((resolve,reject) =>{
    
        console.log(b);
       reject ('hi' error)
    });
}



    let z=   a();
 z.catch((error) =>{
     console.log("hi");  
 ]

//chain
[
     function a1 (){
    return new promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("b1");
       reject ('hi')
    },5000);

    }


     function a2 (){
    return new promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log(b);
       reject ('hi')
    },5000);
}

      let z1=   a1();
 z1.catch((error) =>{
     console.log(error); 
    let z2=   a2();
    z2.catch((error) =>{
     console.log("hi" error); 

 ]

[   function a2 (){
    return new promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log(b);
       resolve ('hi')
    },5000);
}
    )

   let z2=   a2();
    z2.then((resolve) =>{
     console.log("hi"); 
    }]




//async

 async function a2 (){
        console.log("b2");
 }


 [
      function api (){
    return new promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("b2");
    resolve(200);
},2000);

async function a(){
await api();
await api();
    }
 ]

 
