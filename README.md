
**1) When you clone the project you have to run the command npm install in the following folders**


	- API_REST
	
	- Front_end


**2) In order to run the project you have to follow this steps**

	- Install MariaDB Server and run it !
	
	- Create a database

	- Import the SQL file Database/data.sql in your database

	- Get your ip with the command : ifconfig (linux) or ipconfig (windows)

	- In the API_REST folder run the command : node app.js [YOUR_IP] [YOUR_API_PORT]
	
	- Modify the ip/port with YOUR_IP and YOUR_API_PORT in the file
		- Front_end/src/app/user-card/user-card.component.ts
		
	- In the Front_end folder run the command : ng serve --host [YOUR_IP] --port [YOUR_FRONT_PORT]

	 
