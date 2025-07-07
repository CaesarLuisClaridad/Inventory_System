import mongoose from "mongoose";

const loadingPlanSchema = new mongoose.Schema(
    {
        truckNumber: {
            type: String,
            required: [true, "Please enter a truck number"]
        },
        containerId: String,
        destination: {
            type: String,
            required: [true, "Please enter destination"],
        },
        route: String,
        weightDistribution: [
            {
                section: String,
                weight: Number,
            }
        ],
        packagingType: String,
        capacityUsed: {
            type: Number,
            default: 0
        },
        jobOrders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "JobOrder",
            }
        ],
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed"],
            default: "Pending",
        }
    }, 
    {timestamps: true}
)

export default mongoose.model("LoadingPlan", loadingPlanSchema);