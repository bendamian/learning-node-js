const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({
    path: './config.env',
});

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('db connection established'));

// Read JSON file

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);
// import data into data base

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('data is  loaded');
        process.exit();
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// delete all test data from DB
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('data is  deleted');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}

console.log(process.argv);