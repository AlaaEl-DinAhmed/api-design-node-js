import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { StatusCode } from "status-code-enum";

export const handlePostBodyErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(StatusCode.ClientErrorBadRequest);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
