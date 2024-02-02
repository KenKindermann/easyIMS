import { Router } from "express";
import { getAllCustomers } from "../controllers/customers.js";

const customersRouter = Router();

customersRouter.route("/").get(getAllCustomers);

export default customersRouter;
