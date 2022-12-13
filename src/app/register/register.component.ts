import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  form: any = {
    username: null,
    email: null,
    password: null
  };

  success = false;
  signupfail = false;
  errorMessage = 'oops';

  constructor(private authService: AuthService) {
  }

  onSubmit(): void {
    const {username, email, password} = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log('Data:' +data);
        this.success = true;
        this.signupfail = false
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.signupfail = true;
      }
    })
  }


}
