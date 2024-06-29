import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true},
    name: { type: String},
    username: { type: String, required: true},
    bio: { type: String},
    profilepic: { type: String},
    coverpic: { type: String},
    createdAt: { type: String, default:Date.now},
    updatedAt: { type: String, default:Date.now},
    razorpayId: {type: String},
razorpaySecret: {type:String}

})
export default mongoose.models.User || model("User", UserSchema)