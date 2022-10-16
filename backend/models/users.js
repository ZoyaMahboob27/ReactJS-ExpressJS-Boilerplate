import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
    
});

const userModel = mongoose.model("users", UserSchema)
export default userModel;

