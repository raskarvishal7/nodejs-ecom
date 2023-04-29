import express from "express";
import { homePage, loginAction, loginPage, registerAction, registerPage } from "../controllers/commonControllers.js";


const commonRouter = express.Router();

commonRouter
.get("/login",loginPage)
.get("/register",registerPage)
.get("/",homePage)
.post("/register-action",registerAction)
.post("/login-action",loginAction)
.post("/logout", logout)

export default commonRouter;