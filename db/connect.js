import mongoose from "mongoose";

async function dbConnect(){
    return await mongoose.connect('mongodb://127.0.0.1:27017/project_1');
}

export default dbConnect;