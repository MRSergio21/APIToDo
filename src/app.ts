import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo"

const PORT = process.env.PORT 
const app = express();
app.use(cors());
app.use(router);
db().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Aplication ready to run in the port ${PORT}`));