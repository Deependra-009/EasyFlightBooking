import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from 'src/Service/login-status.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(
    private service:LoginStatusService
  ) { }

  loggedIn=true;

  ngOnInit(): void {
    this.loggedIn=this.service.isLoggedIn();
  }

  logout(){
    console.log("hsbdhb");
    
    this.service.loggedOut();
    this.loggedIn=this.service.isLoggedIn();
    window.location.href='/'
  }


}
