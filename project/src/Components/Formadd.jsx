
// import React, { useState, useRef } from "react";

// const Formadd = () => {
//   const [count, setCount] = useState(0);

//   const Enum1 = useRef(null);
//   const Enum2 = useRef(null);

//   const add = (e) => {
//     e.preventDefault();
//     const num1 = parseInt(Enum1.current.value);
//     const num2 = parseInt(Enum2.current.value);

//     const result = num1 + num2;
//     setCount(result)
//     console.log(result);
//   };

//   const div = (e) => {
//     e.preventDefault();
//     const num1 = parseInt(Enum1.current.value);
//     const num2 = parseInt(Enum2.current.value);

//     const result = num1 / num2;
//     setCount(result)
//     console.log(result);
//   }; 

//    const sub = (e) => {
//     e.preventDefault();
//     const num1 = parseInt(Enum1.current.value);
//     const num2 = parseInt(Enum2.current.value);

//     const result = num1 - num2;
//     setCount(result)
//     console.log(result);
//   };  

//    const mul = (e) => {
//     e.preventDefault();
//     const num1 = parseInt(Enum1.current.value);
//     const num2 = parseInt(Enum2.current.value);

//     const result = num1 * num2;
//     setCount(result)
//     console.log(result);
//   };

//   return (
//     <div>
//       <h1>Hello</h1>
//       <form>
//         <label>Enter Num 1</label>
//         <input type="text" ref={Enum1} /> <br />
//         <label>Enter Num 2</label>
//         <input type="text" ref={Enum2} /> <br />
//       </form>

//       <button onClick={add}>Addition</button>
//       <button onClick={sub}>Subtraction</button>
//       <button onClick={mul}>Multiplication</button>
//       <button onClick={div}>Division</button>

//       <h1>The Result is: {count}</h1>
//     </div>
//   );
// };

// export default Formadd



////================================================= Changing Input Value in the UI =====================================
// import { useRef, useState} from "react";


// const Formadd = ()=>{
//   let num1 = useRef()
//   let num2 = useRef()

//   let [result, setResult] = useState()
//   let [operation, setOperation] = useState("")


//   function add(e){
//     e.preventDefault()
//     let a = num1.current.value
//     let b = num2.current.value

//     setOperation("addition")
//     setResult(Number(a)+Number(b))

//   }
//   function sub(e){
//     e.preventDefault()
//     let a = num1.current.value
//     let b = num2.current.value

//     setResult(a-b)
//     setOperation("Subtraction")

//   }
//   function divi(e){
//     e.preventDefault()
//     let a = num1.current.value
//     let b = num2.current.value

//     setResult(a/b)
//     setOperation("Division")

//   }
//   function multi(e){
//     e.preventDefault()
//     let a = num1.current.value
//     let b = num2.current.value

//     setResult(a*b)
//     setOperation("Multiplication")

//   }

//   return(
//     <div>
//       <form>
//         <label >Enter Number 1</label>
//         <input type="text" ref={num1}/> <br />
//         <label >Enter Number 2</label>
//         <input type="text" ref={num2}/> <br />
//       </form>
//       <button onClick={add}>+</button>
//       <button onClick={sub}>-</button>
//       <button onClick={divi}>/</button>
//       <button onClick={multi}>*</button>
//       <h1 >The {operation} of Two Number is:{result}</h1>
//     </div>
//   )
// }
// export default Formadd

////================================================= Changing text in the UI =====================================
import { useRef, useState } from "react";


const Formadd = () => {
  let num1 = useRef()
  let num2 = useRef()

  let [result, setResult] = useState()
  let [operation, setOperation] = useState("Operation")

  let [number1, setNumber1] = useState(0)
  let [number2, setNumber2] = useState(0)



  function add(e) {
    e.preventDefault()
    let a = num1.current.value
    let b = num2.current.value

    setOperation("addition")
    setResult(Number(a) + Number(b))
    setNumber1(a)
    setNumber2(b)

  }
  function sub(e) {
    e.preventDefault()
    let a = num1.current.value
    let b = num2.current.value

    setResult(a - b)
    setOperation("Subtraction")
    setNumber1(a)
    setNumber2(b)

  }

  function divi(e) {
    e.preventDefault()
    let a = num1.current.value
    let b = num2.current.value

    setResult(a / b)
    setOperation("Division")
    setNumber1(a)
    setNumber2(b)
  }

  function multi(e) {
    e.preventDefault()
    let a = num1.current.value
    let b = num2.current.value

    setResult(a * b)
    setOperation("Multiplication")
    setNumber1(a)
    setNumber2(b)

  }

  return (
    <div>
      <form>
        <label htmlFor="">Enter Number 1</label>
        <input type="text" ref={num1} /> <br />
        <label htmlFor="">Enter Number 2</label>
        <input type="text" ref={num2} /> <br />
      </form>
      <button onClick={add}>+  </button>
      <button onClick={sub}>-</button>
      <button onClick={divi}>/</button>
      <button onClick={multi}>*</button>
      <h1 >The {operation} of {number1} and {number2} is:{result}</h1>
    </div>
  )
}
export default Formadd


// return (
//   <div>
//     <label htmlFor="">num 1</label>
//     <input type="text" ref={number1}/>
//     <label htmlFor="">num 2</label>
//     <input type="text" ref={number2}/>
//     <button onClick={add}>add</button>
//     <button onClick={sub}>sub</button>
//     <button onClick={mul}>Mul</button>
//     <button onClick={divi}>divi</button>
//   </div>
// )
// }

// export default Formadd