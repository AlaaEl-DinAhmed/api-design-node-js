import { Request, Response } from "express";
import {
  addProduct,
  deleteSingleProduct,
  querySingeProduct,
  queryUserProducts,
  updateSingleProduct,
} from "../repositories/products.repository";

export const getProducts = async (req: any, res: Response) => {
  try {
    const products = await queryUserProducts(req.user);

    res.json({ data: products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const products = await querySingeProduct(req);

    res.json({ data: products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await addProduct(req);

    res.json({ data: product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await updateSingleProduct(req);

    res.json({ data: product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await deleteSingleProduct(req);

    res.json({ data: product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
