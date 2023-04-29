import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is Required']
    },
    usermobile: {
        type: String,
        required: [true, 'UserMobile is Required']
    },
    useremail: {
        type: String,
        required: [true, 'UserEmail is Required'],
        unique: true
    },
    userpassword: {
        type: String,
        required: [true, 'UserPassword is Required'],
        minLength: [4, 'Password Min Length : 4'],
        maxLength: [8, 'Password Max Length : 8']
    }
});

const userModel = mongoose.model('users', userSchema);
export default userModel;