import React, {useState, useEffect} from "react";
import nameService from "./services/nameService";
import Names from "./components/Names"
import Buttons from "./components/Buttons"
import SearchForm from "./components/SearchForm"
import "./index.css"

const App = () => {
    const [names, setNames] = useState([])
    const [visible, setVisible] = useState(false)
    const [total, setTotal] = useState(0)
    const [filter, setFilter] = useState('')


    useEffect( () => {
        nameService
            .getAll()
            .then(response => {
                setNames(response.names)
            })
    },[])

    const handleDescending = async (event) => {
        const response = await nameService.getAll()
        await setNames(response.names)

        const copy = [...names]
        copy.sort((b, a) => a.amount - b.amount )
        setNames(copy)
        setVisible(false)
    }

    const handleAlphabetical = async (event) => {
        const response = await nameService.getAll()
        await setNames(response.names)

        const copy = [...names]

        copy.sort((b, a) =>
            a.name > b.name ? -1 : 1
        )
        setNames(copy)
        setVisible(false)
    }

    const handleTotal = async (event) => {
        const response = await nameService.getAll()
        await setNames(response.names)

        const copy = [...namesToShow]
        let total = 0
        copy.forEach(name => {
            total += name.amount
        })
        setTotal(total)
        setVisible(true)
    }

    const hideOnToggle = { display: visible ? 'none' : ''}
    const showOnToggle = { display: visible ? '' : 'none'}

    const inputHandler = (event) => {
        console.log(event.target.value)
        setVisible(false)
        setFilter(event.target.value)
    }

    const namesToShow = (filter.length > 0)
        ? names.filter(name => name.amount.toString() === filter.toString())
        : names

  return (
    <div>
        <div className="header">
            Solita dev academy exercise by Eetu Kohvakka
        </div>

        <div className="content">

            <div className="nav">
                <Buttons handleDescending={handleDescending} handleAlphabetical={handleAlphabetical} handleTotal={handleTotal} />
                <SearchForm filter={filter} inputHandler={inputHandler} />
            </div>

            <div className="data">
                <div style={showOnToggle}>
                    <p>{total}</p>
                </div>
                <Names names={namesToShow} style={hideOnToggle}/>
            </div>
        </div>

        <div className="footer">
            <span>Source code can be found in <a href="https://github.com/eskohv/solita-academy-exercise">GitHub</a></span>
            <span>Made by Eetu Kohvakka <br/> ekohvakka@gmail.com </span>
        </div>
    </div>

  );
}

export default App;
