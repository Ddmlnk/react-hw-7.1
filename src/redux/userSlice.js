// import contactsData from '../contacts.json'
import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers, addContact, deleteContact } from './userOps'
import { createSelector } from "@reduxjs/toolkit";
import { selectSearch } from './searchSlice';

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
    initialState:{
        data: [],
        isLoading: {
            getContacts: false,
            addContact: false,
            deleteContact: false,
        },
        isError:{
            getContacts: false,
            addContact: false,
            deleteContact: false,
        },
    },
    reducers: {
        addUser: (state, action)=>{
             state.data.push(action.payload)
        },
        deleteUser: (state, action) =>{
            state.data = state.data.filter(item => item.id !== action.payload)
        }},
    extraReducers: (builder)=>
        builder.addCase(fetchUsers.pending, (state)=>{
            state.isLoading.getContacts=true;
            state.isError.getContacts = false;
        }).
        addCase(fetchUsers.fulfilled, (state, action)=>{
            state.isLoading.getContacts=false;
            state.data = action.payload;
        }).
        addCase(fetchUsers.rejected, (state)=>{
            state.isError.getContacts=true;
        }).
        addCase(addContact.pending, (state)=>{
            state.isError.addContact=false;
            state.isLoading.addContact=true;
        }).
        addCase(addContact.fulfilled, (state, action)=>{
            state.isLoading.addContact=false;
            state.data.push(action.payload)
        }).
        addCase(addContact.rejected, (state)=>{
            state.isLoading.addContact=false;
            state.isError=true;
        }).
        addCase(deleteContact.pending, (state)=>{
            state.isLoading.deleteContact=true;
            state.isError.deleteContact=false;
        }).
        addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading.deleteContact = false;
            state.data = state.data.filter((item) => item.id !== action.payload.id);
        }).
        addCase(deleteContact.rejected, (state)=>{
            state.isLoading.deleteContact=false;
            state.isError.deleteContact=true;
        })


})

export const selectUsers = state=> state.user.data

export const selectVisibleData = createSelector(
    [selectUsers, selectSearch], 
    (allData, filteredData) => {
      
        
        return allData.filter((item) => 
            item.name.toLowerCase().includes(filteredData.toLowerCase())
        );
    }
);


export default slice.reducer