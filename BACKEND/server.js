require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes=require("./SRC/Routes/User.Routes")

const app = express();
app.use(cors({}));
app.use(express.json());

app.use("/", userRoutes);

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
