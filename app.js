const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
const date = require(__dirname + "/date.js");

let items = ["Buy food","Cook food","Eat food"];
let workItems =[];

app.get("/",function(request,response){

    
    let day = date.getdate();





    response.render("list",{listTitle:day,newListItems :items});
   

    
});

app.post("/",function(request,response){
    let item = request.body.newItem;
    if(request.body.list=== "Work"){
        workItems.push(item);
        response.redirect("/work");
    }
    else{
        items.push(item);
        response.redirect("/");
    }
   
});
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems : workItems});
    
})
// app.post("/work",function(req,res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.listen(3000,function(){
    console.log('server is running on port 3000');
})