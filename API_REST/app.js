//Import des modules
var express = require('express');
var app = express();
var serv = require('http').Server(app);
var mysql = require('mysql');

//Valeurs par défaut
var my_ip = "127.0.0.1";
var my_port = 3000;

//Parseur d'arguments  -------->  syntaxe: node app.js [ip] [port]
process.argv.forEach((val,index)=>{

  if(index==2)
  {
    my_ip = val;
  }
  else if(index == 3)
  {
    my_port = val;
  }

});
//------------------------------------------------------------------

//Connexion à la base de données
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yoyo110A!",
  database : "OSP"
});

con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
});	
//----------------------------------	


//Fonction pour les headers HTTP
var sethead = function(res)
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); 
	res.setHeader('Access-Control-Allow-Credentials', true); 
	res.setHeader('Content-Type', 'application/json');	
}
//-------------------------------

	
app.get('/get_user_cards',function(req,res){
	
	con.query("select DISTINCT usr.id, \
				usr.name,\
				jobs.name as job,\
				services.name as service,\
				ui.photo_src,\
				ui.birthday,\
				ui.phone,\
				ui.mail,\
				functions.name as function,\
				roles.name as role,\
				dl.name as day,\
				up.yes_or_no as presence\
					FROM users usr\
						INNER JOIN user_presence up ON usr.id = up.user\
						INNER JOIN day_list dl ON up.day = dl.id\
						INNER JOIN user_functions ufs ON usr.id = ufs.user\
						INNER JOIN functions on ufs.function = functions.id\
						INNER JOIN user_roles ur ON usr.id = ur.user\
						INNER JOIN roles ON ur.role = roles.id\
						INNER JOIN user_informations ui ON usr.id = ui.user INNER JOIN jobs ON ui.job = jobs.id\
						INNER JOIN services ON ui.service = services.id\
						INNER JOIN user_affichage ua ON usr.id = ua.user\
							WHERE ua.yes_or_no = 'y'\
								ORDER BY usr.id, up.day", function (err, result) {
			if (err) throw err;
			sethead(res);
			res.send(JSON.stringify(result));
	});		
});

// -------------------------------------------------
serv.listen(my_port,my_ip); // Lancement du serveur