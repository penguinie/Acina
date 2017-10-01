var express = require("express"),
	app		= express();

app.set("port", (process.env.PORT) || 4000);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.redirect("/landing");
});

app.get("/landing", function(req, res){
	res.render("landing");
});

app.listen(app.get("port"), "0.0.0.0", function(){
	console.log("Server running at : ",app.get("port"));
});