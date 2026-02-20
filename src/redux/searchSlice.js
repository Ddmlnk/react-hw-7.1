import { createSlice } from "@reduxjs/toolkit"


const slice = createSlice({
    name: "search",
    initialState: {data: ""},
    reducers:{
        searchUser:(state, action)=>{
            state.data= action.payload;
        },
    },
})
export const selectSearch = (state) => state.search.data;
export const {searchUser} = slice.actions
export default slice.reducer