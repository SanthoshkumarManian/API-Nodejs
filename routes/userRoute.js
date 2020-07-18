const express=require('express');
const authController=require('../controller/authController');
const users=require('../controller/userController')

const userRouter=express.Router();

userRouter.post('/signup',authController.signup);
userRouter.post('/login',authController.login);

userRouter.route('/')
.get(users.getAllUser)
.post(users.createUser);


userRouter.route('/:id')
.get(users.getTour)
.patch(users.updateUser)
.delete(users.deleteUser);

module.exports=userRouter;