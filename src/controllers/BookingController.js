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



handleDeleteDataFromDb = async (req, res) => {
  const bookingID = req.params.bookingID; 
  const sql = "UPDATE bookevent SET sound_system = NULL WHERE bookingID = ?";

  connection.query(sql, [bookingID], (err, result) => {
    if (err) {
      console.error("Error deleting sound_system data:", err);
      return res.status(500).json({ error: "Failed to delete sound_system data" });
    }
    return res.status(200).json({ message: "Sound_system data deleted successfully" });
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

module.exports = {
  handleAllBookings,
  handleBookEvent,
  handleDeleteDataFromDb,
  handleGetUserByEmail,
};
