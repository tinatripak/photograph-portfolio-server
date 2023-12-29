const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
require("dotenv").config();

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const adminRoute = require("./Routes/AdminRoute");
const questionRoute = require("./Routes/QuestionRoute");
const bookingRoute = require("./Routes/BookingRoute");
const homeRoute = require("./Routes/HomeRoute");
const photographerRoute = require("./Routes/PhotographerRoute");
const photoshootRoute = require("./Routes/PhotoshootRoute");
const typeOfPhotoshootRoute = require("./Routes/TypeOfPhotoshootRoute");

const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(cors({
  origin: 'https://photograph-portfolio-client.vercel.app',
  methods: "GET, POST, PUT, DELETE, OPTIONS", 
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/home", homeRoute);
app.use("/admin", adminRoute); 
app.use("/booking", bookingRoute);
app.use("/question", questionRoute);
app.use("/photoshoot", photoshootRoute);
app.use("/photographer", photographerRoute);
app.use("/typeOfPhotography", typeOfPhotoshootRoute);
