import user from "./usercontent1.json"
import { useState } from "react"
const Fetchdata = () => {
    let [data, setData] = useState(user)
    {/* using filter by name */}
    let [filterdata, setFilterdata] = useState('')


    {/* using filter by name */}
    let filterByName = data.filter(datas => datas.login.includes(filterdata))
    return (
        <div>
            {/* using filter by name */}
            <input type="text" value={filterdata} onChange={(e) => setFilterdata(e.target.value)} />
            <h1>Fetching data from the json file usercontent1</h1>
            <table border="2px" cellSpacing="0px" cellPadding="10px">
                <tr>
                    <th>Login ID</th>
                    <th>ID</th>
                    <th>Node ID</th>
                    <th>Avatar URL</th>
                </tr>

                {/* using filter by name */}
                {filterByName.slice(0, 11).map((ele) => {
                    // Without using filter data by name
                    // {data.slice(0, 11).map((ele) => {
                    return (
                        <tr>
                            <td>{ele.login}</td>
                            <td>{ele.id}</td>
                            <td>{ele.node_id}</td>
                            <td><img src={ele.avatar_url} height="100px" width="100px" /></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Fetchdata