export const searchUser =(userName)=>{
    return{
        type: "search/searchUser",
        payload: userName
    }
}




export const searchReducer = (state={data: ""}, action)=>{
    switch(action.type){
        case("search/searchUser"):
            return {
                data: action.payload
            }

        
        default:
            return state
    }
}