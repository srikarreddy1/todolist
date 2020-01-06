const express=require("express");
const bodyparser=require("body-parser");
const app=express();
var items=[];
var workis=[];
var imp=[];
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.listen(process.env.PORT || 3000 ,function(){
   console.log("server is running");
});
app.get("/",function(req,res){
	var date=new Date();
	var options={
      weekday:"long",
      day:"numeric",
      month:"long"
	};
	var date=date.toLocaleDateString("en-Us",options);
    res.render("list",{listtitle:date,content:items});
});
app.post("/",function(req,res){
	console.log(req.body.but);
	if(req.body.but==="worklist"){
       var item=req.body.tex;
       workis.push(item);
       res.redirect("/work");
	}
	else if(req.body.but==="important") {
		 var item=req.body.tex;
		 imp.push(item);
		 res.redirect("/important");
	}
	else{
	var item=req.body.tex;
	items.push(item);
    res.redirect("/");
};
});
app.get("/work",function(req,res){
   res.render("list",{listtitle:"worklist",content:workis});
});
app.get("/important",function(req,res){
   res.render("list",{listtitle:"important",content:imp});
});
