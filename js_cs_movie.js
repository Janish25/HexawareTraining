
const booktickets=(movieName,ticketCost,callback1,callback2)=>
    {
        console.log(`ticket booking for ${movieName} in the process, pls wait for confirmation`);
        setTimeout(()=>callback1(movieName,ticketCost,callback2),2000);
    }
    const confirmTickets=(movieName,ticketCost,callback)=>{
        console.log(`booking is confirm for ${movieName}, wait till we take you to payment screen`);
        setTimeout(()=>callback(movieName,ticketCost),3000);
    }
    const processTicket=(movieName,ticketCost)=>
    {
        console.log(`payment confirm for ${ticketCost} , enjoy the movie ${movieName}`);
    }

    booktickets("DDLJ",600,confirmTickets,processTicket);
     