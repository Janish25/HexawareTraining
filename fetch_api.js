function getallposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
console.log(json);
    })
}

getallposts()


let users=[]
function getusers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then( (json)=>{  
        users = json
        console.log(users);
    }
      
    )
}

getusers()



function getAllUsers(callback){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response. json( ) )
    .then (json=>{
    callback(json)
    
    }) }
    
    let trimmedUserArray=[];
    
    const displayUsers=(users)=>{
    users. forEach((u)=>{
    let trimmedUser = {
    id: u.id,
    name: u.name,
    email: u.email,
    city: u.address.city,
    companyName: u.company.name
    }

    trimmedUserArray.push(trimmedUser)
});

console.log(trimmedUserArray)

    }
getAllUsers(displayUsers);




const getAllCommentsByPostId =(postId)=>{
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' +postId)
    .then (response=>response. json() )
    .then (json=>{
    let comments= json;
    console.log(comments)
    })
    .catch(err=>console.log(err))
    }

getAllCommentsByPostId(5);

//test