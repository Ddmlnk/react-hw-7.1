import { createStore, combineReducers } from "redux"
import { userReducer } from "./userSlice"
import { searchReducer } from "./searchSlice"

const rootReducer = combineReducers ({
    user: userReducer,
    search: searchReducer,
})

export const store = createStore(rootReducer)