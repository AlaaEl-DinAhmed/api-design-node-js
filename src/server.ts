import express from "express";
import cors from "cors";
import { productRouter } from "./routes/product.routes";
import { updateRouter } from "./routes/update.routes";
import { updatePointRouter } from "./routes/update-point.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRouter);
app.use("/api", updateRouter);
app.use("/api", updatePointRouter);

export default app;
