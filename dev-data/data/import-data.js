const mongoose=require('mongoose');
const fs=require('fs');
const Tour =require('../../models/tourModel');

mongoose.connect('mongodb://localhost:27017/natours',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection was successfull"));


const tours =JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'));

const importData=async()=>{
    try{
        await Tour.create(tours);
        console.log("data was successfully loaded...!");
        process.exit();
    }catch(err){
        console.log(err)
    }
}

const deleteData=async()=>{
    try{
        await Tour.deleteMany();
        console.log("data was successfully deleted..!");
        process.exit()
    }catch(err){
        console.log(err);
    }
}
if(process.argv[2]==='--import'){
    importData()
}else if(process.argv[2]==='--delete'){
    deleteData()
}
console.log(process.argv);