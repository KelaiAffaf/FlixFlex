import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import connect from "./db/connect.js";
import UserRoute from "./routes/userRoute.js";
import HealthRoute from "./routes/healthRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", HealthRoute);
app.use("/user", UserRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connect();

if (process.env.NODE_ENV === "production") {
  const staticPath = join(__dirname, "../client/dist");
  app.use(express.static(staticPath));
  app.get("*", (req, res) => {
    const indexPath = join(staticPath, "index.html");
    res.sendFile(indexPath);
  });
}

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flix Flex Express API with Swagger",
      version: "0.1.0",
      description:
        "CRUD API application made with Express and documented with Swagger for the movie App Flix flex",
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
