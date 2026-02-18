import { createSlice } from "@reduxjs/toolkit"

// export const searchUser = createReducer("search/searchUser")



const slice = createSlice({
    name: "search",
    initialState: {data: ""},
    reducers:{
        searchUser:(state, action)=>{
            state.data= action.payload;
        },
    },
})

export const {searchUser} = slice.actions
export default slice.reducer