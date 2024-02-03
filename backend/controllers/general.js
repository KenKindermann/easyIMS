export const getAll = async (table, req, res) => {
  try {
    const response = await pool.query(`SELECT * FROM ${table}`);
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteByValue = async (table, req, res) => {
  const { key, value } = req.params;
  try {
    const response = await pool.query(`DELETE FROM ${table} WHERE ${key} = $1 RETURNING *`, [value]);
    if (response.rows.length > 0) {
      res.json(response.rows[0]);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const sortByValue = async (table, req, res) => {
  const { key } = req.params;
  try {
    const response = await pool.query(`SELECT * FROM ${table} ORDER BY ${key}`);
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};