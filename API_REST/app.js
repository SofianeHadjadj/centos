var express = require('express');
var app = express();
var serv = require('http').Server(app);
var mysql = require('mysql');

var my_ip = "192.168.43.159";
var my_port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "OSP",
  password: "OSP",
  database : "OSP"
});

con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
});	
	

var sethead = function(res)
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
	res.setHeader('Access-Control-Allow-Credentials', true); // If needed
	res.setHeader('Content-Type', 'application/json');	
}

	
app.get('/get_user/:id',function(req,res){
	con.query("select * from users where id = " + req.params.id, function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_users',function(req,res){
	con.query("select us.id, us.name from users us, user_affichage ua where us.id = ua.user and ua.yes_or_no = 'y'", function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_user_info/:id',function(req,res){
	con.query("select * from user_informations where user = " + req.params.id, function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_user_affichage/:id',function(req,res){
	con.query("select * from user_affichage where user = " + req.params.id, function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_user_presence/:id/',function(req,res){
	con.query("select up.day, up.yes_or_no as presence from user_presence up where user = " + req.params.id  , function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_user_roles/:id/:day',function(req,res){
	con.query("select * from user_roles where user = " + req.params.id + " and day = " + req.params.day ,  function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_user_functions/:id/:day',function(req,res){
	con.query("select * from user_functions where user = " + req.params.id + " and day = " + req.params.day , function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_services',function(req,res){
	con.query("select * from services", function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_services_child/:id',function(req,res){
	con.query("select * from services_child where parent_id = " + req.params.id, function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_function/:id',function(req,res){
	con.query("select * from functions where id = " + req.params.id, function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_job/:id',function(req,res){
	con.query("select * from jobs where id = " + req.params.id, function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});

app.get('/get_role/:id',function(req,res){
	con.query("select * from roles where id = " + req.params.id, function (err, result) {
		if (err) throw err;
		sethead(res);
		res.send(JSON.stringify(result));
	});		
});








// -------------------------------------------------

serv.listen(my_port,my_ip); // Lancement du serveur










