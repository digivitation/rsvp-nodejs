import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from  "./routes.js";

dotenv.config();
const app = express();

var corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ 
    extended: true 
}));

app.use('/api', routes);

export default app