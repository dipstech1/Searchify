import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const TRAVEL_DATA = [
    {id:1, name : "India"},
    {id:2, name : "Dubai"},
    {id:3, name : "UK"},
    {id:4, name : "Australia"},
    {id:5, name : "China"},
]

const searchApiData = (searchStr = '') => {
    return new Promise((resolve,reject) => {
        let result = TRAVEL_DATA.filter(destination => destination.name.toLowerCase().includes(searchStr.toLocaleLowerCase()));
        resolve(result)
    })
}

export const getUserSearch = async(searchStr) => {
    try {
        let res = await searchApiData(searchStr);
        return res
    } catch (error) {
        throw new Error("Error occoured")
    }
}

export const getUserSearchResult = createAsyncThunk(
    '[search-api]',
    async(thunkAPI) => {
        try {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)