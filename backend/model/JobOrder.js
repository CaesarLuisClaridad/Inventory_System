import mongoose from "mongoose";

const jobOrderSchema = new mongoose.SchemaType(
  {
    taskType: {
      type: String,
      required: [true, "Please enter a task type"],
      enum: {
        values: ["Picking", "Packing", "Loading", "Transfer"],
        message: "Please select a valid task type",
      },
    },
    referenceNo: {
      type: String,
      required: [true, "Please select a valid reference number"],
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requried: [true, "Please assign this job to a user"],
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    deadline: {
      type: Date,
      required: [true, "Please set a deadline"],
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: [true, "Please specify quantity"],
    },
    status: {
      type: String,
      enum: ["Issued", "In Progress", "Completed", "Cancelled"],
      default: "Issued",
    },
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("JobOrder", jobOrderSchema);
