import { useState } from "react";

const List = () => {
    let [arr] = useState(["hi", "Hello", "bye"])
    return (
        <div>
            <h1>
                {arr.map((element) => {
                    return (
                        <p>{element}</p>
                    )
                })}</h1>
        </div>
    )
}
export default List