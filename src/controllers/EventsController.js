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

module.exports = {
  handleAllBookings,
};
