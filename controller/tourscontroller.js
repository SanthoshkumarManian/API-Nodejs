const fs=require('fs');
const Tours=require('../models/tourModel');
const APIFeatures=require('./../utils/APIFeatures');


exports.getAllTours=async(request,response)=>{
    try{
        const features=new APIFeatures(Tours.find(),request.query).filter().sort().pagination();
        const tours=await features.query;
        response.status(200).json(
           { 
            status:"success",
            result:tours.length,
            data:{
                tours:tours
                }
            })
    }catch(err){
        response.status(404).json({
            status:"error",
            message:err
        })
    }
}

exports.createTours=async(request,response)=>{
    try{
        const newTour=await Tours.create(request.body);
        response.status(201).json({
            status:"success",
            data:{
                tour:newTour
            }
        })
    }catch(err){
        response.status(404).json({
            status:"error",
            message:err,
        })
    }
}



exports.getTour= async (request,response)=>{

    try{
            const id=await Tours.findById(request.params.id);
            return response.status(200).json({
                status:"success",
                data:{
                    id
                }
            });

    }catch(err){
        response.status(404).json({
            status:"error",
            message:err
        });

    }
}

exports.updateTour=async (request,response)=>{
        try{
            const updatedTour= await Tours.findByIdAndUpdate(request.params.id,request.body,{
                new:true,
            });
            response.status(200).json({
                status:"success",
                data:{
                    tour:updatedTour
                }
            })
        }catch(err){
            response.status(404).json({
                status:"error",
                message:err
            })
        }
}

exports.deleteTour=async(request,response)=>{
    try{

        const deletedtour=await Tours.findByIdAndDelete(request.params.id)
        response.status(200).json({
           status:"Succcess",
           data:deletedtour
       });
    }catch(err){
        response.status(404).json({
            status:"erron",
            message:err
        });
    }
}