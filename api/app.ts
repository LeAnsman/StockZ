import dotenv from "dotenv";
import { connection } from "./config/database";
import express from "express";

dotenv.config();
const app = express();

app.use(express.json());
