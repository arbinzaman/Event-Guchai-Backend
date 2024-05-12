const { get } = require("../routes/User");


handleGetALlUsers = async (req, res) => {
  const connection = require("../config/dbConfig");
  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
};

handleGetUserById = async (req, res) => {
  const connection = require("../config/dbConfig");
  const id = req.params.id;
  connection.query("SELECT * FROM users WHERE id = ?", id, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
};

module.exports = {
  handleGetALlUsers,
  handleGetUserById,
};
