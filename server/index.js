import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

dotenv.config();

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

import UserRoute from "./routes/userRoute.js";
app.use("/user", UserRoute);

// const MONGO_URL = "mongodb://127.0.0.1:27017/flexMovie";
const MONGO_URL ="mongodb+srv://afafkelly:96itVx7VzeOAY8YW@cluster0.f18vt0b.mongodb.net/?retryWrites=true&w=majority"
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile("../client/dist");
  });
}

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flix Flex Express API with Swagger",
      version: "0.1.0",
      description:
        " CRUD API application made with Express and documented with Swagger for the movie App Flix flex",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "afafkelly@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
