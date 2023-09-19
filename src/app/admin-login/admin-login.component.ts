import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from '../data/admin-data'; // Import the admin array from the correct location

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminID!: number;
  password: string = '';
  isWrong: boolean = false;

  constructor(private router: Router) { }

  CheckID() {
    // Find admin with matching ID
    const matchingAdmin = admin.find(a => a.id == this.adminID);
    console.log(matchingAdmin);
    console.log(admin);
    
    if (matchingAdmin) {
      // Check if the password matches
      if (matchingAdmin.password === this.password) {
        this.router.navigate(['/admin']);
      } else {
        // Password is incorrect
        this.isWrong = true;
      }
    } else {
      // Admin ID not found
      alert('Admin ID not found');
    }
  }
}
