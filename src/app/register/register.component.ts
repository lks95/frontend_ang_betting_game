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
    password: null
  };

  success = false;
  signupfail = false;
  errorMessage = 'oops';

  constructor(private authService: AuthService) {
  }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.register(username, password).subscribe({
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
