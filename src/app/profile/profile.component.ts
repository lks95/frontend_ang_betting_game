import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

//get username, token und rolle
//hier später auch tipps speichern
//vergangene tipps
//verlinkung auf aktuelle tipps
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}
