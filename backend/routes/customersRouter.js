import { Router } from "express";
import { getAllCustomers, getCustomerByValue } from "../controllers/customers.js";

const customersRouter = Router();

customersRouter.route("/").get(getAllCustomers);
customersRouter.route("/:key").get(getCustomerByValue);

export default customersRouter;
