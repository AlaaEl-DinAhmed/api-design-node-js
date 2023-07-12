import express from "express";
import cors from "cors";
import { productRouter } from "./routes/product.routes";
import { protectGuardApi } from "./modules/auth";
import { createUser, signIn } from "./controllers/users.controller";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protectGuardApi, productRouter);
app.use("/user", createUser);
app.use("/signin", signIn);

export default app;
