import express from "express";
import cors from "cors";
import { productRouter } from "./routes/product.routes";
import { updateRouter } from "./routes/update.routes";
import { updatePointRouter } from "./routes/update-point.routes";
import { protectGuardApi } from "./modules/auth";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protectGuardApi, productRouter);
app.use("/api", protectGuardApi, updateRouter);
app.use("/api", protectGuardApi, updatePointRouter);

export default app;
