/*
    - fetch all TODOs from the API using fetch with async await 
    - filter todos that have been complete/incomplete using filter operation 
    - display the titles of complete/incomplee todos using map operation 

    extected output: 
    Completed/ incomplete Todo titles

    - delectus aut autem
    - quis ut nam facilis et officia qui
    .... 

    API PATH: https://jsonplaceholder.typicode.com/todos

    getAllTodoTitles('complete'/'incomplete')
*/


const getAllTodoTitles = async (status)=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');  
        let todos = await response.json();
        //filter: filter based on status
        let filteredTodos = todos.filter(t=>t.completed === status);
        //map: reduce the object todo to only titles 
        let todoTiles = filteredTodos.map(t=>t.title);
        todoTiles.forEach(t => console.log(`- ${t}`));
    }
    catch(err){
        console.log('Error fetching todos' + err)
    }
}

getAllTodoTitles(false);