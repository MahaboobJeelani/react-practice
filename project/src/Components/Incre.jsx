

import { useState } from "react";
const Incre = ()=>{
    let [count, setCount] = useState(0)
    let incre = ()=>setCount(count+1)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incre}>Increment</button>
        </div>
    )
}
export default Incre


