import { Router } from "express";
import { getAll } from "../controllers/general.js";

const customersRouter = Router();

customersRouter.route("/").get((req, res) => getAll("products", req, res));

export default customersRouter;
