import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

async function conectaDatabase() {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/buks?retryWrites=true&w=majority`
  );

  return mongoose.connection;
}

export default conectaDatabase;
