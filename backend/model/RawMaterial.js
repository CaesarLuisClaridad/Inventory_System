import mongoose from "mongoose";

const rawMaterialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter material name"],
    },
    unit: {
      type: String,
      enum: ["kg", "pcs", "liters"],
      required: true,
    },
    batchNo: String,
    expiryDate: Date,
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    receivedDate: {
      type: Date,
      default: Date.now,
    },
    quantity: {
      type: Number,
      required: [true, "Please enter quantity"],
    },
    storageLocation: String,
    status: {
      type: String,
      enum: ["Available", "In Use", "Expired"],
      default: "Available",
    },
  },
  { timestamps: true }
);

export default mongoose.model("RawMaterial", rawMaterialSchema);