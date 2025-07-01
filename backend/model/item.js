import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter item name"],
        maxLength: [200, "Product name must be atleast 200 character"]
    },
    quantity: {
        type: Number,
        required: [true, "Please enter item quantity"],
        maxLength: [5, "Quantity cannot exceed 5 digits"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter item stock"],
    }
})

export default mongoose.model("Item", itemSchema);