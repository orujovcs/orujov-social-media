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