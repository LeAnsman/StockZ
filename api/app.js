import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import { checkJWT as auth } from "./middlewares/auth.js";

dotenv.config();
connect();
const app = express();

app.use(express.json());

export default app;
