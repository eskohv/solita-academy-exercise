import React from 'react'

const Buttons = ({handleDescending, handleAlphabetical, handleTotal}) => {

    return (
        <div className="nav buttons">
            <button onClick={handleDescending}>Sort by descending amount</button>
            <button onClick={handleAlphabetical}>Sort alphabetically</button>
            <button onClick={handleTotal}>Show total amount of names</button>
        </div>
    )
}

export default Buttons