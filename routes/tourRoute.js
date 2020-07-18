const express=require('express');
const Tours=require('../controller/tourscontroller');

const tourRouter=express.Router();

tourRouter.route('/')
.get(Tours.getAllTours)
.post(Tours.createTours);


tourRouter
.route('/:id')
.get(Tours.getTour)
.patch(Tours.updateTour)
.delete(Tours.deleteTour);

module.exports=tourRouter;