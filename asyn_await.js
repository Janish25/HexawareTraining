const getAllCommentsByPostId = async (postId)=>{
   try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' +postId)
        let comments = await response.json();

        console.log(comments);


   }
   catch(err){
    console.log(`Error Fetching ${postId}`)
   }
}

getAllCommentsByPostId(1);




// /*

// .filter() method is used to get specific items from an array based on a condition
// .map() method transforms each item in an array and returns a new array with the modified values.

// */




const fetchTodos = async () => {
    try {
       
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

      
        const completedTodos = todos.filter(todo => todo.completed);
        const incompleteTodos = todos.filter(todo => !todo.completed);

    
        console.log("Completed Todo Titles:");
        completedTodos.map(todo => console.log(todo.title));

        console.log("Incomplete Todo Titles:");
        incompleteTodos.map(todo => console.log(todo.title));

    } catch (error) {
        console.error("Error fetching TODOs:", error);
    }
};

fetchTodos();



