const { default: mongoose } = require("mongoose");

const connectDB = async() => {
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to the database.')
}
catch(error) {
    console.log(error, "Error while connecting with database.");
}
}
module.exports = connectDB;