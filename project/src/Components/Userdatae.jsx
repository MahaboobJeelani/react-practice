///= ============================   useEffect ===============================

import axios from "axios";
import { useEffect, useState } from "react"

const Userdatae = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }, [])

    return (
        <div>
            <h1>Hello</h1>

            {data.map((x) => {
                return (
                    <div>
                        <h1>{x.login}</h1>
                        <img src={x.avatar_url} alt="" height="200px" width="200px" />
                    </div>
                )
            })}
        </div>
    )
}
export default Userdatae