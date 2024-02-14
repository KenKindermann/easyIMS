// Utils
import { inputField } from "../classes/inputField.js";

export const customerInputs = [
  new inputField("firstname", "text", "First name", true),
  new inputField("lastname", "text", "Last name", true),
  new inputField("street", "text", "Street", true),
  new inputField("zipcode", "number", "Zip code", true),
  new inputField("city", "text", "city", true),
  new inputField("shippingstreet", "text", "Shipping street", false),
  new inputField("shippingzipcode", "number", "Shipping zip code", false),
  new inputField("shippingcity", "text", "Shipping city", false),
];
