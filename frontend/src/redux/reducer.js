const initialState = {
    login:{
        username: "",
        password: ""
    },
    user: {
        firstName : "",
        lastName : "",
        userName : "",
        password : "",
        followings : 0,
        followers : 0,
        posts : 0,
        _status : "",
        location : "",
        _workL : "",
        _job : "",
        trends : ""
        // firstName : "Raul",
        // lastName : "Orujov",
        // userName : "orujovcs",
        // password : "123456"
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

    else if(action.type === 'REGISTER_ACC'){
        let userInfo = action.payload.user.split(",");
        return{
            ...state,
            user: userInfo
        }
    }
    else if(action.type === 'LOGIN'){
        let userInfo = action.payload.permission;
        return{
            ...state,
            permission: userInfo
        }
    }
    else if(action.type === 'LOGOUT'){
        state.user.firstName = ""
        state.user.lastName = ""
        state.user.userName = ""
        state.user.password = ""
        state.permission = false
        return state;

    }
    if(action.type === 'GET_INFO_ABOUT_PROFILE'){
            state.user.firstName = action.payload.data[0].firstname
            state.user.lastName = action.payload.data[0].lastname
            state.user.userName = action.payload.data[0].username
            state.user.password = action.payload.data[0].password
            state.user.followings = action.payload.data[0].followings
            state.user.followers = action.payload.data[0].followers
            state.user.posts = action.payload.data[0].posts
            state.user._status = action.payload.data[0]._status
            state.user.location = action.payload.data[0].location
            state.user._workL = action.payload.data[0]._workL
            state.user._job = action.payload.data[0]._job
            state.user.trends = action.payload.data[0].trends
        return state;
    }
    if(action.type === 'FOLLOW'){
        // state.user.followings +=1
        // return state;
        return{
            ...state.user, followings: 1
        }
    }
    return state;
}

export default reducer;
