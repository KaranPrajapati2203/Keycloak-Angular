import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: User = { user_name: '', user_email: '', user_password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    this.authService.register(this.user).subscribe(
      response => {
        // Handle successful registration
        this.router.navigate(['/login']); // Navigate to the login page or desired route
      },
      error => {
        // Handle registration error
        this.errorMessage = 'Registration failed';
      }
    );
  }
}
