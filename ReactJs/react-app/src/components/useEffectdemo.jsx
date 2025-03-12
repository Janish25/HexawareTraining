import { useEffect, useState } from "react";

function Effects() {
    const [x, setX] = useState(10);

    useEffect(() => {
        console.log("useEffect called .... ");
        setX(11);
    }, []); 

    const add = () => {
        setX((preX) => preX + 2);
    };

    return (
        <>
            {console.log("return called ..... " + x)}
            <p>{x}</p>
            <button onClick={add}>Add 2 to x</button>
        </>
    );
}

export default Effects; 
