DROP TABLE IF EXISTS user_presence CASCADE;
DROP TABLE IF EXISTS user_functions CASCADE;
DROP TABLE IF EXISTS user_roles CASCADE;
DROP TABLE IF EXISTS user_informations CASCADE;
DROP TABLE IF EXISTS user_affichage CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS functions CASCADE;
DROP TABLE IF EXISTS services_child CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS day_list CASCADE;

Create table users(

id int(1) AUTO_INCREMENT PRIMARY KEY,
name varchar(50)
);

Create table user_affichage(

user int(1),
yes_or_no varchar(1),
FOREIGN KEY (user) REFERENCES users(id)
);

Create table jobs(

id int(1) AUTO_INCREMENT PRIMARY KEY,
name varchar(50)
);

Create table roles(

id int(1) AUTO_INCREMENT PRIMARY KEY,
name varchar(50)
);

Create table functions(

id int(1) AUTO_INCREMENT PRIMARY KEY,
name varchar(50)
);

Create table services(

id int(1) AUTO_INCREMENT PRIMARY KEY,
name varchar(50)
);

Create table services_child(

parent_id int(1) ,
child_id int(1) ,
FOREIGN KEY (parent_id) REFERENCES services(id),
FOREIGN KEY (child_id) REFERENCES services(id)

);

create table day_list
(
id int(1) AUTO_INCREMENT PRIMARY KEY,
name varchar(50)
);

Create table user_presence(

user int(1),
day int(1),
yes_or_no varchar(1),
FOREIGN KEY (user) REFERENCES users(id),
FOREIGN KEY (day) REFERENCES day_list(id)
);

Create table user_roles(

user int(1),
day int(1),
role int(1),
FOREIGN KEY (user) REFERENCES users(id),
FOREIGN KEY (day) REFERENCES day_list(id),
FOREIGN KEY (role) REFERENCES roles(id)
);

Create table user_functions(

user int(1),
day int(1),
function int(1),
FOREIGN KEY (user) REFERENCES users(id),
FOREIGN KEY (day) REFERENCES day_list(id),
FOREIGN KEY (function) REFERENCES functions(id)
);

Create table user_informations(

user int(1),
birthday date,
phone varchar(14),
mail varchar(30),
job int(1),
service int(1),
photo_src varchar(20),
FOREIGN KEY (user) REFERENCES users(id),
FOREIGN KEY (job) REFERENCES jobs(id),
FOREIGN KEY (service) REFERENCES services(id)
);

insert into day_list(name) values ("Lundi");
insert into day_list(name) values ("Mardi");
insert into day_list(name) values ("Mercredi");
insert into day_list(name) values ("Jeudi");
insert into day_list(name) values ("Vendredi");
insert into day_list(name) values ("Samedi");
insert into day_list(name) values ("Dimanche");

insert into roles(name) values ("Run Alim");
insert into roles(name) values ("Run Non-Alim");
insert into roles(name) values ("Transverse");
insert into roles(name) values ("aucun");

insert into functions(name) values ("Ticket");
insert into functions(name) values ("Appel");
insert into functions(name) values ("Mail");

insert into jobs(name) values("UX designer");
insert into jobs(name) values("Developpeur");

insert into services (name) values ("Marchandise");


insert into users(name) values ("Binji SUN");

insert into user_affichage(user,yes_or_no) values (1,"y");

insert into user_informations(user, birthday, phone , mail, job, service, photo_src) values (1,"1996-05-09", "07.60.12.46.71","binji.sun@gmail.com",1,1,"binji.png");

insert into user_roles(user,day,role) values(1,1,3);
insert into user_roles(user,day,role) values(1,2,3);
insert into user_roles(user,day,role) values(1,3,3);
insert into user_roles(user,day,role) values(1,4,3);
insert into user_roles(user,day,role) values(1,5,3);
insert into user_roles(user,day,role) values(1,6,3);
insert into user_roles(user,day,role) values(1,7,3);

insert into user_functions(user,day,function) values(1,1,1);
insert into user_functions(user,day,function) values(1,2,3);
insert into user_functions(user,day,function) values(1,3,3);
insert into user_functions(user,day,function) values(1,4,3);
insert into user_functions(user,day,function) values(1,5,3);
insert into user_functions(user,day,function) values(1,6,3);
insert into user_functions(user,day,function) values(1,7,3);

insert into user_presence(user,day,yes_or_no) values(1,1,"y");
insert into user_presence(user,day,yes_or_no) values(1,2,"y");
insert into user_presence(user,day,yes_or_no) values(1,3,"y");
insert into user_presence(user,day,yes_or_no) values(1,4,"y");
insert into user_presence(user,day,yes_or_no) values(1,5,"y");
insert into user_presence(user,day,yes_or_no) values(1,6,"n");
insert into user_presence(user,day,yes_or_no) values(1,7,"n");

insert into users(name) values ("Alain KHUON");

insert into user_affichage(user,yes_or_no) values (2,"y");

insert into user_informations(user, birthday, phone , mail, job, service, photo_src) values (2,"1996-05-09", "07.60.12.46.71","alain.khuon@gmail.com",2,1,"alain.png");

insert into user_roles(user,day,role) values(2,1,3);
insert into user_roles(user,day,role) values(2,2,3);
insert into user_roles(user,day,role) values(2,3,3);
insert into user_roles(user,day,role) values(2,4,3);
insert into user_roles(user,day,role) values(2,5,3);
insert into user_roles(user,day,role) values(2,6,3);
insert into user_roles(user,day,role) values(2,7,3);

insert into user_functions(user,day,function) values(2,1,1);
insert into user_functions(user,day,function) values(2,2,3);
insert into user_functions(user,day,function) values(2,3,3);
insert into user_functions(user,day,function) values(2,4,3);
insert into user_functions(user,day,function) values(2,5,3);
insert into user_functions(user,day,function) values(2,6,3);
insert into user_functions(user,day,function) values(2,7,3);

insert into user_presence(user,day,yes_or_no) values(2,1,"y");
insert into user_presence(user,day,yes_or_no) values(2,2,"y");
insert into user_presence(user,day,yes_or_no) values(2,3,"y");
insert into user_presence(user,day,yes_or_no) values(2,4,"y");
insert into user_presence(user,day,yes_or_no) values(2,5,"y");
insert into user_presence(user,day,yes_or_no) values(2,6,"n");
insert into user_presence(user,day,yes_or_no) values(2,7,"n");


