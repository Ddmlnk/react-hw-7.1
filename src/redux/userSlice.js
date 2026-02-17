import contactsData from '../contacts.json'


export const addUser = (newUser)=>{
    return {
        type: "user/addUser",
        payload: newUser,
    }
}
export const deleteUser = (userId)=>{
    return {
        type: "user/deleteUser",
        payload: userId
    }
}

export const userReducer = (state={data: contactsData}, action)=>{
    switch(action.type){
        case("user/addUser"):
            return{
                data: [...state.data, action.payload]
            }

        case("user/deleteUser"):
            return{
                data: state.data.filter((item)=>item.id !== action.payload)
            }
        default:
            return state
    }
}