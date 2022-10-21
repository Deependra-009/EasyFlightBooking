import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from 'src/Service/login-status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
