import React from 'react'

const SearchForm = ({filter, inputHandler, buttonHandler}) => {

    return (
        <div>
            Search by amount: <input value={filter} onChange={inputHandler}/>
        </div>
    )
}

export default SearchForm