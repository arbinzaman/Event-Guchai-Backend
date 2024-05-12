const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();


const userRouter = require("./src/routes/User");



app.use("/user", userRouter);
app.use(cors());
app.use(express.json());

async function main() {
  try {
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "event_guchai",
    });

    app.get("/", (req, res) => {
      return res.json("Welcome to the event_guchai API");
    });
    app.listen(3001, () => {
      console.log("running on port 3001");
    });
  } catch (error) {
    console.error("Error connecting to the database: " + error);
  }
}

main();
