const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGO_URL, {
    
    }).then(() => {
        console.log("connect");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = db;