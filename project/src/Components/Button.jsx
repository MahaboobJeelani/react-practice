//======= Parent components of Count.jsx is Main.jsx
// This Count component is imported in the Main Component 
import React from "react";
const Button = (y) => {
    console.log("Render", y.children);
    return (
        <div>
            <button onClick={y.fun}> Increment {y.children} </button>
        </div>
    )
}
export default React.memo(Button)