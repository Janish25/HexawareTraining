
function welcome(){//this cope is only within this function 
    return "Welcome " + fname; 
}

function welcomev2(fname){
    return "Welcome " + fname;  
}

console.log(welcome()) 
console.log(welcomev2('john')); 

//Arrow function 

const  welcomear = ()=>{
    let fname='harry';  
    return "Welcome " + fname; 
}

const welcomev2ar = (fname)=>{
    return "Welcome " + fname;  
}

console.log(welcomear()) 
console.log(welcomev2ar('john')); 

const formatName = (name)=>{return name.toLowerCase().replaceAll(" ","_") }
console.log(formatName('Harry James potter'));


