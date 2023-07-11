import { body } from "express-validator";

export const updatePointPostRoute = () => [
  body("name").isString(),
  body("description").isString(),
  body("updatedId").exists().isString(),
];

export const updatePointPutRoute = () => [
  body("name").optional().isString(),
  body("description").optional().isString(),
];
