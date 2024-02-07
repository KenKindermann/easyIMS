import { inputField } from "../classes/inputField.js";

export const productInputs = [
  new inputField("ean", "number", "Ean", true),
  new inputField("product_group", "text", "Product Group", true),
  new inputField("producer", "text", "Producer", true),
  new inputField("distributor", "text", "Distributor", true),
  new inputField("details", "text", "Details", true),
  new inputField("upe", "number", "UPE", true),
  new inputField("tax", "number", "Tax", true),
  new inputField("mark", "text", "Mark", true),
  new inputField("net_purchase_price", "number", "Net Purchase Price", true),
  new inputField("margin", "number", "Margin", true),

  new inputField("gross_retail_price", "number", "Gross Retail Price", true),
  new inputField("net_retail_price", "number", "Net Retail Price", true),
];
