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

export const sortCustomersByValue = async (req, res) => {
  const { key } = req.params;
  try {
    const response = await pool.query(`SELECT * FROM customers ORDER BY ${key}`);
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query("DELETE FROM customers WHERE id = $1 RETURNING *", [id]);
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

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
