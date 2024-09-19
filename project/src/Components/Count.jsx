//======= Parent components of Count.jsx is Main.jsx ==============
// This Count component is imported in the Main Component 
//children is the predefined keyword this is used to get the data which are present in the parent component in element
import React from "react";

const Count = (x) => {
    console.log("Render", x.children);
    return (
        <div>
            <h1>{x.children} {x.data}</h1>
        </div>
    )
}
export default React.memo(Count)