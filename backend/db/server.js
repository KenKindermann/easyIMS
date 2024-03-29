import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

pool.connect((err) => {
  if (err) {
    console.err(err);
  } else {
    console.log("Connected to db");
  }
});

export default pool;
