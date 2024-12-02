import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './COMPONENTS/landing-page/landing-page.component';
import { DvdPageComponent } from './COMPONENTS/dvd-page/dvd-page.component';
import { ManagerDashboardComponent } from './COMPONENTS/manager-dashboard/manager-dashboard.component';
import { SummaryComponent } from './COMPONENTS/Manager/summary/summary.component';
import { ManageDvdComponent } from './COMPONENTS/Manager/manage-dvd/manage-dvd.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { CustomerDashboardComponent } from './COMPONENTS/customer-dashboard/customer-dashboard.component';
import { ManageCustomerComponent } from './COMPONENTS/Manager/manage-customer/manage-customer.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'home',component:LandingPageComponent},
  { path: 'dvds', component: DvdPageComponent },
  { path: 'dvds', component: DvdPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent, children:[
    { path: 'home', component: SummaryComponent },
    { path: 'manage-dvd', component: ManageDvdComponent },
    { path: 'manage-customers', component: ManageCustomerComponent },
    // { path: 'manage-rental', component: ManageRentalComponent },
    // { path: 'reports', component: ReportsComponent },
  ]},
  // { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
