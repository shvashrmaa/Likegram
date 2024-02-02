import mongoose, { Connection } from "mongoose";

export async function databaseConnection(): Promise<Connection | void> {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database successfully connected");
    return connection.connection;
  } catch (error) {
    console.log(error);
  }
}
