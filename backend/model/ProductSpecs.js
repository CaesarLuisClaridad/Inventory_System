import mongoose from "mongoose";

const productSpecSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        version: {
            type: String,
            default: "1.0"
        },
        dimensions: {
            length: Number,
            width: Number,
            height: Number
        },
        material: {
            type: String,
            required: [true, "Please enter material"]
        },
        tolerance: String,
        function: String,
        packagingStandard: String,
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {timestamps: true}  
);

export default mongoose.model("ProductSpecs", productSpecSchema);