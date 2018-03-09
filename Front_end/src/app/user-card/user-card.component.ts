import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})


export class UserCardComponent implements OnInit {
	
	api_ip : String = "192.168.43.159";
	api_port : String = "3000";

	current_card : Card = new Card;
	card_list : Array<Card> = new Array; 
	
	myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
	
	constructor(private http : HttpClient) { 
	}

	ngOnInit() {
		
		this.myStyle = {
            'width': '100%',
            'height': '100%',
            'z-index': 1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
		this.myParams = {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":1000}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":2,"color":"#ffffff"},"polygon":{"nb_sides":5},},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":0,"size_min":85.51448551448551,"sync":false}},"line_linked":{"enable":true,"distance":230,"color":"#000000","opacity":1,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":0,"rotateY":0}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":800,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};
   
			
		

		this.http.get('http://'+this.api_ip+':'+this.api_port+'/get_users/').subscribe(data => {
			
		
		
				
		  for(let key in data)
		  {
				
			  this.current_card = new Card;
			  this.current_card.presence = new Array;
			  this.current_card.id = data[key].id;
			  this.current_card.name = data[key].name;
			  
			  
			  
			  this.http.get('http://'+this.api_ip+':'+this.api_port+'/get_user_presence/'+this.current_card.id).subscribe(data2 => {  
			  
					
				 for(let key2 in data2)
				 {
					 this.current_card.presence[data2[key2].day - 1] = data2[key2].presence;
				 }
		
				  
			  });
			  
			  this.http.get('http://'+this.api_ip+':'+this.api_port+'/get_user_info/'+this.current_card.id).subscribe(data3 => {  
			  
			  
		
				 for(let key3 in data3)
				 {
					 this.current_card.photo_src = data3[key3].photo_src;
					
				 }
					
			  });
			  this.card_list.push(this.current_card);
			  
		  }

		});
		console.log(this.card_list);
		
		
	
	}

}
