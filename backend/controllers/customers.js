import pool from "../db/server.js";

export const getAllCustomers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM customers");
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
};
