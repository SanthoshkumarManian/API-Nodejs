const app = require('./app');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/natours',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection was successfull"));


const port=2020;
 
app.listen(port,(req,res)=>{
    console.log("server is responed");
});
 

