import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuardService } from '../authguard.service';
import { JobpostsComponent } from '../jobposts/jobposts.component';

const sharedRoutes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'studentSignup', component: SignupComponent},
    {path: 'employerSignup', component: SignupComponent},
    {path: 'studentLogin', component: LoginComponent},
    {path: 'employerLogin', component: LoginComponent},
    {path:'**', component: PagenotfoundComponent} //this path needs to be at the bottom for the 404 route to work
];

@NgModule({
    imports: [RouterModule.forChild(sharedRoutes)],
    exports: [RouterModule]
})

export class SharedRoutingModule {}