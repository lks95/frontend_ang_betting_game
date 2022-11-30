import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  loggedin = false;
  loginfail = false;
  errorMessage = 'oops';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) { }

  //check admin oder user
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.loggedin = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {

    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.loginfail = false;
        this.loggedin = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.loginfail = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
