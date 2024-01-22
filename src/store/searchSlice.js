import { createSlice } from "@reduxjs/toolkit"
import { getUserSearchResult } from "../services/searchService"

const initialState = {
    searchResult : []
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserSearchResult.fulfilled , (state,action) => {
            state.searchResult = action.payload?.slice(0, 4)
        })
        .addCase(getUserSearchResult.rejected, (state,action) => {
            state.searchResult = []
        })
    }
})



export default searchSlice.reducer;