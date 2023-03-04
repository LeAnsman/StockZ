import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { connect } from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connect();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  morgan(
    ":date[clf] - :method :url  -STATUS: :status  -RESPONSE-TIME: :response-time ms"
  )
);
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);

app.use("/", authRoutes);

export default app;
