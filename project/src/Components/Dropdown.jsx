import { useState } from "react"

const Dropdown = () => {
  let [drop, setDrop] = useState(false)

  let drop1 = () => {
    setDrop(true)
  }

  let dropout = () => {
    setDrop(false)
  }

  return (
    <div>

      <h1 style={{ height: "200px", width: "200px", display: drop ? "block" : "none", background: "red" }} onMouseOut={dropout}>hello</h1>

      <h2 onMouseOver={drop1}>Welcome to my world</h2>

    </div>
  )
}
export default Dropdown