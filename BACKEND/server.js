require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes=require("./SRC/Routes/User.Routes")
const tripRoutes=require("./SRC/Routes/Trip.Routes")
const aiRoutes=require("./SRC/Routes/AI.Routes")

const app = express();
app.use(cors({}));
app.use(express.json());

app.use("/", userRoutes);
app.use("/trip", tripRoutes);
app.use("/ai", aiRoutes);

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
connectDB();


if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is Listening at ${PORT}`);
});
