import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamp: true }
);
export default mongoose.model('User', userSchema);