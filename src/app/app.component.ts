import { Component } from '@angular/core';
import {StorageService} from "./services/storage.service";
import {AuthService} from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  loggedin = false;
  adminview = false;
  moderatorview = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedin = this.storageService.isLoggedIn();

    if (this.loggedin) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.adminview = this.roles.includes('ROLE_ADMIN');
      this.moderatorview = this.roles.includes('ROLE_MODERATOR')
      this.username = user.username;
    }
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}
