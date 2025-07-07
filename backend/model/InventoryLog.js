import mongoose from "mongoose";

const inventoryLogSchema = new mongoose.Schema(
  {
    material: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RawMaterial",
      required: true,
    },
    type: {
      type: String,
      enum: ["IN", "OUT"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    relatedJobOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobOrder",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    remarks: String,
  },
  { timestamps: true }
);

export default mongoose.model("InventoryLog", inventoryLogSchema);
