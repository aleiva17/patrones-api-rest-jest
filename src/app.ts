import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes"
import db from "./db/mongo";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

db().then(() => console.log("Successfully connected with database."))
app.listen(PORT, () => console.log(`Server is running at ${ PORT } port.`));

export { app }