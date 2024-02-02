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
  const { key } = req.params;
  const { value } = req.query;

  try {
    const response = await pool.query(`SELECT * FROM customers WHERE ${key} = $1`, [value]);

    if (response.rows.length > 0) {
      res.json(response.rows);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
