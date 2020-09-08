const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const crypto =require('crypto');

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
    role:{
        type:String,
        enum:['user','admin','lean-mode'],
        default:'user'
    },
    password:{
        type:String,
        required:[true,'A user must have a password'],
        minlength:8,
        select:false

    },
    passwordConfirm:{
        type:String,
        required:[true,'A user must have a password'],
        //this only works on CREATE AND SAVE
        validate:function(el){
            return el===this.password;
        }
    },
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date
});
userSchema.methods.correctPassword=async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);
}
userSchema.methods.changedPasswordAfter=function(JWTTimestamp){
    if(this.passwordChangedAt){
         const changedTimestamp=parseInt(
             this.passwordChangedAt.getTime() /1000,
             10
         );
         return JWTTimestamp < changedTimestamp ;
    }
   return false;
}
userSchema.methods.createPasswordResetToken=function(){
    const resetToken= crypto.randomBytes(32).toString('hex');

    this.passwordResetToken=crypto.createHash('sha256').update(resetToken).digest('hex');
    
    this.passwordResetExpires=Date.now() + 10 * 60 * 1000 ;

    return resetToken;
}
userSchema.pre('save',async function(next){
        if(!this.isModified('password')) return next();

        this.password= await bcrypt.hash(this.password,12);

        this.passwordConfirm=undefined;
        next();
});

userSchema.pre('save',function(next){
    if(!this.isModified || this.isNew) return next();

    this.passwordChangedAt=Date.now() - 1000;
    next();
})

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;