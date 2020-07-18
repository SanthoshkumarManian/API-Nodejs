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
 


// const testTour =new TourModel({
//     name:"santhoshkumar",
//     rating:2.5,
//     price:100
// });

// testTour
// .save()
// .then(doc=>console.log(doc))
// .catch(err=>console.log(err))
