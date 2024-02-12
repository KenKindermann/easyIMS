import jsPDF from "jspdf";

export const createPdf = (invoice, products) => {
  const pdf = new jsPDF();

  pdf.setFontSize(10);
  pdf.text("Sample Company XYZ", 15, 25);
  pdf.text("Sample St. 25", 15, 30);
  pdf.text("12345 Sample City", 15, 35);
  pdf.text("Invoice date: " + invoice.date.split("T")[0], 140, 25);
  pdf.text("Invoice number: " + invoice.id, 140, 30);

  pdf.text(`${invoice.firstname} ${invoice.lastname}`, 15, 55);
  pdf.text(`${invoice.street}`, 15, 60);
  pdf.text(`${invoice.zipcode} ${invoice.city}`, 15, 65);

  pdf.setFontSize(30);
  pdf.setFont("helvetica", "bold");
  pdf.text("Invoice", 15, 90);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);

  pdf.setFillColor(204, 204, 204);
  pdf.rect(15, 97, 181, 4, "F");

  pdf.text("Pos", 16, 100);
  pdf.text("Product number", 26, 100);
  pdf.text("Product details", 55, 100);
  pdf.text("Tax", 140, 100);
  pdf.text("Net price", 150, 100);
  pdf.text("Gross price", 175, 100);

  let tableRowHeight = 105;
  let pos = 1;

  for (let i = 0; i < products.length; i++) {
    const productProducerAndDetails = `${products[i].producer} ${products[i].details}`;
    pdf.text(pos.toString(), 16, tableRowHeight.toString());
    pdf.text(products[i].id.toString(), 26, tableRowHeight.toString());
    pdf.text(productProducerAndDetails, 55, tableRowHeight.toString());
    pdf.text(products[i].tax.toString(), 140, tableRowHeight.toString());
    pdf.text(products[i].net_retail_price.toString(), 150, tableRowHeight.toString());
    pdf.text(products[i].gross_retail_price.toString(), 175, tableRowHeight.toString());
    pos++;
    tableRowHeight += 5;
  }

  pdf.line(16, tableRowHeight.toString(), 195, tableRowHeight.toString());
  tableRowHeight += 5;
  pdf.text("Total net price:", 140, tableRowHeight.toString());

  const totalNetPrice = products
    .reduce((acc, product) => {
      return acc + parseFloat(product.net_retail_price);
    }, 0)
    .toFixed(2);

  pdf.text(totalNetPrice.toString(), 175, tableRowHeight.toString());

  const totalGrossPrice = products
    .reduce((acc, product) => {
      return acc + parseFloat(product.gross_retail_price);
    }, 0)
    .toFixed(2);

  tableRowHeight += 5;

  pdf.setFont("helvetica", "bold");
  pdf.text("Total retail price:", 140, tableRowHeight.toString());
  pdf.text(totalGrossPrice.toString(), 175, tableRowHeight.toString());

  tableRowHeight += 40;

  pdf.text("Thank you for your purchase.", 20, tableRowHeight.toString());

  tableRowHeight += 5;
  pdf.text("The invoice date corresponds to the delivery date.", 20, tableRowHeight.toString());

  tableRowHeight += 5;
  pdf.text("All prices are in Euros.", 20, tableRowHeight.toString());

  // -------------- FOOTER -------------- //
  pdf.setFont("helvetica", "normal");
  pdf.line(20, 280, 190, 280);
  pdf.setFontSize(7);

  // Company data
  pdf.text("Sample Company XYZ", 20, 286);
  pdf.text("Sample St. 25", 20, 289);
  pdf.text("12345 Sample City", 20, 292);

  // Bank data
  pdf.text("Sample Bank", 85, 286);
  pdf.text("IBAN: DE12500105170648489890", 85, 289);
  pdf.text("BIC: COBADEFFXXX", 85, 292);

  // Contact data
  pdf.text("Contact: John Doe", 150, 286);
  pdf.text("Email: john.doe@example.com", 150, 289);
  pdf.text("Phone: +49 123 456789", 150, 292);

  pdf.save(`Invoice_${invoice.id}`);
};
