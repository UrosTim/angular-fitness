import { Component, OnInit, inject } from '@angular/core';
import User from '../types/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  usersService = inject(UsersService);

  ngOnInit() {
    this.usersService.getUsers().subscribe((result) => {
      this.users = result;
      console.log(this.users);
    })
  }
}
