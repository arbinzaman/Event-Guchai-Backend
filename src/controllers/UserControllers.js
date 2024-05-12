const { get } = require("../routes/User");

module.exports = {
  get: (req, res) => {
    res.json("user Api");
  },

  get: async (req, res) => {
    const connection = require("../config/dbConfig");
    connection.query("SELECT * FROM users", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    });
  },
};
