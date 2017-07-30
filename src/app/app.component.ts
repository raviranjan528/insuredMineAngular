import { Component } from '@angular/core';
import {appService} from './app.service';
import {insurance,insuranceOnLocation} from './app';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[appService]
})
export class AppComponent {
  user:any={
    description:'',
    insuranceHave:[],
    insuranceSelectedOnArea:[]
  }
  zipCode:any;
  description:any;
  flag:any=0;
  private insurance:insurance[]=[];
  private insuranceOnLocation:insuranceOnLocation[] = [];
  private errorMessage:any = '';
  constructor(private appService: appService) {
  	this.appService.getinsuranceData()
        .subscribe(
            insurance =>{
               this.insurance = insurance;
				},
                  error => this.errorMessage = <any>error);
  }
 
  public OnFindByZipCode() {
   console.log('zipCode' + this.zipCode);
    this.appService.getinsuranceOnLocationData(this.zipCode)
        .subscribe(
            insuranceOnLocation =>{
                    this.insuranceOnLocation = insuranceOnLocation;
                    },
                  error => this.errorMessage = <any>error);
  }

public onStart() {
  this.flag=1;
}
onChecked(data:any){
  console.log(JSON.stringify(data)+"data")
  var index = this.user.insuranceHave.map((o) => o.name).indexOf(data.name);
      console.log("index" + index);
      if(index > 0){
         this.user.insuranceHave.splice(index,1)
      }else{
        this.user.insuranceHave.push(data)
      }
}
onSelectedChecked(data:any){
  console.log(JSON.stringify(data)+"data")
  var index = this.user.insuranceSelectedOnArea.map((o) => o.name).indexOf(data.name);
      console.log("index" + index);
      if(index > 0){
         this.user.insuranceHave.splice(index,1)
      }else{
        this.user.insuranceHave.push(data)
      }
}
public onNext(){
  this.user.description = this.description;
 this.flag++;
 console.log("next" + this.flag);
}
}
