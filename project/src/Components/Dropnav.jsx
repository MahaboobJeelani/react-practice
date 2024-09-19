import { useState } from "react"
import style from "./drop.module.css"

const Dropnav = ()=>{
    let [menu, setMenu] = useState(false)
    let dropin = ()=>{
        setMenu(true)
    }
    let dropOut = ()=>{
        setMenu(false)
    }
    return(
        <div>
            <div onMouseOver={dropin}   className={style.hello} ><h1>Hello</h1></div>

            <div  className={style.menu} onMouseOut={dropOut} style={{height:"300px", width:"250px", display:menu?"block": "none", background:"hotpink"}}>
                <ul>
                    <li>Arun</li>
                    <li>Jeelani</li>
                    <li>Basha</li>
                    <li>Gowdtham</li>
                </ul>
            </div>
        </div>
    )
}
export default Dropnav