import mongoose from "mongoose";

const {Schema} = mongoose;

const categorySchema = new Schema({
    catname:String
})

const categoryModel = mongoose.model("categories", categorySchema);

export default categoryModel;

// db.categories.insert({catname:"Mens"})
// db.categories.insert({catname:"Womens"})
// db.categories.insert({catname:"Kids"})