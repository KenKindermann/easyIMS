import { Router } from "express";
import { deleteById, getAll, getByValue, sortByValue } from "../controllers/general.js";
import { addInvoice, addInvoiceProducts } from "../controllers/invoices.js";

const documentsRouter = Router();

documentsRouter
  .route("/invoices")
  .get((req, res) => getAll("invoices", req, res))
  .post(addInvoice);

documentsRouter.route("/credits").get((req, res) => getAll("credits", req, res));

documentsRouter.route("/invoices/invoice_products").post(addInvoiceProducts);

documentsRouter.route("/invoices/search").get((req, res) => getByValue("invoices", req, res));

export default documentsRouter;
