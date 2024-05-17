const { get } = require("../routes/Catering");
const connection = require("../config/dbConfig");



handleAllCatering = async (req, res) => {
    connection.query("SELECT * FROM catering", (error, results) => {
    if (error) {
        throw error;
    }
    res.status(200).json(results);
    });
},



handleBookCateringService = async (req, res) => {
    const values = [
      req.body.customerEmail,
      req.body.description,
      req.body.status,
    ];
    // console.log(values);
    const sql =
      "INSERT INTO catering (customerEmail,description,status) VALUES (?)";
  
    connection.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

  handleUpdateStatus = (req, res) => {
    const cateringID  = req.params.cateringID ;
    console.log(cateringID );
    const newStatus = "done";
    const updateQuery = "UPDATE catering SET status = ? WHERE cateringID   = ?";
    connection.query(updateQuery, [newStatus, cateringID ], (err, result) => {
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
    handleBookCateringService,
    handleUpdateStatus,
    handleAllCatering,
}