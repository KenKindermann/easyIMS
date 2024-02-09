import { Router } from "express";
import { deleteById, getAll, getByValue, sortByValue } from "../controllers/general.js";

const documentsRouter = Router();

documentsRouter.route("/invoices").get((req, res) => getAll("invoices", req, res));

export default documentsRouter;
