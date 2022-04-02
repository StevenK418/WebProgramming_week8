import { stringify } from "querystring";
export interface ICar
{
  make: string;
  model: string;
  year: string;
  imageUrl: string;
  id?:string;
}

export class Car{
  make: string;
  model: string;
  year: string;
  imageUrl: string;
  id?:string;

  constructor(make: string, model: string, year: string, imageUrl:string)
  {
    this.make = make;
    this.model = model;
    this.year = year;
    this.imageUrl = imageUrl;
  }
}
