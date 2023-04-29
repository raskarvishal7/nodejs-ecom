import brandModel from "../models/brandModel.js";
import categoryModel from "../models/categoryModel.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + file.originalname
      cb(null, uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage }).single('proimage')

const addCategoryPage = (req, res)=>{
    res.render("add_category");
}

const addProductPage = async (req,res)=>{
    var ans_category = await categoryModel.find({});
    var ans_brand = await brandModel.find({});
    console.log(ans_brand);
    console.log(ans_category);
    res.render("add_product", {catData:ans_category, brData:ans_brand});
}

const showCategoryPage = async(req, res)=>{
    try{
        var ans_db = await categoryModel.find({});
        console.log(ans_db);
        res.render("show_category", {allcategory:ans_db});
    }
    catch(err){
        console.log(err);
    }
}

const addCategoryAction = async(req, res)=>{
    try{
        var instance = new categoryModel(req.body);
        var ans_insert = await instance.save();
        console.log(ans_insert);
        res.send({msg:true});
    }
    catch(err){
        console.log(err);
    }
}

const deleteCategoryAction = async(req, res)=>{
    try{
        var ans_remove = await categoryModel.findByIdAndRemove(req.body.catid);
        res.send({msg:true, result:ans_remove})
    }
    catch(err){
        console.log(err);
    }
}

const productAction = (req,res)=>{
    upload(req, res, function(err){
        if(err instanceof multer.MulterError){
            
        } else if(err){

        }

        console.log(req.body);
        console.log(req.file);

        res.send({msg:"File Uploaded"})
    });
}

export{
    addCategoryPage,
    showCategoryPage,
    addCategoryAction,
    deleteCategoryAction,
    addProductPage,
    productAction
}