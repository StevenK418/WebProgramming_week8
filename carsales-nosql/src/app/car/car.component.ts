import { Component, Input, OnInit } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { ICar, Car} from '../interfaces/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarApiService]
})

export class CarComponent implements OnInit {

  carsData?:ICar[];

  @Input() carData?:ICar;
  carImageWidth:number=300;

  constructor(private _carAPIService:CarApiService) { }

  ngOnInit(){
   
  }


  deleteCar(carId?:string)
  {
    //Delete the car with the passed ID
    this._carAPIService.carsDataCollection.doc(carId).delete();
  }

}
