const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const userRouter = require("./src/routes/User");
const bookingsRouter = require("./src/routes/Booking");
const eventsRouter = require("./src/routes/Events");

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.use(express.json());
app.use("/users", userRouter);
app.use("/bookings", bookingsRouter);
app.use("/events", eventsRouter);
async function main() {
  try {
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
