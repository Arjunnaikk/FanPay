import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true},
    name: { type: String},
    username: { type: String, required: true},
    ProfilePick: { type: String},
    CoverPick: { type: String},
    createdAt: { type: String, default:Date.now},
    updatedAt: { type: String, default:Date.now},

})
export default mongoose.models.User || model("User", UserSchema)