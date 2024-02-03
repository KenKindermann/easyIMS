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
