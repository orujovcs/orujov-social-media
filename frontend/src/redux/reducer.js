const initialState = {
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
    trends : "",
    permission : false,
    postP: []
    
}

function reducer(state = initialState,action){
    if(action.type === 'ADD_USER'){
        return{...state,
            firstName: action.payload.info[0].value,
            lastName: action.payload.info[1].value,
            userName: action.payload.info[2].value,
            password: action.payload.info[3].value
        }
    }

    else if(action.type === 'LOGIN_ACC'){
        if(
            state.user.userName === action.payload.info[0].value &&
            state.user.password === action.payload.info[1].value
        ){
            console.log(state.permission);
        }
        return {...state,
            permission: true
        };
    }

    else if(action.type === 'REGISTER_ACC'){
        let userInfo = action.payload.user.split(",");
        return{
            ...state,
            userName: action.payload.user[0],
            password: action.payload.user[1]
        }
    }
    else if(action.type === 'LOGIN'){
        let userInfo = action.payload.permission;
        return{
            ...state.permission,
            permission: userInfo
        }
    }
    else if(action.type === 'LOGOUT'){
        return {...state,
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            permission: false
        };

    }
    if(action.type === 'GET_INFO_ABOUT_PROFILE'){            
        return {...state,
            firstName : action.payload.data[0].firstname,
            lastName : action.payload.data[0].lastname,
            userName : action.payload.data[0].username,
            password : action.payload.data[0].password,
            posts : action.payload.data[0].posts,
            _status : action.payload.data[0]._status,
            location : action.payload.data[0].location,
            _workL : action.payload.data[0]._workL,
            _job : action.payload.data[0]._job,
            trends : action.payload.data[0].trends,
        };
    }
    if(action.type === 'FOLLOW'){
        let counter = state.followings + 1
        return{
            ...state.user, followings: counter
        }
    }
    if(action.type === 'CREATE_POST'){
        let arr = {
            img : action.payload.img,
            nameP: state.userName,
            desc: action.payload.desc,
            likes: action.payload.likes,
            liked : action.payload.liked,
        }
        
        const pos = [...state.postP, {...arr}];
        // pos = {...arr};
        console.log(pos);
        return{
            ...state,
            postP : [...pos]
        }
    }
    return state;
}

export default reducer;
