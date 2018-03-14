import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})


export class UserCardComponent implements OnInit {
	
	// Variables pour particles-js
	myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
	
	// Variables pour la connexion à l'API
	api_ip : String = "192.168.33.10";
	api_port : String = "3000";
	
	// Variables pour gérer les user-cards
	card_list : Array<Card> = new Array; 
	current_card: Card = new Card;
	
	//--------------------------------------
	
	constructor(private http : HttpClient) { 
	}

	ngOnInit() {
		
		// Particle-js Style
		this.myStyle = {'width': '100%','height': '100%','z-index': 1,'top': 0,'left': 0,'right': 0,'bottom': 0,};
		this.myParams = {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":1000}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":2,"color":"#ffffff"},"polygon":{"nb_sides":5},},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":0,"size_min":85.51448551448551,"sync":false}},"line_linked":{"enable":true,"distance":230,"color":"#000000","opacity":1,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":0,"rotateY":0}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":800,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};
		//----------------------
		
		//Récupération des user-cards depuis l'API
		this.http.get('http://'+this.api_ip+':'+this.api_port+'/get_user_cards/').subscribe(data => {
			
			// Insertion des users informations dans la card_list
			for (let key in data)
			{
				this.current_card = new Card;
				this.current_card.functions = new Array;
				if (this.find_user_in_list(data[key].id) == 0)
				{
					this.current_card.id = data[key].id;
					this.current_card.name = data[key].name;
					this.current_card.mail = data[key].mail;
					this.current_card.birthday = data[key].birthday;
					this.current_card.job = data[key].job;
					this.current_card.phone = data[key].phone;
					this.current_card.photo_src = data[key].photo_src;
					this.current_card.role = data[key].role;
					this.current_card.service = data[key].service;

					this.card_list.push(this.current_card);
				}
			}
			
			// Insertion des users fonctions dans la card_list
			for (let key in data)
			{
				if (this.find_user_function(data[key].id, data[key].function) == 0)
				{
					this.push_user_function(data[key].id, data[key].function);
				}
			}
			
			// Insertion des users presences dans la card_list
			for (let key in data)
			{
				if (this.find_user_presence(data[key].id, data[key].day) == 0)
				{
					this.push_user_presence(data[key].id, data[key].day, data[key].presence);
				}
			}
			
			console.log(this.card_list);
		});
		//-----------------------------------------

	}
	
	// Rechercher si l'utilisateur est déjà insérer dans la liste des user-cards
	find_user_in_list(id) {
		
		for (let key in this.card_list)
		{
			if (this.card_list[key].id == id)
			{
				return 1;
			}
		}
		return 0;
	}
	
	// Rechercher pour le user si on à déjà insérer la fonction func
	find_user_function(id, func) {
		
		for (let key in this.card_list)
		{
			if (this.card_list[key].id == id)
			{
				for (let key2 in this.card_list[key].functions)
				{
					if (this.card_list[key].functions[key2] == func)
					{
						return 1;
					}
				}
			}
		}
		return 0;
	}
	
	// Insérer une fonction pour un user
	push_user_function(id, func) {
		
		for (let key in this.card_list)
		{
			if (this.card_list[key].id == id)
			{
				this.card_list[key].functions.push(func);
			}
		}
	}
	
	// Rechercher pour le user si on à déjà insérer la présence pour le day
	find_user_presence(id, day) {
		
		for (let key in this.card_list)
		{
			if (this.card_list[key].id == id)
			{
				if (this.card_list[key].presence[day] == 'y' || this.card_list[key].presence[day] == 'n')
				{
					return 1;
				}
			}
		}
		return 0;
	}
	
	// Insertion d'une user presence dans la card_list
	push_user_presence(id, day, presence) {
		
		for (let key in this.card_list)
		{
			if (this.card_list[key].id == id)
			{
				this.card_list[key].presence[day] = presence;
			}
		}
	}
	
}
