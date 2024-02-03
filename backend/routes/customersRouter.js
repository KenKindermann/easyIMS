import { Router } from "express";
import { deleteCustomer, getAllCustomers, getCustomerByValue, sortCustomersByValue } from "../controllers/customers.js";

const customersRouter = Router();

customersRouter.route("/").get(getAllCustomers);
customersRouter.route("/search").get(getCustomerByValue);
customersRouter.route("/sort/:key").get(sortCustomersByValue);
customersRouter.route("/:id").delete(deleteCustomer);

export default customersRouter;
