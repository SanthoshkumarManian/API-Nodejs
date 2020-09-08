const express =require('express');
const tourRouter=require('./routes/tourRoute');
const userRouter=require('./routes/userRoute');
const AppError=require('./utils/appError');
const globalErrorHandler=require('./controller/errorController');
const app=express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/users',userRouter);
app.use('/api/v1/tours',tourRouter);

app.all('*',(req,res,next)=>{
    
    next(new AppError(`can't find ${req.originalUrl} in server!`,404));


})

app.use(globalErrorHandler);
module.exports=app;