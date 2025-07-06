import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema(
  {
    productSpec: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductSpec",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending Approval", "Approved", "Rejected"],
      default: "Pending Approval",
    },
    testResults: [
      {
        testType: String,
        result: String,
        date: Date,
      },
    ],
    benchmark: String,
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sample", sampleSchema);
