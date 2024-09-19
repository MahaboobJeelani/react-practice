import { useRef } from "react"
const Themecolor  = ()=>{
    let colorRef = useRef()
    console.log(colorRef);
    let dark = ()=>{
        // document.querySelector()
        colorRef.current.style.background = "black"
        colorRef.current.style.color = "white"
        colorRef.current.style.height = "100vh"
        colorRef.current.style.width = "100vw"
    }
    let light = ()=>{
        colorRef.current.style.background = "none"
        colorRef.current.style.color = "black"
    }
    return(
        <div ref={colorRef} >
            <h1>Default Color is Activated</h1>
            <form>
                <label>Dark Theme</label>
                <input type="radio" name="a" onClick={dark}/>
                <label>Light Theme</label>
                <input type="radio" name="a" onClick={light}/>
            </form>
        </div>
    )
}
export default Themecolor

