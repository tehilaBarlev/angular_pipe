import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser = {
    name: 'aaaa',
    role: 'sochen',
  }

  getCurrentUser() {
    return this.currentUser;
  }

  constructor() { }
}
