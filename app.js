const express =require('express');
const path =require('path');
const tourRouter=require('./routes/tourRoute');
const userRouter=require('./routes/userRoute');
const AppError=require('./utils/appError');
const globalErrorHandler=require('./controller/errorController');
const bodyParser = require('body-parser');
const cors=require('cors');
const { urlencoded } = require('body-parser');
const compression = require('compression');

const app=express();

app.use(express.json());


app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

app.use(compression())

app.use('/api/v1/users',userRouter);
app.use('/api/v1/tours',tourRouter);


app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname +'/public/index.html'));
});
app.get('signup')

app.all('*',(req,res,next)=>{
    
    next(new AppError(`can't find ${req.originalUrl} in server!`,404));
})

app.use(globalErrorHandler);
module.exports=app;