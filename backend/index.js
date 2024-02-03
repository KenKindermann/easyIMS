import express from "express";
import customerRouter from "./routes/customersRouter.js";
import productsRouter from "./routes/productsRouter.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/customers", customerRouter);
app.use("/products", productsRouter);

app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));
