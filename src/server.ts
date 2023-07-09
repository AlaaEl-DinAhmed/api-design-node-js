import express from "express";
import cors from "cors";
import { productRouter } from "./routes/product.routes";
import { updateRouter } from "./routes/update.routes";
import { updatePointRouter } from "./routes/update-point.routes";
import { protectGuardApi } from "./modules/auth";
import { createUser, signIn } from "./controllers/users.controllers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protectGuardApi, productRouter);
app.use("/api", protectGuardApi, updateRouter);
app.use("/api", protectGuardApi, updatePointRouter);
app.use("/user", createUser);
app.use("/signin", signIn);

export default app;
