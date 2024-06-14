import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = "http://localhost:3000"
  httpClient = inject(HttpClient)
  constructor() { }

  getUsers() {
    return this.httpClient.get<User[]>(this.apiUrl + '/users');
  }

  addUser(model: User) {
    return this.httpClient.post<User[]>(this.apiUrl + '/users', model);
  }
}
