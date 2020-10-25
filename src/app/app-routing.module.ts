import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurServiceComponent } from './our-service/our-service.component'
import { AboutComponent } from './about/about.component'
import { MoreComponent } from './more/more.component';
import { BodyComponent } from './body/body.component'
import { AdminAfterloginComponent } from './admin/admin-afterlogin/admin-afterlogin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AllServiceComponent } from './admin/all-service/all-service.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ViewServiceComponent } from './admin/view-service/view-service.component';


const routes: Routes = [

  {
    path:"",
    component:BodyComponent
  },

  {
    path:"navbar",
    component:NavbarComponent
  },

  {
    path:"header",
    component:HeaderComponent
  },

  {
    path:'our-service',
    component:OurServiceComponent
  },

  {
    path:"about",
    component:AboutComponent
  },

  {
    path:'more/:id',
    component:MoreComponent
  },

////////////////////////////////admin Routing//////////////////////////////
  {
    path:"adminAfterLogin",
    component:AdminAfterloginComponent
  },

  {
    path:"adminDashboard",
    component:AdminDashboardComponent
  },

  {
    path:"allService",
    component:AllServiceComponent
  },

  {
    path:"adminRegistration",
    component:AdminRegistrationComponent
  },

  {
    path:"adminLogin",
    component:AdminLoginComponent
  },

  {
    path:"ViewService",
    component:ViewServiceComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
