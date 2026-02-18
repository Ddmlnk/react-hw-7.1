import contactsData from '../contacts.json'
import { createSlice } from '@reduxjs/toolkit'


// export const addUser = createAction("user/addUser")
// export const deleteUser = createAction("user/deleteUser")

// export const userReducer = createReducer(
//     {data: contactsData},
//     (builder)=>{builder
//         .addCase(addUser, (state, action)=>{
//         state.data.push(action.payload)})
//         .addCase(deleteUser, (state, action)=>{
//         state.data = state.data.filter(item => item.id !== action.payload)
//         })
//     }   
// )

const slice = createSlice({
    name: "user",
    initialState:{data: contactsData},
    reducers: {
        addUser: (state, action)=>{
             state.data.push(action.payload)
        },
        deleteUser: (state, action) =>{
            state.data = state.data.filter(item => item.id !== action.payload)
        }
    }

})

export const {addUser, deleteUser } = slice.actions

export default slice.reducer