import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

////////////////////////////////////////////////////angular material import

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { AboutComponent } from './about/about.component';
import { MoreComponent } from './more/more.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';

// //////////////////////////////////////////////////////////////////////////for admin
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminAfterloginComponent } from './admin/admin-afterlogin/admin-afterlogin.component';
import { AllServiceComponent } from './admin/all-service/all-service.component';
import { ViewServiceComponent } from './admin/view-service/view-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    OurServiceComponent,
    AboutComponent,
    MoreComponent,
    BodyComponent,
    FooterComponent,
    ContactComponent,
    WorkComponent,

////////////////////////////////////////for admin
    AdminRegistrationComponent,

AdminLoginComponent,

AdminDashboardComponent,

AdminAfterloginComponent,

AllServiceComponent,

ViewServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

///////////////////////////////////////angular material modules import
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
