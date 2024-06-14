import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../auth/user.service';
import { UsersService } from '../../services/users.service';
import User from '../../types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  formBuilder = inject(FormBuilder);
  router = inject(Router);

  useForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required]],
    address: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  userService = inject(UsersService)

  addUser() {
    if (this.useForm.invalid) {
      alert('Fill all fields.');
      return
    }
    const model: User = this.useForm.value;
    this.userService.addUser(model).subscribe(result => {
      alert('Added new user successfully')
      this.router.navigateByUrl('/');
    })
  }
}
