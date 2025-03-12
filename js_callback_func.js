function welcome(name,callback,logout){ 
    console.log('Welcome ' + name);
 
    callback()
    logout()
}

welcome('harry', ()=>console.log('GoodBye!!'),()=>{});
// check limit 








