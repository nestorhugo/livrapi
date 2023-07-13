import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://nestorklauck:123@cluster0.htnt5.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
