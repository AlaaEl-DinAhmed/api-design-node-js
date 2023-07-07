import { Router } from "express";

export const productRouter = Router();

productRouter.get("/product", (req, res) => {
  res.json("Hellodddd");
});
productRouter.get("/product/:id", () => {});
productRouter.put("/product:id", () => {});
productRouter.post("/product", () => {});
productRouter.delete("/product/:id", () => {});
