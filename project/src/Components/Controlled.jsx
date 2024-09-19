// import { useState } from "react"

// const Controlled = () => {
//     let [name, setName] = useState("")
//     let [salary, setSalary] = useState("")

//     console.log(name);
//     let nameData = (e) => {
//         // e.preventDefault()
//         setName(e.target.value)

//     }
//     let salaryData = (e) => {
//         // e.preventDefault()
//         setSalary(e.target.value)
//     }
//     let formHandler = (e) => {
//         e.preventDefault()
//         console.log(name, salary);
//     }


//     return (
//         <div>
//             <h1>Controlled Form</h1>
//             <form>
//                 <label>Name: </label>
//                 <input type="text" value={name} onChange={nameData} /> <br />
//                 <label>Salary: </label>
//                 <input type="text" value={salary} onChange={salaryData} /> <br />
//                 <button onClick={formHandler}>Submit</button>
//             </form>
//         </div>
//     )
// }
// export default Controlled

// //===============================================

import { useState } from "react"

const Controlled = () => {
    let [result, setResult] = useState()

    let [number1, setNumber1] = useState("")
    let [number2, setNumber2] = useState("")

    let Input1 = (e) => {
        e.preventDefault()
        Number(setNumber1(e.target.value))
    }
    let Input2 = (e) => {
        e.preventDefault()
        Number(setNumber2(e.target.value))
    }

    let add = (e) => {
        e.preventDefault()
        console.log(Number(number1)+Number(number2));
        setResult(Number(number1)+Number(number2))
    }

    let sub = (e) => {
        e.preventDefault()
        console.log(number1-number2);
        setResult(number1-number2)
    }

    let mul = (e) => {
        e.preventDefault()
        console.log(number1*number2);
        setResult(number1*number2)
    }

    let divi = (e) => {
        e.preventDefault()
        console.log(number1/number2);
        setResult(number1/number2)
    }

    return (
        <div>
            <h1>The result is {result}</h1>
            <form>
                <label>Enter Num 1 </label>
                <input type="text" value={number1} onChange={Input1} /> <br />
                <label>Enter Num 2</label>
                <input type="text" value={number2} onChange={Input2} /> <br />
                <button onClick={add}>Add</button>
                <button onClick={sub}>Sub</button>
                <button onClick={mul}>Mul</button>
                <button onClick={divi}>divi</button>
            </form>
        </div>
    )
}
export default Controlled