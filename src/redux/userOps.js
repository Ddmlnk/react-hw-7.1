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
// запит на бекенд в редаксі називається операція.
// операції зберігаються в окремому файлі.
// 
// ми так само використовуємо аксіос як і раніше (бейсюрл, гет, пост)
// 1. використовуємо фукнцію createAthyncThunk, яка створює операцію
// exp const fetchTask= createAthyncThunk('префікс', асинхронна функція де робиться запит)
// const responce = await ...
// ця функція створює три екшини (пендінг, фулфілд, реджектет)
// ретьорном буде responce.data але в результаті це actoins.payload
// 2. діспатчимо фінкцію 
// 3. обробляємо операцію в слайсі
//  треба додати поле в креейтслайс extrareducers: (builder)=>
//       (builder)=>
//          builder.addCase(fetchTask.pending, (state, action)=>{})
//              тепер треба обробити всі три екшини, таким чином як і раніше робили
// 4. обробка помилки 
//  у фентчТаск використовуємо трайкетч для обробки помилки
//   у асинхронну функцію можна передати два значення(перший це значення при діспатчі а другий це thunkAPI)
//  thunkAPI це обєкт рекдаксу який відповідає за асинхронність
//  тоді в кетчі повертаємо thunkAPI.rejectWithValue()
//
//  якщо не обробити кетч то навіть при існуючій помилці ми отримаємо фулфілд!!!


// ==========================================================================================================


// ми селектори експортуємо із слайсів, бо вони можуть з часом змінюватись.
// const selectLoading=state=> state.tasks.loading
// назва селектора починається зі слова select
// простий селектор повретає шматочок стану (як і раніше) 
// export const selectSearch = (state) => state.search.data;
// складний серектор може через ретьорн повертати якесь обчислення
// складний серектор треба записувати в мемо
// для цього ми використовуємо createSelector([залежні селектори], (сюди аргументи)=>{тут повертаємо результат обчислення})
//
//
//
//
//