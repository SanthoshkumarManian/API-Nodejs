const fs=require('fs');
const users=require('../models/userModel');
const AppError = require('../utils/appError');

exports.updateMe=(req,res,next)=>{
    //1) create error if user Posts password data
    if(req.body.password || req.body.passwordConfirm){
        return next(new AppError("this is not for password updates..!",400))
    }

    //2) Update user document
    const updatedUser=await users.findByIdAndUpdate(req.user.id,x,{
        new :true,
        runValidators:true
    });
 
    res.status(200).json({
        status:"success"
    })
}
exports.getAllUser=async(request,response)=>{
    try{
    const user=await users.find();
    response.status(200).json(
       { 
        status:"success",
        result:users.length,
        data:{
            users:user
            }
        }
    )}
    catch(err){
        response.status(404).json({
            status:"error",
            message:err
        })
    }
}

exports.createUser=async(request,response)=>{
    try{
        const newUser=await users.create(request.body);
        response.status(201).json({
            status:"success",
            data:{
                user:newUser
            }
        });
    }catch(err){
        response.status(404).json({
            status:"error",
            message:err
        });
    }
}

exports.getUser=async(request,response)=>{
    try{
        const id=await users.findById(request.params.id);
        response.status(200).json({
            status:"success",
            data:{
                id
            }
        })
    }catch(err){
        response.status(404).json({
            status:"error",
            message:err
        })
    }
}

exports.updateUser=async(request,response)=>{
    try{
        const updatedUser=await users.findByIdAndUpdate(request.params.id,request.body)
        response.status(200).json({
            status:"Succcess",
            data:{
               updatedUser
            }
        });

    }catch(err){
        return response.status(404).json({
            status:"erron",
            message:err
        });
    }
}

exports.deleteUser=(request,response)=>{
    if(request.params.id * 1 >users.length){
        return response.status(404).json({
            status:"erron",
            message:"Invalid ID"
        });
    }
    response.status(200).json({
        status:"Succcess",
        data:null
    });
}