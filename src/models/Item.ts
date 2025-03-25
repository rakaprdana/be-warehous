import mongoose, { Schema, model } from "mongoose";
interface IItem extends Document {
  code: string;
  name: string;
  quantity: number;
  category: string;
  stack: string;
  in: Date;
  out: Date;
  deletedAt: Date;
}
const itemSchema: Schema<IItem> = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  stack: { type: String, required: true },
  in: { type: Date, required: true },
  out: { type: Date },
  deletedAt: { type: Date, default: null },
});

export default mongoose.model<IItem>("Item", itemSchema);
