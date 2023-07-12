import { Request } from "express";
import { prisma } from "../db";

export const queryUserProducts = async (userInfo: any) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userInfo.id,
    },
    include: {
      products: true,
    },
  });

  return user?.products;
};

export const querySingeProduct = async (req: any) => {
  const products = await prisma.product.findFirst({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  return products;
};

export const addProduct = async (req: any) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  return product;
};

export const updateSingleProduct = async (req: any) => {
  const product = await prisma.product.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });

  return product;
};

export const deleteSingleProduct = async (req: any) => {
  const product = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });

  return product;
};
