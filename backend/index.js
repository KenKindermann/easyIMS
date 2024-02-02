import express from "express";
import customerRouter from "./routes/customersRouter.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/customers", customerRouter);

app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));
