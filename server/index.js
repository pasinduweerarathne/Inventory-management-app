import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Server running successfully and db connected!");
    })
  )
  .catch((err) => console.log(err));
