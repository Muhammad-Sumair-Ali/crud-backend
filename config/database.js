const mongoose = require('mongoose');

require("dotenv").config();

const MONGODB_url = process.env.MONGODB_URL;
function dbCoonection() {
mongoose.connect(MONGODB_url).then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("ERROR! DB is not Connected " , error));
}

module.exports = dbCoonection;