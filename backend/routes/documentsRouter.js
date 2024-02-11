import { Router } from "express";
import { deleteById, getAll, getByValue, sortByValue } from "../controllers/general.js";

const documentsRouter = Router();

documentsRouter.route("/invoices").get((req, res) => getAll("invoices", req, res));
documentsRouter.route("/invoices/search").get((req, res) => getByValue("invoices", req, res));

export default documentsRouter;
