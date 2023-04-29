import mongoose from "mongoose";

const {Schema} = mongoose;

const brandSchema = new Schema({
    brname:String
})

const brandModel = mongoose.model("brands", brandSchema);

export default brandModel;

// db.categories.insert({catname:"Mens"})
// db.categories.insert({catname:"Womens"})
// db.categories.insert({catname:"Kids"})