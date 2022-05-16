import { Component } from '@angular/core';
import { AuthenticationService } from './services/userServices/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
constructor(private authService:AuthenticationService){}



  public isAdmin(){
    if (!this.authService.isUserLoggedIn()) {
      return false
    } else {
      return this.authService.isAdmin;
    }
    
    
  }
}
