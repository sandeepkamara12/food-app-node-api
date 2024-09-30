const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const env = require("dotenv");
const connectDB = require("./config/connectDB");

env.config();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
connectDB();

// * Import all the routes.
app.use('/api/v1/auth/', require('./routes/authRoutes'))

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
