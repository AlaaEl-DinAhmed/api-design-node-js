import { Router } from "express";

export const updateRouter = Router();

updateRouter.get("/update", () => {});
updateRouter.get("/update/:id", () => {});
updateRouter.put("/update:id", () => {});
updateRouter.post("/update", () => {});
updateRouter.delete("/update/:id", () => {});
