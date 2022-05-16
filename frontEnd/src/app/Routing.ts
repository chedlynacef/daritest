import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usersManagement/login/login.component';
import { RegisterComponent } from './components/usersManagement/register/register.component';
import { UserComponent } from './components/usersManagement/user/user.component';
import { AuthenticationGuard } from './guard/authentication.guard';


export const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user/management', component: UserComponent, canActivate: [AuthenticationGuard] },
    { path: 'home', component: HomeComponent },
];

