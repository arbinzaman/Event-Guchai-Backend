const { get } = require("../routes/User");

const connection = require("../config/dbConfig");
handleGetALlUsers = async (req, res) => {
  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
};

handleGetUserById = async (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM users WHERE id = ?", id, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
};

handleCheckAdminByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const query = "SELECT role FROM users WHERE email = ?";
    const [results] = await connection.query(query, email);
    console.log(results);

    if (!results || results.length === 0) {
      res.json({ isAdmin: false });
    } else {
      res.json({ isAdmin: results[0].role === "admin" });
    }
  } catch (error) {
    console.error("Error: " + error);
    res.status(500).json({ error: "Internal server error" });
  }
};

handleMakeAdmin = async (req, res) => {
  const sql =
    "INSERT INTO users (userName,role,address,phone,email,password) VALUES (?)";
  const values = [
    req.body.userName,
    req.body.role,
    req.body.address,
    req.body.phone,
    req.body.email,
    req.body.password,
  ];
  console.log(values);
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

handleDeleteUser = async (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM users WHERE id = ?", id, (error, results) => {
    if (error) {
      console.error("Error deleting from the database: " + error);
      res.status(500).json({ error: "Error deleting data" });
    } else {
      res.json({ message: "User deleted successful" });
    }
  });
};

module.exports = {
  handleGetALlUsers,
  handleGetUserById,
  handleCheckAdminByEmail,
  handleMakeAdmin,
  handleDeleteUser,
};
