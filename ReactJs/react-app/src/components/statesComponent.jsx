import { useState } from "react"


const StateComp = () => {

    const [cnt, Setcnt] = useState(0);

    const counting = (op) => {
        if(op === 'INCR')
            Setcnt(cnt+1)
        if(op === 'DECS')
            Setcnt(cnt-1)
    }

    return(
        <>
            Count = {cnt} <br />
            <button onClick={()=>counting('INCR')}>Add Count</button>
            <button onClick={()=>counting('DECS')}>Minus Count</button>
        </>
    )
}

export default StateComp;