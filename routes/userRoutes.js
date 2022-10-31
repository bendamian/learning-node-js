const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.creatUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.upDateUser)
  .delete(userController.deleteUser);

module.exports = router;