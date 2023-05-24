import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

import UserRoute from "./routes/userRoute.js";
app.use("/user", UserRoute);

const MONGO_URL = "mongodb://127.0.0.1:27017/flexMovie";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
    // Handle the error here, such as displaying an error message or taking appropriate action
    // For example, you can use `process.exit(1)` to terminate the Node.js process with a non-zero exit code
    process.exit(1);
  }
};


connectDb();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/dist"));
//   app.get("*", (req, res) => {
//     res.sendFile("/frontend/dist");
//   });
// }

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
