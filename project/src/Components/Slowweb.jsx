import { useMemo } from "react"
import { useState } from "react"

const Slowweb = () => {
    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(0)

    let increme1 = () => {
        setCount1(count1 + 1)
    }

    // let Even = ()=>{
    //     let i = 0
    //     while(i<1000000000) i++
    //     return count1%2 == 0
    // }

    let Even = useMemo(() => {
        let i = 0;
        while (i <= 1000000000000000) {
            i++
            return count1 % 2 == 0
        }
    }, [count1])

    let increme2 = () => {
        setCount2(count2 + 1)
    }

    return (
        <div>
            <h1>{count1}</h1>

            <button onClick={increme1}>Incre1</button>
            {/* This h1 is using without useMemo() function */}
            {/* <h1>{Even()? "Even" : "Odd" }</h1> */}
            <h1>{Even ? "even" : "odd"}</h1>

            <h1>{count2}</h1>

            <button onClick={increme2}>Incre2</button>
        </div>
    )
}
export default Slowweb