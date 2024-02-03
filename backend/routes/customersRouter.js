import { Router } from "express";
import {
  addNewCustomer,
  deleteCustomer,
  editCustomer,
  getAllCustomers,
  getCustomerByValue,
  sortCustomersByValue,
} from "../controllers/customers.js";

const customersRouter = Router();

customersRouter.route("/").get(getAllCustomers).post(addNewCustomer);
customersRouter.route("/search").get(getCustomerByValue);
customersRouter.route("/sort/:key").get(sortCustomersByValue);
customersRouter.route("/:id").put(editCustomer).delete(deleteCustomer);

export default customersRouter;
