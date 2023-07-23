import { Request, Response } from "express";
import { prisma } from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";
import { StatusCode } from "status-code-enum";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    res.status(StatusCode.ClientErrorBadRequest);
    res.json({ message: "Something went wrong" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    const isValidUser = await comparePasswords(
      req.body.password,
      user?.password
    );

    if (!isValidUser) {
      res.status(StatusCode.ClientErrorUnauthorized);
      res.json({ message: "Username or password is incorrect." });

      return;
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    res.status(StatusCode.ServerErrorBadGateway);
    res.json({ message: "Something went wrong" });
  }
};
