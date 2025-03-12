/**
 * PATH: https://jsonplaceholder.typicode.com/comments?postId=1
 * METHOD: GET
 * RESPONSE : array of comments for that post id 
 * PARAMS: postId
 * technique: async await
 */

const getAllCommentsByPostId= async (postId)=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId);
        let comments = await response.json(); 
        console.log(comments)
        console.log("good bye")
    }
    catch(err){
        console.log(`Error fetching comments for post with ID ${postId}`)
    }
}
getAllCommentsByPostId(1);