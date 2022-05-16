import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type';
import { AuthenticationService } from 'src/app/services/userServices/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  


  constructor(private authService : AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  
  public onLogOut(): void {
    this.authService.logOut();
    this.router.navigate(['/home']);
    this.sendNotification(NotificationType.SUCCESS, `You've been successfully logged out`);
  }

  sidebarToggle(){

  }
  public isAuthenticated(){
    return this.authService.isUserLoggedIn();
  }
  sendNotification(SUCCESS: any, arg1: string) {
    throw new Error('Method not implemented.');
  }
}
