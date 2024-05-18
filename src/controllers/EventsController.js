const { get } = require("../routes/Events");
const connection = require("../config/dbConfig");

handleAllBookings = async (req, res) => {
  connection.query("SELECT * FROM events", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
};


handleUpdateEvent = async (req, res) => {
  const values = [
    req.body.eventTitle,
    req.body.price,
    req.body.shortDescription,
    req.body.food,
    req.body.people,
    req.body.sound_system,
    req.body.decoration,
    req.body.media,
    req.body.img,
  ];
  console.log(values);
  const sql =
    "INSERT INTO events (eventTitle,price,shortDescription,food,people,sound_system,decoration,media,img) VALUES (?)";

  connection.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


handleDeleteEvent = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  connection.query(
    "DELETE FROM events WHERE eventID = ?",
    id,
    (error, results) => {
      if (error) {
        console.error("Error deleting from the database: " + error);
        res.status(500).json({ error: "Error deleting data" });
      } else {
        res.json({ message: "event deleted successful" });
      }
    }
  );
};

module.exports = {
  handleAllBookings,
  handleUpdateEvent,
  handleDeleteEvent,
};
