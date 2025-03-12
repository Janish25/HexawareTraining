const x = [4,6,1,8,3,0]; 

console.log(x.length); //6
console.log(x[3]) //8


let emp1={ 
    name: 'harry',
    dept: 'IT',
    empNum: 'E8879',
    city: 'Chennai',
    salary: 87000,
    contact: '7766879879'
}

let emp2={ 
    id: 2,
    name: 'ronald',
    dept: 'DEV',
    empNum: 'E4457',
    city: 'Mumbai',
    salary: 98000,
    contact: '7788994768'
}

let employee =[emp1,emp2]; 
const empArray=[];
console.log(empArray.length); //0
empArray.push(emp1);
empArray.push(emp2); 
console.log(empArray.length); //2
console.log(employee.length); //2


empArray.forEach((e)=>console.log(e.city))


 let empFilter = empArray.filter((e)=>e.city.toLowerCase() === 'chennai'.toLowerCase())
 empFilter.forEach((e)=>console.log(e))

 console.log(...empArray.filter((e)=>e.city.toLowerCase() === 'chennai'.toLowerCase()))

 console.log("-----After Increment----")

 let empArrayIncr =  
 empArray
 .filter((e)=>e.dept.toLowerCase() === 'DEV'.toLowerCase())
 .map((e)=>({...e, salary: e.salary+(e.salary*0.1)}))

console.log(empArrayIncr)
console.log("-----original array-----")
console.log(empArray)


let emp3={ 
    id: 3,
    name: 'john',
    dept: 'DEV',
    empNum: 'E7857',
    city: 'Mumbai',
    salary: 82000,
    contact: '7755694768'
}
empArray.push(emp3)
console.log("-------After sorting---------")
console.log(empArray.sort((e1,e2)=>e1.salary - e2.salary)) //ascending

console.log(empArray.sort((e1,e2)=>e2.salary - e1.salary)) //decending


