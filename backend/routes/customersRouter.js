import { Router } from "express";
import { addNewCustomer, editCustomer } from "../controllers/customers.js";
import { getAll, getByValue, sortByValue, deleteById } from "../controllers/general.js";

const customersRouter = Router();

customersRouter
  .route("/")
  .get((req, res) => getAll("customers", req, res))
  .post(addNewCustomer);

customersRouter.route("/search").get((req, res) => getByValue("customers", req, res));

customersRouter.route("/sort/:key").get((req, res) => sortByValue("customers", req, res));

customersRouter
  .route("/:id")
  .put(editCustomer)
  .delete((req, res) => deleteById("customers", req, res));

export default customersRouter;
