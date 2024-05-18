const { get } = require("../routes/CustomPackage");
const connection = require("../config/dbConfig");



handleAllCustomPackage = async (req, res) => {
    connection.query("SELECT * FROM custompackage", (error, results) => {
    if (error) {
        throw error;
    }
    res.status(200).json(results);
    });
},



handleBookCustomPackage = async (req, res) => {
    const values = [
      req.body.customerEmail,
      req.body.foodQuantity,
      req.body.foodPrice,
      req.body.soundSystemQuantity,
      req.body.soundSystemPrice,
      req.body.mediaTeam,
      req.body.mediaPrice,
      req.body.decorationTitle,
      req.body.decorationPrice
    ];
  
    const sql =
      "INSERT INTO custompackage (customerEmail, foodQuantity, foodPrice, soundSystemQuantity, soundSystemPrice, mediaTeam, mediaPrice, decorationTitle, decorationPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  
    connection.query(sql, values, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };
  





module.exports = {
    handleAllCustomPackage,
    handleBookCustomPackage,
}