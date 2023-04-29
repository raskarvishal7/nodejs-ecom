import userModel from "../models/commonModel.js";

const loginPage = (req,res)=>{
    res.render("login");
}

const registerPage = (req,res)=>{
    res.render("register");
}

const homePage = (req,res)=>{
    res.render("index");
}

const registerAction = async (req,res)=>{
    // console.log(req.body);
    // res.send("Called Register Action");
    const instance = new userModel(req.body);
    const ans_add = await instance.save();
    res.redirect("/login");
}

const loginAction = async (req,res)=>{
    console.log(req.body);
    // res.send("Called Login Action");
    const ans_data = await userModel.find({useremail:req.body.useremail});
    console.log(ans_data);
    if(ans_data.length>0){
        if(ans_data[0].userpassword == req.body.userpassword)
        {
            res.send({msg:"Valid"});
        }
        else{
            res.send({msg:"Invalid Password"});
        }
    }
    else
    {
        res.send({msg:"Invalid Email"})
    }
}

export{
    loginPage,
    registerPage,
    homePage,
    registerAction,
    loginAction
}