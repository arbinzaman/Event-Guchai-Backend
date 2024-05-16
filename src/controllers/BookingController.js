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

module.exports = {
  handleAllBookings,
  handleBookEvent,
};
