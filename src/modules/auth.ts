import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { StatusCode } from "status-code-enum";

interface IRequest extends Request {
  user: string | JwtPayload;
}

export const createJWT = ({ id, username }: any) => {
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET as Secret);

  return token;
};

export const protectGuardApi = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(StatusCode.ClientErrorUnauthorized);
    res.json({ message: "Not Authorized." });

    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    console.log(token);

    res.status(StatusCode.ClientErrorUnauthorized);
    res.json({ message: "Not Authorized." });

    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as Secret);
    req.user = user;
    next();
  } catch (error: unknown) {
    res.status(StatusCode.ClientErrorUnauthorized);
    res.json({ message: "Not Valid Token." });
  }
};