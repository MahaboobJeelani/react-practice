import { useRef } from "react"
const Referances = () => {
    let demoRef = useRef()
    console.log(demoRef); // {current :undifined}

    let chg = () => {
        demoRef.current.style.background = "red"
    }

    return (
        <div>
            <h1>Referances 1</h1>
            <h2 ref={demoRef}>Referances 2</h2>
            <button onClick={chg}>Click</button>
        </div>
    )
}
export default Referances