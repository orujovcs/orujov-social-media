export function addUser(info){
    return {
        type: 'ADD_USER',
        payload: {
            info: info
        },
    };
}
export function updateUser(info){
    console.log(info);
    return {
        type: 'UPDATE_USER',
        payload: {
            info: info
        },
    };
}
export function update(a,b,c,d,e,f){
    return function(dispatch){
        fetch(`/updat?count=${a}_${b}_${c}_${d}_${e}_${f}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(updateUser(data));
        })
        .catch((err) => console.log(err));
    }
}
export function loginAcc(info){
    return {
        type : 'LOGIN_ACC',
        payload : {
            info : info
        },
    };
}

export function follow(info){
    return {
        type : 'FOLLOW',
        payload : {
            info : info
        },
    };
}

export function getM(data){
    return{
        type: 'GET-MESSAGES',
        payload : {
            messages: data
        },
    }
}
export function downM(){
    return function(dispatch){
        fetch(`/get-messages`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch(downloadM(data));
        })
        .catch((err) => console.log(err));
    }
}

export function downloadM(data){
    return{
        type: 'DOWNLOAD_MESSAGES',
        payload: {
            messages : data
        },
    }
}

export function sendM(message){
    return function(dispatch){
        fetch(`/send-messages?count=${message}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch(getM(data));
        })
        .catch((err) => console.log(err));
    }    
}

export function getInfoAboutProfile(data){
    return {
        type: 'GET_INFO_ABOUT_PROFILE',
        payload : {
            data : data
        },
    }
}

export function getDetails(){
    return function(dispatch){
        fetch('/get-details')
        .then((res) => res.json())
        .then((data) => {
            dispatch(getInfoAboutProfile(data))
        })
        .catch((err) => console.log(err));
    }
}

export function postAcc(user){
    return function(dispatch){
        let newArr = [];
        user.forEach(element => {
            newArr.push(element.value);
        });
        fetch(`add/user?count=${newArr}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(registerAcc(data));
        })
        .catch((err) => console.log(err));
    }
}

export function registerAcc(user){
    return {
        type: 'REGISTER_ACC',
        payload: {
            user : user,
        },
    }
}

export function postLogin(user){
    return function(dispatch){
        let newArr = [];
        user.forEach(element => {
            newArr.push(element.value);
        });
        console.log(newArr)
        fetch(`login?count=${newArr}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch(login(data));
        })
        .catch((err) => console.log(err));
    }
}

export function login(answer){
    return {
        type: 'LOGIN',
        payload: {
            permission : answer,
        },
    }
}
export function logOut(user){
    return {
        type: 'LOGOUT',
        payload: {
            user : user,
        },
    }
}

export function pastLogOut(info){
    return function(dispatch){
        fetch(`logout`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch(logOut(data));
        })
        .catch((err) => console.log(err));

    }
}

export function createP(img,descr){
    return {
        type: 'CREATE_POST',
        payload: {
            img: img,
            desc: descr,
            likes: 2305,
            liked: true
        },
    }
}

export function addT(tag){
    return function(dispatch){
        fetch(`addtag?count=${tag}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch(addTag(data));
        })
        .catch((err) => console.log(err));
    }
}

export function addTag(info){
    return {
        type: "ADD_TAG",
        payload: {
            tags: info
        },
    }
}

export function getNewTags(){
    return function(dispatch){
        fetch(`getalltags`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch(getAllTags(data));
        })
        .catch((err) => console.log(err));

    }
}
export function getAllTags(info){
    return {
        type: "GET_ALL_TAGS",
        payload: {
            tags: info
        },
    }
}

export function getNews(query){
    return function(dispatch){
        const url = 'https://content.guardianapis.com/search';
        const apiKey = '8b136398-5680-42d2-99a7-501599c71647';
        fetch(`${url}?q=${query}&api-key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch(getAllNews(data));
        })
        .catch((err) => console.log(err));
    }
}

export function getAllNews(info){
    return {
        type: "GET_ALL_NEWS",
        payload: {
            news: info
        },
    }
}