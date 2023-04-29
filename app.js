import express from "express";
import bodyParser from "body-parser";
import commonRouter from "./routes/commonRoute.js";
import adminRouter from "./routes/adminRoute.js";
import dbConnect from "./db/connect.js";

dbConnect().then(()=>console.log('connected')).catch((error)=>console.log(error));
// dbConnect().then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// });
const app = express();

app.use('/xyz', express.static('assets'));

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/",commonRouter)
app.use("/admin", adminRouter)
app.listen(9000);