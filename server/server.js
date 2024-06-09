const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(bodyparser.json());
const url = process.env.MONGO_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// All system routes
const User = require('./Routes/UserRoutes');
app.use("/api/user", User);




const connection = mongoose.connection;
connection.once("open", () => {
    console.log('\x1b[34m', "MongoDb connected!");
});

app.listen(port, () => {
    console.log("\x1b[36m%s\x1b[0m", "PORT connected on " + port);
})