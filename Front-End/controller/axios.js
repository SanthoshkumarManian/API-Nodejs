const axios=require('axios');



export const register=(newUser)=>{
    return axios
    .post(
        '/api/v1/users/signup',{
            name:newUser.name,
            email:newUser.email,
            password:newUser.password,
            passwordConfirm:newUser.confirmPassword,
            photo:newUser.photo
        }
        );
}

export const login=(data)=>{
    return axios
    .post(
        '/api/v1/users/login',{
            email:data.email,
            password:data.password
        }
    ).then(res=>{
        console.log("successfully signed");
    })
}