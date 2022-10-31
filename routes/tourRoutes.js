const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
//router.param('id', tourController.chkID);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.creatTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.upDateTour)
  .delete(tourController.deleteTour);

module.exports = router;