import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = { user_name: '', user_email: 'string', user_password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    console.log('Login button clicked. User:', this.user); // Debugging line

    this.authService.login(this.user).subscribe(
      response => {
        // Handle successful login
        console.log('Server response:', response); // Debugging line
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token stored in localStorage:', response.token); // Debugging line
          // this.router.navigate(['/dashboard']); // Navigate to the dashboard or desired route
        } else {
          this.errorMessage = 'Login failed. Token not received.';
          console.error('Login failed. No token in response.'); // Debugging line
        }
      },
      error => {
        // Handle login error
        this.errorMessage = 'Invalid username/email or password';
        console.error('Login error:', error); // Debugging line
      }
    );
  }
}
