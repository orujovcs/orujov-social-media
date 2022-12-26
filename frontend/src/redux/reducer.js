const initialState = {
    user: {
        firstName : "Raul",
        lastName : "Orujov",
        userName : "orujovcs",
        password : "123456"
    },
    permission : false
}

function reducer(state = initialState,action){
    if(action.type === 'ADD_USER'){
        state.user.firstName = action.payload.info[0].value;
        state.user.lastName = action.payload.info[1].value;
        state.user.userName = action.payload.info[2].value;
        state.user.password = action.payload.info[3].value;
        console.log(state)
        return state;
    }

    else if(action.type === 'LOGIN_ACC'){
        if(
            state.user.userName === action.payload.info[0].value &&
            state.user.password === action.payload.info[1].value
        ){
            state.permission = true;
            console.log(state.permission);
        }
        return state;
    }
    return state;
}

export default reducer;
