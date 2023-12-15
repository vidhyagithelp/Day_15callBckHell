
// let count=10;  

// let testing=(fn1)=>{
//     setTimeout(()=>{
//     document.getElementById("greeting").innerHTML=count;
//      count--;
//        fn1(count);
//     },1000);
   
// }
// let timer=(fn)=>{
//     console.log(count);
//     document.getElementById("greeting").innerHTML=count;
//     fn(f1);
// }

// let f1=(){

// }

 


// timer(testing);



// // timer();
// // let setTimeVar=setTimeout(timer,2000);


// let sum=0;
// let print=(res)=>{
//     console.log(res);
// }
// let test= (a,b,fn)=>{
//   sum=a+b;
//   fn(sum);
// }

// test(1,2,print);

let count=10;
let f1=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f2();
  },2000)
    
}


let f2=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f3();
  },2000)
  
}

let f3=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f4();
  },2000)
 
}

let f4=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f5();
  },2000)
  
}

let f5=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f6();
  },2000)
  
}

let f6=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f7();
  },2000)
  
}

let f7=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f8();
  },2000)
  
}

let f8=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f9();
  },2000)
  
}
let f9=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f10();
  },2000)
  
}
let f10=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML=count;
    count--;
    f11();
  },2000)
  
}
let f11=()=>{
  setTimeout(()=>{
    document.getElementById("greeting").innerHTML="Happy Independence Day";
    count--;
  },2000)
  
}

f1();

