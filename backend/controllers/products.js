import pool from "../db/server.js";

export const addNewProduct = async (req, res) => {
  const {
    ean,
    producer,
    details,
    purchase_price_without_tax,
    retail_price_without_tax,
    tax,
    margin,
    upe,
    stock,
    product_group,
    distributor,
    mark,
  } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO products (ean, producer, details, purchase_price_without_tax, retail_price_without_tax, tax, margin, upe, stock, product_group, distributor, mark) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        ean,
        producer,
        details,
        purchase_price_without_tax,
        retail_price_without_tax,
        tax,
        margin,
        upe,
        stock,
        product_group,
        distributor,
        mark,
      ]
    );
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const {
    ean,
    producer,
    details,
    purchase_price_without_tax,
    retail_price_without_tax,
    tax,
    margin,
    upe,
    stock,
    product_group,
    distributor,
    mark,
  } = req.body;
  try {
    const response = await pool.query(
      "UPDATE products SET ean = $1, producer = $2, details = $3, purchase_price_without_tax = $4, retail_price_without_tax = $5, tax = $6, margin = $7, upe = $8, stock= $9, product_group = $10, distributor = $11, mark = $12 WHERE id = $13 RETURNING *",
      [
        ean,
        producer,
        details,
        purchase_price_without_tax,
        retail_price_without_tax,
        tax,
        margin,
        upe,
        stock,
        product_group,
        distributor,
        mark,
        id,
      ]
    );
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
