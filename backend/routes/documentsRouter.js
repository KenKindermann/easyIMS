import { Router } from "express";
import { getAll, getByValue, sortByValue } from "../controllers/general.js";
import { addInvoice, addInvoiceProducts } from "../controllers/invoices.js";

const documentsRouter = Router();

documentsRouter
  .route("/invoices")
  .get((req, res) => getAll("invoices", req, res))
  .post(addInvoice);

documentsRouter.route("/search").get((req, res) => getByValue("invoices", req, res));
documentsRouter.route("/sort/:key").get((req, res) => sortByValue("invoices", req, res));

documentsRouter.route("/credits").get((req, res) => getAll("credits", req, res));

documentsRouter
  .route("/invoices/invoice_products")
  .get((req, res) => getAll("invoice_products", req, res))
  .post(addInvoiceProducts);

documentsRouter.route("/invoices/search").get((req, res) => getByValue("invoices", req, res));

export default documentsRouter;
