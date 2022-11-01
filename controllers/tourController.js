const Tour = require('../models/tourModel');

//////
exports.getAllTours = async (_req, _res) => {
  try {
    const queryObj = {
      // eslint-disable-next-line node/no-unsupported-features/es-syntax
      ..._req.query,
    };

    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    const query = Tour.find(queryObj);
    const tour = await query;

    /* const tours = await Tour.find()
      .where('duration')
      .equals(5)
      .where('difficulty')
      .equals('easy'); */
    _res.status(200).json({
      status: 'success',

      data: {
        tours: tours,
      },
    });
  } catch (err) {
    _res.status(404).json({
      status: 'fail',
      mesage: err,
    });
  }
};

exports.getTour = async (_req, _res) => {
  try {
    const tours = await Tour.findById(_req.params.id);
    _res.status(200).json({
      status: 'success',
      data: {
        tour: tours,
      },
    });
  } catch (err) {
    _res.status(404).json({
      status: 'fail',
      mesage: err,
    });
  }
};

exports.creatTour = async (_req, _res) => {
  try {
    const newTour = await Tour.create(_req.body);

    _res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    _res.status(400).json({
      status: 'fail',
      mesage: err,
    });
  }
};

exports.upDateTour = async (_req, _res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(_req.params.id, _req.body, {
      new: true,
      runValidators: true,
    });

    _res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    _res.status(400).json({
      status: 'fail',
      mesage: err,
    });
  }
};

exports.deleteTour = async (_req, _res) => {
  try {
    await Tour.findByIdAndRemove(_req.params.id);

    _res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    _res.status(400).json({
      status: 'fail',
      mesage: err,
    });
  }
};

//#########