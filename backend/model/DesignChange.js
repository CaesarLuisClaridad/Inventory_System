import mongoose from "mongoose";

const designChangeSchema = new mongoose.Schema(
    {
        productSpec: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductSpec",
            required: true
        },
        requestedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        reason: String,
        changes: [
            {
                field: String,
                oldValue: String,
                newValue: String,
            }
        ],
        feasibilityChecked: Boolean,
        approved: Boolean,
        approvedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {timestamps: true}
)

export default mongoose.model("DesignChange", designChangeSchema);