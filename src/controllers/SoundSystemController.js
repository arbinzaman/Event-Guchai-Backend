const { get } = require("../routes/Booking");
const connection = require("../config/dbConfig");

handleGetAllSoundSystemBookings = async (req, res) => {
    connection.query("SELECT * FROM sound_system", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    });
  };


handleBookSoundSystem = async (req, res) => {
    const values = [
      req.body.customerEmail,
      req.body.quantity,
      req.body.status,
    ];
    // console.log(values);
    const sql =
      "INSERT INTO sound_system (customerEmail,quantity,status) VALUES (?)";
  
    connection.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

  handleUpdateStatus = (req, res) => {
    const sound_systemID = req.params.sound_systemID;
    console.log(sound_systemID);
    const newStatus = "done";
    const updateQuery = "UPDATE sound_system SET status = ? WHERE sound_systemID  = ?";
    connection.query(updateQuery, [newStatus, sound_systemID], (err, result) => {
      if (err) {
        console.error("Error updating user role:", err);
        res.status(500).json({ error: "Failed to update user role" });
        return;
      }
      console.log("status updated successfully");
      res.json({ message: "status updated failed" });
    });
  };


module.exports = {
    handleBookSoundSystem,
    handleGetAllSoundSystemBookings,
    handleUpdateStatus,
};