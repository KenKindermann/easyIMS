// Customer table
export const customers = {
  labels: [
    "Customer No",
    "Fist name",
    "Last name",
    "Street",
    "Zip code",
    "City",
    "Shipping street",
    "Shipping zip code",
    "Shipping city",
  ],
  keys: [
    "id",
    "firstname",
    "lastname",
    "street",
    "zipcode",
    "city",
    "shippingstreet",
    "shippingzipcode",
    "shippingcity",
  ],
};

// Products table
export const products = {
  labels: [
    "Product No",
    "Ean",
    "Producer",
    "Details",
    "NPP",
    "NRP",
    "GRP",
    "Margin",
    "Tax",
    "Upe",
    "Stock",
    "Product group",
    "Distributor",
  ],
  keys: [
    "id",
    "ean",
    "producer",
    "details",
    "net_purchase_price",
    "net_retail_price",
    "gross_retail_price",
    "margin",
    "tax",
    "upe",
    "stock",
    "product_group",
    "distributor",
  ],
};

// Receiving table
export const receiving = {
  labels: [
    "Quantity",
    "Product No",
    "Ean",
    "Producer",
    "Details",
    "NPP",
    "NRP",
    "GRP",
    "Margin",
    "Tax",
    "Upe",
    "Stock",
    "Product group",
    "Distributor",
  ],
  keys: [
    "id",
    "ean",
    "producer",
    "details",
    "net_purchase_price",
    "net_retail_price",
    "gross_retail_price",
    "margin",
    "tax",
    "upe",
    "stock",
    "product_group",
    "distributor",
  ],
};

// Documents table
export const documents = {
  labels: ["Time", "Date", "Id", "Customer Id", "Fist name", "Last name", "Street", "Zip code", "City"],
  keys: ["time", "date", "id", "customer_id", "firstname", "lastname", "street", "zipcode", "city"],
};
