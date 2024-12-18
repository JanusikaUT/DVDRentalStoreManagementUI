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
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './COMPONENTS/profile/profile.component';
import { CustomerHomeComponent } from './COMPONENTS/customer-home/customer-home.component';
import { ManageRentalComponent } from './COMPONENTS/Manager/manage-rental/manage-rental.component';
import { ManageReturnComponent } from './COMPONENTS/Manager/manage-return/manage-return.component';
import { ManageReportComponent } from './COMPONENTS/Manager/manage-report/manage-report.component';
import { EditDvdComponent } from './COMPONENTS/Manager/edit-dvd/edit-dvd.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  { path: 'login', component: LoginComponent },

  {path:'home',component:LandingPageComponent},
  { path: 'dvds', component: DvdPageComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    canActivate: [AuthGuard], 
    children:[
      {path:'',component:DvdPageComponent},      
      { path: 'dashboard', component: CustomerDashboardComponent },

    ]
  },

  { 
    path: 'manager-dashboard',
    component: ManagerDashboardComponent,
    canActivate: [AuthGuard],
    children:[
              {path:'',component:SummaryComponent},
              { path: 'home', component: SummaryComponent },
              { path: 'manage-dvd', component: ManageDvdComponent },
              {path:'edit/:id',component:EditDvdComponent},
              { path: 'manage-customers', component: ManageCustomerComponent },
              { path: 'manager-rental', component: ManageRentalComponent },
              {path:'manager-return',component:ManageReturnComponent},
              { path: 'reports', component: ManageReportComponent },
    ]
  },
  { path: '**', redirectTo: '/login' }, // Fallback for unknown routes
  // { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
