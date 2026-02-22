import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://699823d2d66520f95f16a55f.mockapi.io"

export const fetchUsers = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI)=>{

    try{
        const response = await axios.get("/contacts")
        return response.data
    } catch (error){
        console.log("ERROR!!! ", thunkAPI.rejectWithValue(error))
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async(newContact, thunkAPI)=>{
    try{
        const response =  await axios.post("/contacts", newContact)
        console.log("response.data: ", response.data)
        return response.data
    } catch(error){
        console.log("ERROR!!! ", thunkAPI.rejectWithValue(error))
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async(contactId, thunkAPI)=>{
    try{
        const response = await axios.delete(`/contacts/${contactId}` )
        return response.data
    } catch (error){
        console.log("ERROR!!!: ", thunkAPI.rejectWithValue(error))
    }
})
