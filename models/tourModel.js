const mongoose=require('mongoose');

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A tour must have a name'],
        unique:true,
        trim:true
    },
    duration:{
        type:Number,
        required:[true,'A duraiton must have a duration']
    },
    maxGroupSize:{
        type:Number,

    },
    difficulty:{
        type:String,
        required:[true,' A difficult must have a difficulty']
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,"A tour must have price"]
    },
    priceDiscount:Number,
    summary:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:[true,'A tour must have cover image']
    },
    images:[],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates:[Date]
})

const TourModel=mongoose.model('Tour',tourSchema);

module.exports=TourModel;