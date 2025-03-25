import express from "express";
import {
  getItems,
  createItem,
  softDeleteItem,
  getItemById,
} from "../controllers/itemController";
import { updateItem } from "../controllers/itemController";
import protect from "../middlewares/authMiddleware";
const router = express.Router();

router.get("/", getItems);

router.get("/:id", getItemById);

router.post("/", protect, createItem);

router.put("/:id", protect, updateItem);

router.delete("/:id", protect, softDeleteItem);

export default router;
