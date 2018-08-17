import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';


const studentRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: '**', component: PagenotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    exports: [RouterModule]
})

export class StudentRoutingModule {}
