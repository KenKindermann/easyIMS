import express from "express";
import cors from "cors";
import customerRouter from "./routes/customersRouter.js";
import productsRouter from "./routes/productsRouter.js";
import documentsRouter from "./routes/documentsRouter.js";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/customers", customerRouter);
app.use("/products", productsRouter);
app.use("/documents", documentsRouter);

app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));
