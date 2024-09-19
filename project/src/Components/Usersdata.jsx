import user from "./usercontent1.json"
import { useState } from "react"
const Userdata = ()=>{
    let [data] = useState(user)
    return(
        <div>
            <h1>HELLO</h1>
            <table border="2px" cellSpacing="0px" cellPadding="10px">
                <tr>
                    <th>Login ID</th>
                    <th>Id</th>
                    <th>Node ID</th>
                    <th>Avatar URL</th>
                </tr>
                
                {data.map((ele)=>{
                    return(
                        <tr key={ele.id}>
                            <td>{ele.login}</td>
                            <td>{ele.id}</td>
                            <td>{ele.node_id}</td>
                            <td><img src={ele.avatar_url} height="100px" width="100px"/></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Userdata