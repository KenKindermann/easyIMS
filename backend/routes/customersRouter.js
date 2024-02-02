import { Router } from "express";
import { getAllCustomers, getCustomerByValue, sortCustomersByValue } from "../controllers/customers.js";

const customersRouter = Router();

customersRouter.route("/").get(getAllCustomers);
customersRouter.route("/search").get(getCustomerByValue);
customersRouter.route("/sort").get(sortCustomersByValue);

export default customersRouter;
