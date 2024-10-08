// ==================== Count components is connected to thid components  and Button component ====================
// import Count from "./Count"
// import Button from "./Button"
// import { useCallback, useState } from "react"
// const Main = ()=>{
//     let [age, setAge] = useState(25)
//     let [salary, setsalary] = useState(50000)

//     let increAge = ()=>{
//         setAge(age+1)
//     }

//     let IncreSalary = ()=>{
//         setsalary(salary+5000)
//     }

//     return(
//         <div>
//             <Count data={age}> Age </Count>
//             <Button fun={increAge}> Age</Button>
//             <Count data={salary}> Salary</Count>
//             <Button fun={IncreSalary}> Salary </Button>
//         </div>
//     )
// }
// export default Main

// ==================== Count components is connected to Count components and Button component ====================

import Count from "./Count"
import Button from "./Button"
import { useCallback, useState } from "react"

const Main = () => {
    let [age, setAge] = useState(25)
    let [salary, setsalary] = useState(30000)

    let increAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    let IncreSalary = useCallback(() => {
        setsalary(salary + 5000)
    }, [salary])

    return (
        <div>
            <Count data={age}> Age </Count>
            <Button fun={increAge}> Age</Button>
            <Count data={salary}> Salary</Count>
            <Button fun={IncreSalary}> Salary </Button>
        </div>
    )
}
export default Main

