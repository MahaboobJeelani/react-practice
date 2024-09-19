import array from "./arrayobje.json"
import { useState } from "react"
const Arrayobje = () => {
    let [data, setData] = useState(array)

    return (
        <div>
            <h1>Fetching data from the json file</h1>
            <table border="red" cellPadding={"10px"} cellSpacing={"0px"}>
                <tr>
                    <th>UserId</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>

                {data.map((ele) => {
                    return (
                        <tr>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.body}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Arrayobje

