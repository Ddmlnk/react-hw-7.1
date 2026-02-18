import  userReducer  from "./userSlice"
import searchReducer from "./searchSlice"
import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer:{
        user: userReducer,
        search: searchReducer,
}
})

// 1. Сворюємо configureStore(), передаємо йому перше поле
// reducer і редюсери які ми використовуємо

// 2. Створюємо екшини (функції які приймають значення)
//  export const addUser = creatAction("user/addUser"),
// якщо треба передати не просто число, то таке буде:
// export const addUser = createAction("user/addUser", (value)=>{
//      return{
            // payload:{
            //     x:10
            //     }}})
// 3. створюємо редюсери (функції які оброблюють значення)
// export const userReducer=createReducer(
// {початкові значення},
// (builder)=>{builder.addCase("user/addUser", (state, action)=>{})})
// приймає перший обєкт початкові значення
// другий аргумент фукнція білдер, де ми під кожен екшин робимо міні редюсер
// в білдері ми передаємо екшин і функцію ((state, action)=>{return{ ...state}})

// Але в редакс тулкіт ми можемо мутувати стан
// також в addcase першим аргументом можна передати екшин
// {builder.addCase(addUser, (state)=>{})}

// але на практиці і це не буде використовуватись !!!!

// все заміняємо на createSlice 
// const slice = createSlice({})
// 1. додаємо імя слайсу {name: user, }
// 2. початковий стан слайсу , initialState:{},
// 3. додаємо reducers: обʼєкт екшинів і їх редюсерів , addUser: (state, action)=>{},
// тобто ми в середині слайсу оголошуємо редюсери і екшини під ці слайсери
// тепер експортуємо екшин і редюсер
// export default slice.reducer і в store.js імпортуємо
// export const {addUser, deleteUser } = slice.actions експортуємо всі екшини