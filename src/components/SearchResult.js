import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getUserSearchResult } from '../services/searchService';
import InfoCard from './InfoCard';
import { useDispatch, useSelector } from 'react-redux';

const SearchResult = () => {
    const [result, setResult] = useState([]);

    const dispatch = useDispatch();
    
    const {searchResult} = useSelector((state) => state?.search)

    useEffect(() => {
        // const searchResultData = async () => {
        //     let res = await getUserSearchResult()
        //     let result = res.slice(0, 4);
        //     setResult(result)
        // }
        // searchResultData()
        dispatch( getUserSearchResult());
    }, [])
    return (
        <div className='search-container vh-100' style={{
            // height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            <div className='result-container'>
                <div className='row'>
                    {
                        searchResult ? (searchResult.map((data, index) => {
                            return (
                                
                                    <div className='col-md-6 col-lg-3' >
                                        <InfoCard data={data} />
                                    </div>
                            )
                        })) : (<h2>Loading...</h2>)
                    }


                </div>
            </div>
        </div>
    )
}

export default SearchResult