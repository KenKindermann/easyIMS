import { Router } from "express";
import { getAllCustomers, getCustomerByValue } from "../controllers/customers.js";

const customersRouter = Router();

customersRouter.route("/").get(getAllCustomers);
customersRouter.route("/search").get(getCustomerByValue);

export default customersRouter;
