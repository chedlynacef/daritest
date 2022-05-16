import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationType } from '../enum/notification-type';
import { AuthenticationService } from '../services/userServices/authentication.service';
import { NotificationService } from '../services/userServices/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router,
    private notificationService: NotificationService) {}

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
if(this.authenticationService.isUserLoggedIn()){
  return true;
}else{
  this.router.navigate(['/login']);
  this.notificationService.notify(NotificationType.ERROR, `You need to log in to access this page`);
  return false;
  }
}


}
