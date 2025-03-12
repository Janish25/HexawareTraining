/*
PATH: https://jsonplaceholder.typicode.com/posts
METHOD: GET
RESPONSE: Array of Posts  - []
PARAMS: none
*/
function getAllPosts(){
fetch('https://jsonplaceholder.typicode.com/posts')  //fetch response from API
.then((response)=>{    
   return response.json();    //convert response to json 
})
.then((json)=>{
    console.log(json);      //read json and display
})
}

/**
 * PATH: https://jsonplaceholder.typicode.com/users
 * METHOD: GET
 * RESPONSE : array of users 
 * PARAMS: none
 */

function getAllUsers(callback){ 
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(json=>{
                    callback(json)  
            })
    } 
 
let trimmedUserArray=[];

const displayUsers=(users)=>{
    users.forEach((u)=>{
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

//getAllPosts();
//getAllUsers(displayUsers);
/** 
 * status: 200 -- all good 
 */

/**
 * PATH: https://jsonplaceholder.typicode.com/comments?postId=1
 * METHOD: GET
 * RESPONSE : array of comments for that post id 
 * PARAMS: postId
 */
const getAllCommentsByPostId=(postId)=>{
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' +postId)
    .then(response=>response.json())
    .then(json=>{
        let comments= json; 
        console.log(comments)
    })
    .catch(err=>console.log(err))
}

getAllCommentsByPostId(5);
