const fs=require('fs');
const users=require('../models/userModel');

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

exports.getTour=async(request,response)=>{
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