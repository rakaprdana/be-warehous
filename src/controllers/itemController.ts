import { Request, Response } from "express";
import Item from "../models/Item";
import { generateRandomCode } from "../utils/generateCode";

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find({ deletedAt: null });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
//New code
export const getItemById = async (req: Request, res: any) => {
  try {
    const { id } = req.params;

    const item = await Item.findById({
      _id: id,
      deletedAt: null,
    });

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

export const createItem = async (req: Request, res: Response) => {
  const { category, name, quantity, stack, in: inDate, out } = req.body;

  try {
    const code = generateRandomCode();

    const newItem = new Item({
      code,
      category,
      name,
      quantity,
      stack,
      in: inDate,
      out,
    });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

export const updateItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { category, name, quantity, stack, in: inDate, out } = req.body;
  try {
    const item = await Item.findByIdAndUpdate(
      id,
      { category, name, quantity, stack, in: inDate, out },
      { new: true }
    );

    if (!item) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
      return;
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

export const softDeleteItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const deleteItem = await Item.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );

    if (!deleteItem) {
      res.status(404).json({
        message: "Item Not Found",
      });
      return;
    }
    res.status(200).json({ message: "Item deleted successfully", deleteItem });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
