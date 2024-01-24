import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { getUserSearch } from '../services/searchService';

const Search = () => {
    const [items, setItems] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const searchData = async () => {
            let res = await getUserSearch(searchStr)
            console.log("Result ", res);
            setItems(r => res)
        }
        setTimeout(() => {
            searchData()
        }, 2000);
    }, [searchStr])

    const handleOnSearch = (string, results) => {
        console.log(string, results)

        setSearchStr(str => string)
    }


    const handleOnSelect = (item) => {
        // the item selected
        navigate(`/result/${item.name}`)
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>Name: {item.name}</span>
            </>
        )
    }
    return (
        <div className='center' style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    autoFocus
                    formatResult={formatResult}
                    styling={{
                        backgroundColor:"black",
                        borderRadius:"0px",
                        backgroundColor:"#0d6efd",
                        color:"#fff",
                        iconColor:"#fff"
                    }}
                />
            </div>
        </div>
    )
}

export default Search