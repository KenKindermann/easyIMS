import pool from "../db/server.js";

export const addInvoice = async (req, res) => {
  const {
    date,
    customer_id,
    firstname,
    lastname,
    street,
    zipcode,
    city,
    shippingstreet,
    shippingzipcode,
    shippingcity,
  } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO invoices (date, customer_id, firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [date, customer_id, firstname, lastname, street, zipcode, city, shippingstreet, shippingzipcode, shippingcity]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export const addInvoiceProducts = async (req, res) => {
  const { invoice_id, id, ean, producer, details, gross_retail_price, tax, net_retail_price } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO invoice_products (invoice_id, id, ean, producer, details, gross_retail_price, tax, net_retail_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [invoice_id, id, ean, producer, details, gross_retail_price, tax, net_retail_price]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
