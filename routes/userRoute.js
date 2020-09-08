const express=require('express');
const authController=require('../controller/authController');
const users=require('../controller/userController')

const userRouter=express.Router();

userRouter.post('/signup',authController.signup);
userRouter.post('/login',authController.login);

userRouter.post('/forgotpassword',authController.forgotPassword);
userRouter.patch('/resetpassword/:token',authController.resetPassword);

userRouter.patch('/updatepassword',
authController.protect,
authController.updatePassword);

userRouter.patch('/updateMe',users.updateMe);
userRouter.route('/')
.get(authController.protect,users.getAllUser)
.post(users.createUser);


userRouter.route('/:id')
.get(users.getUser)
.patch(users.updateUser)
.delete(authController.protect, authController.restrictTo(['admin','lean-mode']),users.deleteUser);

module.exports=userRouter;