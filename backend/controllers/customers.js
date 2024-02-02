import pool from "../db/server.js";

export const getAllCustomers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM customers");
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getCustomerByValue = async (req, res) => {
  const querys = req.query;
  const keys = Object.keys(querys);
  const values = Object.values(querys);

  let query = "SELECT * FROM customers WHERE ";
  keys.forEach((key, index) => {
    query += `${key} = $${index + 1}`;
    if (index < keys.length - 1) {
      query += " AND ";
    }
  });

  try {
    const response = await pool.query(query, values);

    if (response.rows.length > 0) {
      res.json(response.rows);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
