import { Component, OnInit } from '@angular/core';
import {yahad} from '../../types/yahad';
import {ManageForService} from '../../services/manage-for.service'
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-sochen',
  templateUrl: './sochen.component.html',
  styleUrls: ['./sochen.component.css']
})
export class SochenComponent implements OnInit {
  public for : string = '';
  public time : string = '';
  
  yahads:yahad[]=[];
  manageForService:ManageForService;
  constructor(myahad: ManageForService) {
    this.manageForService = myahad;
    this.yahads=this.manageForService.getYahads();
   }
  ngOnInit(): void {
  }
  addYahad(){
    if (this.for && this.time) {
      const newYahad:yahad={for:this.for,time:this.time};
      this.manageForService.addyahad(newYahad);
      console.log(newYahad);
    }
    this.time='';
    this.for='';
  }
}