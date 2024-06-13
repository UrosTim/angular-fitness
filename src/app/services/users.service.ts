import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = "http://localhost:3000/"
  httpClient = inject(HttpClient)
  constructor() { }

  getUsers() {
    this.httpClient.get(this.apiUrl + '/users');
  }
}
