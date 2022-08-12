// compulsory imports
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

//routes import
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

// ye pehle initialize hogi
const app = express();
dotenv.config();

// ye lagaya woh prefix jo posts me bola tha

// ye saari mongo ki connection
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});

const CONNECTION_URL =
  "mongodb+srv://GhulamMustafa:GhulamMustafa0324@cluster0.chck3.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
