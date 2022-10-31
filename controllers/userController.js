///////const fs = require('fs')
const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        mesage: 'This route is not Defined',
    });
};

exports.creatUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        mesage: 'This route is not Defined',
    });
};

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        mesage: 'This route is not Defined',
    });
};
exports.upDateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        mesage: 'This route is not Defined',
    });
};

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        mesage: 'This route is not Defined',
    });
};

//###############