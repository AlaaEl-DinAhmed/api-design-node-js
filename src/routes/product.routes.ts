import { Router } from "express";
import { body, validationResult } from "express-validator";
import { StatusCode } from "status-code-enum";
import { handlePostBodyErrors } from "../middlerwares/handlePostBodyErrors";

export const productRouter = Router();

productRouter.get("/product", (req, res) => {});
productRouter.post(
  "/product/:id",
  body("name").isString(),
  handlePostBodyErrors,
  (req, res) => {}
);

productRouter.put("/product:id", () => {});
productRouter.post("/product", () => {});
productRouter.delete("/product/:id", () => {});
