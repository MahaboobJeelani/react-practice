import { useRef } from "react"

const Form1 = () => {
    let nameRef = useRef()
    let companyRef = useRef()

    let formHandle = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value, companyRef.current.value);
    }

    return (
        <div>
            <form>
                <label>Name:</label>
                <input type="text" ref={nameRef} /> <br />
                <label>Comapny:</label>
                <input type="text" ref={companyRef} />
            </form>
            <button onClick={formHandle}>Submit</button>
        </div>
    )
}
export default Form1


