const fs=require('fs');
const Tours=require('../models/tourModel');
const APIFeatures=require('./../utils/APIFeatures');
const catchAsync=require('./../utils/catchAsync');

exports.getAllTours=catchAsync(async(request,response,next)=>{
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
});

exports.createTours=catchAsync(async(request,response,next)=>{

    const newTour=await Tours.create(request.body);
        response.status(201).json({
            status:"success",
            data:{
                tour:newTour
            }
        });

});

exports.getTour= catchAsync(async (request,response,next)=>{

            const id=await Tours.findById(request.params.id);
            return response.status(200).json({
                status:"success",
                data:{
                    id
                }
            });
    
});

exports.updateTour=catchAsync(async (request,response,next)=>{
            const updatedTour= await Tours.findByIdAndUpdate(request.params.id,request.body,{
                new:true,
            });
            response.status(200).json({
                status:"success",
                data:{
                    tour:updatedTour
                }
            })
     
});

exports.deleteTour=catchAsync(async(request,response,next)=>{
        const deletedtour=await Tours.findByIdAndDelete(request.params.id)
        response.status(200).json({
           status:"Succcess",
           data:deletedtour
       });
});