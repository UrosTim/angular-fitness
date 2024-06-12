import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;

    var user = this.userService.getUser(email);

    if (!user) {
      this.errorExists = true;
      this.errorText = "Account with this email does not exist.";
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);

    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Incorrect password.";
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']);

  }
}
