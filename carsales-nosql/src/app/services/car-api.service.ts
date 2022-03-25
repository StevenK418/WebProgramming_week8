import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/compat/firestore";
import {ICar} from "../interfaces/car";

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  carsDataCollection:AngularFirestoreCollection <ICar>;

  carsData?:Observable<ICar[]>;

  allCarsData?:ICar[];

  errorMessage?:string;

  constructor(private _http:HttpClient, private _afs: AngularFirestore)
  {
      this.carsDataCollection = _afs.collection<ICar>("cars_data");
   }

   getCarData():Observable<ICar[]>
   {
      //Connect to the database
    this.carsData = this.carsDataCollection.valueChanges();
    this.carsData.subscribe(
      data => console.log("getCarsData:" + JSON.stringify(data))
    )
    return this.carsData;
   }

   addCarData(car:ICar):void{
     this.carsDataCollection.add(JSON.parse(JSON.stringify(car)))
   }

   private handleError (err:HttpErrorResponse)
   {
     console.log('CarApiSErvice: ' + err.message);
     return throwError(err.message);
   }
}
