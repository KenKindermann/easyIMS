import { Router } from "express";
import { addNewProduct, editProduct } from "../controllers/products.js";
import { deleteById, getAll, getByValue, sortByValue } from "../controllers/general.js";

const productsRouter = Router();

productsRouter
  .route("/")
  .get((req, res) => getAll("products", req, res))
  .post(addNewProduct);

productsRouter.route("/search").get((req, res) => getByValue("products", req, res));

productsRouter.route("/sort/:key").get((req, res) => sortByValue("products", req, res));

productsRouter
  .route("/:id")
  .put(editProduct)
  .delete((req, res) => deleteById("products", req, res));

export default productsRouter;
