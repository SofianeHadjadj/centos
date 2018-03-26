**Dans ce README je considère que le système d'exploitation est Centos 7**



**1) Ne pas oublier les npm install dans les dossier suivants**

	* API_REST	
	* Front_end

**2) !!!  Attention !!!**

	* Tous le projet est basculé en HTTPS donc les liens ne sont pas
	* accessible depuis http:// , il le sont depuis https://
	
	* Ne pas oublier de générer de nouveaux certificats en executants les commandes suivantes :
	
		- openssl genrsa -out key.pem 1024
		- openssl req -newkey rsa:1024 -new -key key.pem -out csr.pem
		- openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
		
	* Les trois fichiers générer doivent être copié et placé dans les dossier suivants:
	
		 - API_REST/ssl/
		 - Front_end/ssl/

	
**3) Ensuite pour lancer le projet il faut suivre les étapes suivantes**

	* Installer MariaDB Serveur :
		- sudo yum install -y mariadb-server
		- sudo systemctl start mariadb
		- mysql -h host -u user -p
	
	* Creer une base de donnée
		- CREATE DATABASE OSP;
		- \q
	
	* Import the SQL file Database/init_database.sql in your database
		- Dans le dossier Database
		- mysql -h host -u user -p
		- source init_database.sql
	
	* Changer les variables de connexion à la BDD API_REST/app.js
		- host
		- user
		- password
		- database

	* Prenez note de votre ip: ifconfig (linux) ou ipconfig (windows)

	- Dans le dossier API_REST lancer la commande: node app.js [YOUR_IP]
		- Le port utilisé par défaut par l'API est le 4442
	
	- Modify the ip/port with YOUR_IP in the file
		- Front_end/src/app/user-card/user-card.component.ts
		
	- Dans le dossier Front_end lancer la commande
		ng serve --ssl 1 --ssl-key "ssl/key.pem" --ssl-cert "ssl/cert.pem" --host [YOUR_IP] --port [YOUR_ANGULAR_PORT]
		


	
**Vous pouvez maintenant accedez à l'application depuis le navigateur: https://[YOUR_IP]:[YOUR_ANGULAR_PORT]**

	 
