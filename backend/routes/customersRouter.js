import { Router } from "express";
import {
  addNewCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerByValue,
  sortCustomersByValue,
} from "../controllers/customers.js";

const customersRouter = Router();

customersRouter.route("/").get(getAllCustomers).post(addNewCustomer);
customersRouter.route("/search").get(getCustomerByValue);
customersRouter.route("/sort/:key").get(sortCustomersByValue);
customersRouter.route("/:id").delete(deleteCustomer);

export default customersRouter;
