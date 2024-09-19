
import axios from "axios"
import { useEffect, useState } from "react"

const FetchData1 = () => {
    let [content, setContent] = useState([])
    let [id, setId] = useState("")
    let [btn, setBtn] = useState("")

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
            .then((res) => {
                setContent(res.data)
                // console.log(res.data);
            }).catch(() => {
                console.log("Error in the Link");
            })
    }, [btn])

    let setId1 = (y) => {
        setId(y.target.value)
    }

    let submitdata = () => {
        setBtn(id)
    }

    return (
        <div>
            <label htmlFor="">Give Id number</label>
            <input type="text" value={id} onChange={setId1} />
            <button onClick={submitdata}>Submit</button>

            <h1>Id:{content.id}</h1>
            <h1>Username:{content.userId}</h1>
            <h1>Title:{content.title}</h1>
        </div>
    )
}
export default FetchData1



