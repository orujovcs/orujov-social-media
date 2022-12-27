export function addUser(info){
    return {
        type: 'ADD_USER',
        payload: {
            info: info
        },
    };
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