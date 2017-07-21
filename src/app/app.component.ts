import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {appService} from './app.service';
import {car,carmodels} from './app';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[appService]
})
export class AppComponent {
  private car:car[]=[];
  private carmodels:carmodels[] = [];
  private errorMessage:any = '';
 public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private appService: appService) {
  	this.appService.getcarData()
        .subscribe(
            car =>{
               this.car = car;
				},
                  error => this.errorMessage = <any>error);
  }
 
  public openModal(template: TemplateRef<any>, key) {
   
    this.appService.getCarModelsData(key)
        .subscribe(
            carmodels =>{
                    this.carmodels = carmodels;
                     this.modalRef = this.modalService.show(template);
                    },
                  error => this.errorMessage = <any>error);
  }




}
