const { get } = require("../routes/Media");
const connection = require("../config/dbConfig");



handleAllMedia = async (req, res) => {
    connection.query("SELECT * FROM media", (error, results) => {
    if (error) {
        throw error;
    }
    res.status(200).json(results);
    });
},



handleBookMediaService = async (req, res) => {
    const values = [
      req.body.customerEmail,
      req.body.description,
      req.body.status,
    ];
    // console.log(values);
    const sql =
      "INSERT INTO media (customerEmail,description,status) VALUES (?)";
  
    connection.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

  handleUpdateStatus = (req, res) => {
    const mediaID  = req.params.mediaID ;
    console.log(mediaID );
    const newStatus = "done";
    const updateQuery = "UPDATE media SET status = ? WHERE mediaID = ?";
    connection.query(updateQuery, [newStatus, mediaID ], (err, result) => {
      if (err) {
        console.error("Error updating status", err);
        res.status(500).json({ error: "Failed to update status" });
        console.log("status updated successfully");
        return;
      }
      res.json({ message: "status updated failed" });
    });
  };



module.exports = {
    handleBookMediaService,
    handleUpdateStatus,
    handleAllMedia,
}