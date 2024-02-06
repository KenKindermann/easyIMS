import pool from "../db/server.js";

export const addNewCustomer = async (req, res) => {
  const { firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO customers (firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity]
    );
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const editCustomer = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity } = req.body;
  try {
    const response = await pool.query(
      "UPDATE customers SET firstname = $1, lastname = $2, street = $3, zipcode = $4, city = $5, shippingstreet = $6, shippingzipcode = $7, shippingcity = $8 WHERE id = $9 RETURNING *",
      [firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity, id]
    );
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
