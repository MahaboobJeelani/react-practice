import { useState } from "react";
// import img from "./ThumpsUp.png"
////cdn ==  Connectivity delivary network

const Thump = ()=>{
    let [data, setData]=useState(0)
    let a = ()=>{setData(data+1)}
    return(
        <div>
            <i class="fa-regular fa-thumbs-up" onClick={a}></i><sup>{data}</sup>
        </div>
    )
}
export default Thump