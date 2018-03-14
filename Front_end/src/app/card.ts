export class Card {
	
  id: number;
  name: string;
  mail : string;
  birthday: Date;
  job: string
  phone: string;
  photo_src: string;
  role: string;
  service: string;
  presence : {[key:string]:string};
  functions: Array<string>;
  
}

