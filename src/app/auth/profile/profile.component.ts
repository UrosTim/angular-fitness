import { Component, Inject } from '@angular/core';
import { User, UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) {}

  enableEdit() {}

  finishEditing() {}

}
