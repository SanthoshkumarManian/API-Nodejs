const User=require('../models/userModel');
const jwt=require('jsonwebtoken');
const catchAsync=require('./../utils/catchAsync');
const AppError=require('./../utils/appError');
const {promisify}=require('util');
const SendEmail=require('../utils/email');
const sendEmail = require('../utils/email');
const { use } = require('../routes/userRoute');
const crypto =require('crypto');

const signToken=(id)=>{
    return jwt.sign({id:id},"secret-key-for-jwt-token",{
        expiresIn:"90d"
    });
}
const createSendToken =(user,statusCode,res)=>{
    const token=signToken(user._id);
    response.status(200).json({
        status:"Success",
        token,
        data:{
            user
        }
    });
}
exports.signup=catchAsync(async(request,response)=>{
        const newUser=await User.create(request.body);
       
       createSendToken(newUser,201,res);
});

exports.login=async (request,response,next)=>{
        const {email,password}=request.body;
     
        //1] check if email and password exist
        if(!email || !password){
            return next(new AppError('Please provide valid email and password!',400))
        }
     
        const user=await User.findOne({email}).select('+password');
     
        const correct= await user.correctPassword(password,user.password);
     
        if(!user || !correct){
         return next(new AppError("Incorrect email and password",401));
     }
     createSendToken(user,200,res);
}

exports.protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
    }
    console.log(token);
    if(!token){
        return next(new AppError("unauthorized access",401))
    }

    //2) Verify token
    const decoded=await promisify(jwt.verify(token,"secret-key-for-jwt-token"));

    //3) check if user still exist
    const currentUser=await User.findOne(decoded.id);
    if(!currentUser){
        return next(new AppError("no longer than user..!",401));
    }
    //4) check if user changed password after token was issued
    if(currentUser.changedPasswordAfter(decoded.iat)){
        return next(new AppError("User recently changed password..! please login again..!"),401);
    }
    //Grant access to protect user
    req.user=currentUser
    next()
}

exports.restrictTo=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
           return next(new AppError("you do not have permission to perform this action",401))
        }
    }
}

exports.forgotPassword=async(req,res,next)=>{
    //1) Get user based on  Posted email
         const user = await User.findOne({email:req.body.email});
         if(!user){
             return next(new AppError("There is no user with email address"));
         }
    //2) Generate random reset token
         const resetToken = user.createPasswordResetToken();
         await user.save({validateBeforeSave:false});

    //3) Send it to users email
        const resetURL=`${req.protocol}://${req.get(
            'host'
        )}/api/v1/users/resetpassword/${resetToken}`;
        
        const message=`Forgot your password? Submit a PATCH request with
        yout new password and passwordConfirm to:${resetURL}.\n if you didn't forgot your passowrd
        please ignore this email!`;
         try{
             await sendEmail({
                 email:user.email,
                 subject:'your password reset token (valid for 10min)',
                 message
             });
             res.status(200).json({
                 status:"success",
                 message:"token sent to email..!"
             });
         }catch(err){
             user.passwordResetToken=undefined;
             user.passwordResetExpires=undefined;
             await user.save({validateBeforeSave:false})
             return next(new AppError("There was an error sending email",500))
         }
}
exports.resetPassword=async(req,res,next)=>{
    //!) Get User based on token 
        const hashedToken=crypto.createHash('sha256')
        .update(req.params.token)
        .digest('hex');

        const user= await User.findOne({
            passwordResetToken:hashedToken,
            passwordResetExpires: { $gt : Date.now() } 
        });
    //2) if token has not expired, and there is user, set the new password
        if(!user){
            return next(new AppError("Token is invalid or has expired",400))
        }
        user.password =req.body.password;
        user.passwordConfirm=req.body.passwordConfirm;
        user.passwordResetToken=undefined;
        user.passwordResetExpires=undefined;
        await user.save();
    //3) Update changedPasswordAt for the user
        
    //4) Log the user in ,send jwt
    createSendToken(user,200,res);
         
}

exports.updatePassword=catchAsync(async(req,res,next)=>{
    //1)Get user from collection
          const user =await User.findById(req.user.id).select('+password');
    //2) check if Posted current password is correct
         if(!(user.correctPassword(req.body.passwordConfirm,user.password))){
             return next(new AppError("Your current password is wrong",401))
         }
    //3) if so.update password
         user.password=req.body.password;
         user.passwordConfirm=req.body.passwordConfirm
         await user.save();
         
         //user.findbyIdand Update

    //4) log user in send jwt
    createSendToken(newUSer,200,res);
});