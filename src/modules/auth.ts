import { NextFunction, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { StatusCode } from "status-code-enum";

export const comparePasswords = (password: string, hash: any) =>
  bcrypt.compare(password, hash);

export const hashPassword = (password: string) => {
  const saltRounds = 5;

  return bcrypt.hash(password, saltRounds);
};

export const createJWT = ({ id, username }: any) => {
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET as Secret);

  return token;
};

export const protectGuardApi = (
  req: any,
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
