import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import router from "./routes/index.js";

dotenv.config(); // load .env file

const PORT = process.env.PORT; // .env file port

const app = express(); // create server instance

app.use(express.json()); // allow json body
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
  })
);

connectDB(); // db file connection

app.use("/api", router); // all routes

// server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
