import React, { useState } from 'react'
let Input = ({ labels, idvalue }) => {
    return (
        <div>
            <label>
                {labels} (keys = {idvalue})
                <input type="text" />
            </label>
        </div>
    )
}

const Keys = () => {
    let [label, setLabel] = useState([])

    let Addtobeginning = () => {
        setLabel([label.length + 1, ...label])
    }
    let Addtolast = () => {
        setLabel([...label, label.length + 1])
    }
    return (
        <div>
            <h1>Do Not Use Array Index as a Keys</h1>
            <button onClick={Addtobeginning}>AddToBegging</button>
            <button onClick={Addtolast}>AddToLast</button>
            {label.map((label, index) => {
                return (
                    <Input key={label} idvalue={label} labels={label} />
                )
            })}
        </div>
    )
}

export default Keys
