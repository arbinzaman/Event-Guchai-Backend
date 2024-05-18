const { get } = require("../routes/Booking");
const connection = require("../config/dbConfig");

handleAllBookings = async (req, res) => {
  connection.query("SELECT * FROM bookevent", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
};

handleBookEvent = async (req, res) => {
  const values = [
    req.body.eventTitle,
    req.body.customerEmail,
    req.body.price,
    req.body.food,
    req.body.people,
    req.body.sound_system,
    req.body.decoration,
    req.body.media,
  ];
  // console.log(values);
  const sql =
    "INSERT INTO bookevent (eventTitle,customerEmail,price,food,people,sound_system,decoration,media) VALUES (?)";

  connection.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

handleDeleteSoundSystemDataFromDb = async (req, res) => {
  const bookingID = req.params.bookingID;
  const sql = "UPDATE bookevent SET sound_system = NULL WHERE bookingID = ?";

  connection.query(sql, [bookingID], (err, result) => {
    if (err) {
      console.error("Error deleting sound_system data:", err);
      return res
        .status(500)
        .json({ error: "Failed to delete sound_system data" });
    }
    return res
      .status(200)
      .json({ message: "Sound_system data deleted successfully" });
  });
};
handleDeleteCateringDataFromDb = async (req, res) => {
  const bookingID = req.params.bookingID;
  const sql = "UPDATE bookevent SET food = NULL WHERE bookingID = ?";

  connection.query(sql, [bookingID], (err, result) => {
    if (err) {
      console.error("Error deleting catering data:", err);
      return res.status(500).json({ error: "Failed to delete catering data" });
    }
    return res
      .status(200)
      .json({ message: "catering data deleted successfully" });
  });
};
handleDeleteMediaDataFromDb = async (req, res) => {
  const bookingID = req.params.bookingID;
  const sql = "UPDATE bookevent SET media = NULL WHERE bookingID = ?";

  connection.query(sql, [bookingID], (err, result) => {
    if (err) {
      console.error("Error deleting Media data:", err);
      return res.status(500).json({ error: "Failed to delete Media data" });
    }
    return res
      .status(200)
      .json({ message: "catering data deleted successfully" });
  });
};

handleDeleteDecoratorDataFromDb = async (req, res) => {
  const bookingID = req.params.bookingID;
  const sql = "UPDATE bookevent SET decoration = NULL WHERE bookingID = ?";

  connection.query(sql, [bookingID], (err, result) => {
    if (err) {
      console.error("Error deleting decoration data:", err);
      return res
        .status(500)
        .json({ error: "Failed to delete decoration data" });
    }
    return res
      .status(200)
      .json({ message: "decoration data deleted successfully" });
  });
};

handleGetUserByEmail = async (req, res) => {
  const email = req.params.email;
  // console.log(email);
  connection.query(
    "SELECT * FROM bookevent WHERE customerEmail = ?",
    email,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    }
  );
};


handleDeleteBookingByID = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  connection.query(
    "DELETE FROM bookevent WHERE bookingID = ?",
    id,
    (error, results) => {
      if (error) {
        console.error("Error deleting from the database: " + error);
        res.status(500).json({ error: "Error deleting data" });
      } else {
        res.json({ message: "booking cancelled successful" });
      }
    }
  );
};




module.exports = {
  handleAllBookings,
  handleBookEvent,
  handleGetUserByEmail,
  handleDeleteSoundSystemDataFromDb,
  handleDeleteDecoratorDataFromDb,
  handleDeleteCateringDataFromDb,
  handleDeleteMediaDataFromDb,
  handleDeleteBookingByID,
};
