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
    postP: [],
    messages: [],
    currentUser: [],
    tags: [],
    news: [],
    news1:[
        {
            tag: "footbol",
            news: "Big opportunity, little interest: New Zealand struggles to fill dream job protecting wildlife"
        },
        {
            tag: "footbol",
            news: "New Zealand inflation near record high as wisdom of interest rate rises questioned"
        },
        {
            tag: "work",
            news: "Bank of England left in the dark ahead of new interest rate decision"
        },
        {
            tag: "footbol",
            news: "Lionesses’ success inspires new interest in women’s game in England"
        },
        {
            tag: "footbol",
            news: "What’s in the public interest? Murdoch v Crikey trial could test new defamation defence"
        },
        {
            tag: "footbol",
            news: "The Fed needs to stop raising interest rates | Robert Reich"
        },
        {
            tag: "working",
            news: "Binance auditor withdraws from working with crypto company"
        },
        {
            tag: "working",
            news: "Railroad workers pressure Congress and Biden to address working conditions"
        }
    ]
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
        console.log(pos);
        return{
            ...state,
            postP : [...pos]
        }
    }
    if(action.type === 'GET-MESSAGES'){
        return{...state,
            messages: action.payload.messages
        }
    }
    if(action.type === 'DOWNLOAD_MESSAGES'){
        return{
            ...state,
            messages: action.payload.messages
        }
    }
    if(action.type === 'UPDATE_USER'){
        console.log(action.payload.info);
        return{
            ...state,
            currentUser: action.payload.info
        }
    }
    if(action.type === 'ADD_TAG'){
        return{
            ...state,
            tags: action.payload.tags
        }
    }
    if(action.type === 'GET_ALL_TAGS'){
        return{
            ...state,
            tags: action.payload.tags
        }
    }
    if(action.type === 'GET_ALL_NEWS'){
        return{
            ...state,
            news: action.payload.news
        }
    }
    return state;
}

export default reducer;
