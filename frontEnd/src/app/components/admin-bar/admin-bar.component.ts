import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/userServices/authentication.service';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent implements OnInit {

  constructor(private authService : AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  
  public onLogOut(): void {
    this.authService.logOut();
    this.router.navigate(['/home']);

  }

}
