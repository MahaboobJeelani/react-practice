import userContent from "./usercontent1.json"
import { useState } from "react"
const Usercontent = () => {
    let [user] = useState(userContent)
    return (
        <div>
            <h1>jsonplaceholder.typicode.com/posts</h1>
            {user.map((element) => {
                return (
                    <div>
                        Name:{element.id}
                    </div>
                )
            })}
        </div>
    )
}
export default Usercontent