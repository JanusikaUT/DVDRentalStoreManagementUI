import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './COMPONENTS/landing-page/landing-page.component';
import { DvdPageComponent } from './COMPONENTS/dvd-page/dvd-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManagerDashboardComponent } from './COMPONENTS/manager-dashboard/manager-dashboard.component';
import { SummaryComponent } from './COMPONENTS/Manager/summary/summary.component';
import { ManageDvdComponent } from './COMPONENTS/Manager/manage-dvd/manage-dvd.component';
import { ModalComponent } from './COMPONENTS/Shared/modal/modal.component';
import { CustomerDashboardComponent } from './COMPONENTS/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { ManageCustomerComponent } from './COMPONENTS/Manager/manage-customer/manage-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DvdPageComponent,
    ManagerDashboardComponent,
    SummaryComponent,
    ManageDvdComponent,
    ModalComponent,
    CustomerDashboardComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ManageCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
