import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { PreviousTrainingComponent } from './training/previous-training/previous-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './ui-material.module';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingService } from './training/training.service';
import { StopTrainingComponent } from './training/current-training/stop-training/stop-training.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { UsersComponent } from './users/users.component';
import { provideHttpClient } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { UserFormComponent } from './users/user-form/user-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    TrainingComponent,
    PreviousTrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    StopTrainingComponent,
    ProfileComponent,
    UsersComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    TrainingService,
    UserService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
