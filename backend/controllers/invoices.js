import pool from "../db/server.js";

export const addInvoice = async (req, res) => {
  console.log("Hello");
  const { date, firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO invoices (date, firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [date, firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
