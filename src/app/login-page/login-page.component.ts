import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../data/user-data';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    email: string = '';
    password: string = '';
    isWrong: boolean = false;

    constructor(private router: Router) { }

    idCheck() {
        const matchingUsers = users.find(user => user.email == this.email);
        console.log(matchingUsers);
        console.log(this.password);

        if (matchingUsers) {
            if (matchingUsers.password == this.password) {
                this.router.navigate(['/main']);
            } else {
                this.isWrong = true;
            }
        } else {
            alert('User not found');
        }
    }
}
