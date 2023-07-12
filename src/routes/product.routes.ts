import { Router } from "express";
import { handlePostBodyErrors } from "../middlerwares/handlePostBodyErrors";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
} from "../controllers/products.controller";
import { body } from "express-validator";

export const productRouter = Router();

productRouter.get("/products", getProducts);
productRouter.get("/product/:id", handlePostBodyErrors, getOneProduct);
productRouter.put("/product:id", () => {});
productRouter.post(
  "/product",
  body("name").isString(),
  handlePostBodyErrors,
  createProduct
);
productRouter.delete("/product/:id", deleteProduct);
