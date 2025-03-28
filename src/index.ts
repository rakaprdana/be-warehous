import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import itemRoutes from "./routes/itemRoutes";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./routes/docs/docs-route";
import corsOptions from "./config/cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose
  .connect(process.env.MONGODB_URL || "3000")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(
        `API documentation available at http://localhost:${PORT}/api-docs`
      );
    });
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
