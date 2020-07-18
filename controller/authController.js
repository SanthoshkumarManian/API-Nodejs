const User=require('../models/userModel');
const jwt=require('jsonwebtoken');

const signToken=(id)=>{
    return jwt.sign({id:id},"secret-key-for-jwt-token",{
        expiresIn:"90d"
    });
}
exports.signup=async(request,response)=>{
    try{
        const newUSer=await User.create(request.body);

        response.status(200).json({
            status:"Success",
            data:{
                newUSer
            }
        })
    }catch(err){
        response.status(404).json({
            status:"error",
            message:err
        });
    }
}

exports.login=async (request,response,next)=>{
        const {email,password}=request.body;
     
        //1] check if email and password exist
        if(!email || !password){
            return next("done")
        }
     
        const user=await User.findOne({email}).select('+password');
     
        const correct= await user.correctPassword(password,user.password);
     
        if(!user || !correct){
         return next("not correct password  and email");
     }
        const token=signToken(user._id);
     
        response.status(200).json({
             status:"Success",
             token
        });
    // }catch(err){
    //     response.status(404).json({
    //         status:"error",
    //         message:err
    //    });
    // }
}