import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = process.env.CHAVE;

mongoose.set("strictQuery", true);

mongoose.connect(connect);

let db = mongoose.connection;

export default db;
