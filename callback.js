function welcome(name,callback,logout){ 
    console.log('Welcome ' + name);
    //call another func from within this func
    callback()
    logout()
}

welcome('harry', ()=>console.log('GoodBye!!'),()=>{});