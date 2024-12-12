import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './COMPONENTS/landing-page/landing-page.component';
import { DvdPageComponent } from './COMPONENTS/dvd-page/dvd-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ManagerDashboardComponent } from './COMPONENTS/manager-dashboard/manager-dashboard.component';
import { SummaryComponent } from './COMPONENTS/Manager/summary/summary.component';
import { ManageDvdComponent } from './COMPONENTS/Manager/manage-dvd/manage-dvd.component';
import { ModalComponent } from './COMPONENTS/Shared/modal/modal.component';
import { CustomerDashboardComponent } from './COMPONENTS/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { ManageCustomerComponent } from './COMPONENTS/Manager/manage-customer/manage-customer.component';
import { NotificationsComponent } from './COMPONENTS/notifications/notifications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProfileComponent } from './COMPONENTS/profile/profile.component';
import { CustomerHomeComponent } from './COMPONENTS/customer-home/customer-home.component';
import { ManageRentalComponent } from './COMPONENTS/Manager/manage-rental/manage-rental.component';
import { PendingFilPipe } from './pipes/pending-fil.pipe';
import { ManageReturnComponent } from './COMPONENTS/Manager/manage-return/manage-return.component';
import { ManageReportComponent } from './COMPONENTS/Manager/manage-report/manage-report.component';



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
    ManageCustomerComponent,
    NotificationsComponent,
    ProfileComponent,
    CustomerHomeComponent,
    ManageRentalComponent,
    PendingFilPipe,
    ManageReturnComponent,
    ManageReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
