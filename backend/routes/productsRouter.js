import { Router } from "express";
import { getAll } from "../controllers/general.js";
import { addNewProduct } from "../controllers/products.js";

const customersRouter = Router();

customersRouter
  .route("/")
  .get((req, res) => getAll("products", req, res))
  .post(addNewProduct);

export default customersRouter;
