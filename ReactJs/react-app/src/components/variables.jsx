 const Variables = ()=>{

    let name = 'Janish'
    let age = 21
    let x = 10;
    let y = 5;
    let graduated = false

    let employee = {
        name : " Janish",
        jobTitle : "Software dev",
        city : "chennai"
    }

    const contatinfo =()=>{
        console.log("Contact Revealed")
    }
    return(
        <div>
            <h5>Variables Compoents</h5>

            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>X+Y: {x+y}</p>

            <p>Did You Graduated ? {graduated === true?'Yes' : 'No'}</p>
             
             <h3>Employee Data</h3>
             <span>Name: {employee.name}</span> <br />
             <span>Name: {employee.jobTitle}</span> <br />
             <span>Name: {employee.city}</span> <br />
            

            <button onClick={contatinfo}>Contact</button>
        </div>
    )
}

export default Variables;