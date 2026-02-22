import  userReducer  from "./userSlice"
import searchReducer from "./searchSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        user: userReducer,
        search: searchReducer,
}
})
