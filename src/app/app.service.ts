import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import {insurance,insuranceOnLocation} from './app';


@Injectable()
export class appService {

  constructor(private http: Http) { }


   getinsuranceData():Observable<insurance[]> {
        return this.http.get('http://localhost:3000/insurance')
            .map(this.extractUserData)
            .catch(this.handleError);
    }


    getinsuranceOnLocationData(zipCode):Observable<insuranceOnLocation[]> {
        return this.http.get('http://localhost:3000/insuranceOnloaction/'+zipCode)
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
