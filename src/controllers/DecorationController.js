const { get } = require("../routes/Decoration");
const connection = require("../config/dbConfig");



handleAllDecorations = async (req, res) => {
    connection.query("SELECT * FROM decoration", (error, results) => {
    if (error) {
        throw error;
    }
    res.status(200).json(results);
    });
},



handleBookDecoration = async (req, res) => {
    const values = [
      req.body.customerEmail,
      req.body.description,
      req.body.status,
    ];
    // console.log(values);
    const sql =
      "INSERT INTO decoration (customerEmail,description,status) VALUES (?)";
  
    connection.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

  handleUpdateStatus = (req, res) => {
    const decorationID  = req.params.decorationID ;
    console.log(decorationID );
    const newStatus = "done";
    const updateQuery = "UPDATE decoration SET status = ? WHERE decorationID   = ?";
    connection.query(updateQuery, [newStatus, decorationID ], (err, result) => {
      if (err) {
        console.error("Error updating status", err);
        res.status(500).json({ error: "Failed to update status" });
        return;
      }
      console.log("status updated successfully");
      res.json({ message: "status updated failed" });
    });
  };



module.exports = {
    handleAllDecorations,
    handleUpdateStatus,
    handleBookDecoration,
}