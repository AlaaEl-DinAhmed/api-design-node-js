import { Request, Response } from "express";
import {
  addProduct,
  deleteSingleProduct,
  querySingeProduct,
  queryUserProducts,
  updateSingleProduct,
} from "../repositories/products.repository";

export const getProducts = async (req: any, res: Response) => {
  const products = await queryUserProducts(req.user);

  res.json({ data: products });
};

export const getOneProduct = async (req: Request, res: Response) => {
  const products = await querySingeProduct(req);

  res.json({ data: products });
};

export const createProduct = async (req: Request, res: Response) => {
  const product = await addProduct(req);

  res.json({ data: product });
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await updateSingleProduct(req);

  res.json({ data: product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await deleteSingleProduct(req);

  res.json({ data: product });
};
