import  express from "express";
import { addCategoryPage, showCategoryPage, addCategoryAction, deleteCategoryAction, addProductPage, productAction } from "../controllers/adminControllers.js";

const router = express.Router();

router
.get("/add-category", addCategoryPage)
.get("/add-product", addProductPage)
.get("/show-category", showCategoryPage)
.post("/add-category-action", addCategoryAction)
.post("/delete-category", deleteCategoryAction)
.post("/product-action", productAction)


export default router;
