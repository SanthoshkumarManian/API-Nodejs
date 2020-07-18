const express =require('express');
const tourRouter=require('./routes/tourRoute');
const userRouter=require('./routes/userRoute');

const app=express();

app.use(express.json());

app.use('/api/v1/users',userRouter);
app.use('/api/v1/tours',tourRouter);


module.exports=app;