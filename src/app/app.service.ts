import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import {car,carmodels} from './app';


@Injectable()
export class appService {

  constructor(private http: Http) { }


   getcarData():Observable<car[]> {
        return this.http.get('http://localhost:3000/cars')
            .map(this.extractUserData)
            .catch(this.handleError);
    }


    getCarModelsData(carId):Observable<carmodels[]> {
        return this.http.get('http://localhost:3000/carmodels/'+carId)
            .map(this.extractFollowerData)
            .catch(this.handleError);
    }


    private extractUserData(res:Response) {
        let body = res.json();
        return body || {};
    }
     private extractFollowerData(res:Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
