import { Injectable } from '@angular/core';
import { CurrentUserService } from '../services/current-user.service'
import {yahad} from '../types/yahad';

const yahads:yahad[]=[
  {for:"israel",time:"01/02/2020"},{for:"america",time:"05/10/2001"},{for:"japan",time:"08/01/2021"}];

@Injectable({
  providedIn: 'root'
})
export class ManageForService {

  private yahads = yahads;


  getYahads() {
    return this.yahads;
  }

  addyahad(yahad:yahad) {
    if (this.currentUserService.getCurrentUser().role === 'sochen') {
      this.yahads.push(yahad);
    }    
  }

  constructor(private currentUserService: CurrentUserService) { }
  
}
