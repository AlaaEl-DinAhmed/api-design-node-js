import { body, oneOf } from "express-validator";

export const updatePutRoute = () => [
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "DEPRECATED", "ARCHIVED"]),
  body("version").optional(),
];

export const updatePostRoute = () => [
  body("title").exists().isString(),
  body("body").exists().isString(),
];
