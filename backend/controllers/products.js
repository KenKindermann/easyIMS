import pool from "../db/server.js";

export const addNewProduct = async (req, res) => {
  console.log(req.body);
  const {
    ean,
    producer,
    details,
    net_purchase_price,
    gross_purchase_price,
    net_retail_price,
    gross_retail_price,
    tax,
    margin,
    upe,
    stock,
    product_group,
    distributor,
  } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO products (ean, producer, details, net_purchase_price, gross_purchase_price, net_retail_price, gross_retail_price, tax, margin, upe, stock, product_group, distributor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [
        ean,
        producer,
        details,
        net_purchase_price,
        gross_purchase_price,
        net_retail_price,
        gross_retail_price,
        tax,
        margin,
        upe,
        stock,
        product_group,
        distributor,
      ]
    );
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const editProduct = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const {
    ean,
    producer,
    details,
    net_purchase_price,
    net_retail_price,
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
      "UPDATE products SET ean = $1, producer = $2, details = $3, net_purchase_price = $4, net_retail_price = $5, tax = $6, margin = $7, upe = $8, stock= $9, product_group = $10, distributor = $11, mark = $12 WHERE id = $13 RETURNING *",
      [
        ean,
        producer,
        details,
        net_purchase_price,
        net_retail_price,
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
