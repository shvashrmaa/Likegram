import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseConnection } from "./database/database";
import userRoutes from "./routers/userRoute";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "DELETE", "UPDATE"],
  })
);

app.use(express.json());

databaseConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on http://localhost:${process.env.PORT}`);
});
