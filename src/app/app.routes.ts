import { Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
];
