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
  connection.query(
    "SELECT * FROM users WHERE userID = ?",
    id,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    }
  );
};
handleGetUserByEmail = async (req, res) => {
  const email = req.params.email;
  // console.log(email);
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    }
  );
};

handleGetUserRolesByEmail = async (req, res) => {
  const email = req.params.email;
  connection.query(
    "SELECT role, vendorRole FROM users WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        console.error("Error fetching user roles: ", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(results); // Return the results as an array of objects
    }
  );
};




handleCheckAdminByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    // console.log(email);
    const query = "SELECT role FROM users WHERE email = ?";
    connection.query(query, email, (error, results) => {
      // console.log(results);
      if (error) {
        console.error("Error: " + error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        if (!results || results.length === 0) {
          res.json({ isAdmin: false });
        } else {
          res.json({ isAdmin: results[0].role === "admin" });
        }
      }
    });
  } catch (error) {
    console.error("Error: " + error);
    res.status(500).json({ error: "Internal server error" });
  }
};

handleRegisterUser = async (req, res) => {
  const sql =
    "INSERT INTO users (userName,role,vendorRole,address,phone,email,password) VALUES (?)";
  const values = [
    req.body.userName,
    req.body.role,
    req.body.vendorRole,
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

handleMakeAdmin = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newRole = "admin";
  const updateQuery = "UPDATE users SET role = ? WHERE userID = ?";
  connection.query(updateQuery, [newRole, id], (err, result) => {
    if (err) {
      console.error("Error updating user role:", err);
      res.status(500).json({ error: "Failed to update user role" });
      return;
    }
    console.log("User role updated to admin");
    res.json({ message: "User role updated to admin" });
  });
};

handleMakeVendor = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newRole = "vendor";
  const updateQuery = "UPDATE users SET role = ? WHERE userID = ?";
  connection.query(updateQuery, [newRole, id], (err, result) => {
    if (err) {
      console.error("Error updating user role:", err);
      res.status(500).json({ error: "Failed to update user role" });
      return;
    }
    console.log("User role updated to admin");
    res.json({ message: "User role updated to admin" });
  });
};

handleDeleteUser = async (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE FROM users WHERE userID = ?",
    id,
    (error, results) => {
      if (error) {
        console.error("Error deleting from the database: " + error);
        res.status(500).json({ error: "Error deleting data" });
      } else {
        res.json({ message: "User deleted successful" });
      }
    }
  );
};

module.exports = {
  handleGetALlUsers,
  handleGetUserById,
  handleCheckAdminByEmail,
  handleMakeAdmin,
  handleDeleteUser,
  handleRegisterUser,
  handleGetUserByEmail,
  handleGetUserRolesByEmail,
  handleMakeVendor
};
