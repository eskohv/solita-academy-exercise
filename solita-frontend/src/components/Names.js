import React from "react";

const Names = ({names, style}) => {

    return(
        <div style={style}>
            {names.map((name, i) =>
                <li key={i}> {name.name} {name.amount} </li>
            )}
        </div>
    )
}

export default Names