import jsPDF from "jspdf";

export const createPdf = () => {
  var date = new Date();
  var today = date.getDate() + date.getMonth() + "." + date.getFullYear();
  console.log("KUNDE:", customer, "PRODUCT:", products, "INFOTEXT:", infoText);
  let pos = 1;

  const pdf = new jsPDF();

  pdf.setFontSize(10);
  pdf.text("Musterfirma XYZ", 15, 25);
  pdf.text("Musterstr. 25", 15, 30);
  pdf.text("12345 Musterstadt", 15, 35);
  pdf.text("Rechnungsdatum: " + today, 140, 25);
  pdf.text("Rechnungsnummer: " + 1321456, 140, 30);

  pdf.text(`${customer[0].firstName} ${customer[0].lastName}`, 15, 55);
  pdf.text(`${customer[0].street}`, 15, 60);
  pdf.text(`${customer[0].zipCode} ${customer[0].city}`, 15, 65);

  pdf.setFontSize(30);
  pdf.setFontType("bold");
  pdf.text("Rechnung", 15, 90);

  pdf.setFontType("normal");
  pdf.setFontSize(10);

  pdf.setFillColor(204, 204, 204);
  pdf.rect(15, 97, 181, 4, "F");

  pdf.text("Pos", 16, 100);
  pdf.text("Menge", 26, 100);
  pdf.text("Artikelnummer", 40, 100);
  pdf.text("Artikelbeschreibung", 65, 100);
  pdf.text("Einzelpreis", 150, 100);
  pdf.text("Gesamtpreis", 175, 100);

  const iphone = new Product(
    100000,
    "1234567890123",
    "Apple",
    "iPhone 13 Pro",
    800,
    1099,
    "19",
    1199,
    "Smartphones",
    "Komsa",
    "X"
  );
  let tableRowHeight = 105;
  for (let i = 0; i < products.length; i++) {
    const productProducerAndDetails = `${products[i].producer} ${products[i].details}`;
    pdf.text(i.toString(), 16, tableRowHeight.toString());
    pdf.text(pos.toString(), 26, tableRowHeight.toString());
    pdf.text(products[i].id.toString(), 40, tableRowHeight.toString());
    pdf.text(productProducerAndDetails, 65, tableRowHeight.toString());
    pdf.text(products[i].retailPrice.toString() + "€", 150, tableRowHeight.toString());
    pdf.text(products[i].retailPrice.toString() + "€", 175, tableRowHeight.toString());
    pos++;
    tableRowHeight + 5;
  }
  // pdf.text(pos, 18, 105);
  // pdf.text(iPhone.quantity, 28, 105);
  // pdf.text(iPhone.productID, 40, 105);
  // pdf.text(iPhone.details, 65, 105);
  // pdf.text(String(iPhone.alonePrice), 155, 105);
  // pdf.text(String(iPhone.alonePrice * iPhone.quantity), 180, 105);

  // FOOTER
  pdf.line(20, 280, 190, 280);
  pdf.setFontSize(7);
  pdf.text("FOOTER", 20, 283);

  pdf.save("a4.pdf");
};
