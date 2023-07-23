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

app.use((error: any, req: any, res: any, next: any) => {
  if (error.type === "auth") {
    res.status(401).json({ message: "Unauthorized" });
  } else if (error.type === "input") {
    res.status(400).json({ message: "Invalid input" });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default app;
