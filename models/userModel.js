const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"A user must have a name"],

    },
    email:{
        type:String,
        required:[true,'A user must have a email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,"please provide valid email..!"]
    },
    photo:String,
    password:{
        type:String,
        required:[true,'A user must have a password'],
        minlength:8,
        select:false

    },
    passwordConfirm:{
        type:String,
        validate:function(el){
            return el===this.password;
        }
    },
  
    
});
userSchema.methods.correctPassword=async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);
}

userSchema.pre('save',async function(next){
        if(!this.isModified('password')) return next();

        this.password= await bcrypt.hash(this.password,12);

        this.passwordConfirm=undefined;
        next();
});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;