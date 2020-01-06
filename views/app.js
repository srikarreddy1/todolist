const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.listen(3000,function(){
   console.log("server is running");
});
app.get("/",function(req,res){
	res.send("hello");
})