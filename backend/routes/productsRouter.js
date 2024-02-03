import { Router } from "express";
import { getAll } from "../controllers/general";

const customersRouter = Router();

customersRouter.route("/").get((req, res) => getAll("products", req, res));

export default customersRouter;
