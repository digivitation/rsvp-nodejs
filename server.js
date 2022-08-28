import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from  "./routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || process.env.SERVER_PORT;

const origins = ["http://localhost:8000", "https://wedding.piinalpin.com"]
var corsOptions = {
    origin: function (origin, callback) {
      if (origins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(null, false)
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ 
    extended: true 
}));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log("Running on port ", PORT);
});