import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/Service/admin.guard';
import { UserGuard } from 'src/Service/user.guard';
import { AdminHomePageComponent } from './components/ADMIN/admin-home-page/admin-home-page.component';
import { AllFlightDataComponent } from './components/ADMIN/all-flight-data/all-flight-data.component';
import { DashboardComponent } from './components/ADMIN/dashboard/dashboard.component';
import { EditFlightDataComponent } from './components/ADMIN/edit-flight-data/edit-flight-data.component';
import { FlightCategoriesComponent } from './components/ADMIN/flight-categories/flight-categories.component';
import { UserDetailsComponent } from './components/ADMIN/user-details/user-details.component';
import { AccountPageComponent } from './components/USER/account-page/account-page.component';
import { BookingDetailsComponent } from './components/USER/booking-details/booking-details.component';
import { ForgetPasswordComponent } from './components/USER/forget-password/forget-password.component';
import { HomeDashboardComponent } from './components/USER/home-dashboard/home-dashboard.component';
import { HomeComponent } from './components/USER/home/home.component';
import { PaymentsectionComponent } from './components/USER/paymentsection/paymentsection.component';
import { RegisterLoginComponent } from './components/USER/register-login/register-login.component';
import { SearchResultComponent } from './components/USER/search-result/search-result.component';
import { UserdetailsComponent } from './components/USER/userdetails/userdetails.component';

const routes: Routes = [
  {
    path:'user',
    component:HomeDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'booking-details',
        component:BookingDetailsComponent,
      },
      {
        path:'search-page',
        component:SearchResultComponent,
      },
      {
        path:'user-details',
        component:UserdetailsComponent,
      },
      {
        path:'payment-page',
        component:PaymentsectionComponent,
      },
      {
        path:'account-page',
        component:AccountPageComponent,
      },

    ]

  },
  
  {
    path:'',
    component:RegisterLoginComponent,
    pathMatch:'full'
  },
  {
    path:'forget-password',
    component:ForgetPasswordComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:AdminHomePageComponent
      },
      {
        path:'all-flight-data',
        component:AllFlightDataComponent
      },
      {
        path:'edit-flight-data',
        component:EditFlightDataComponent
      },
      {
        path:'categories',
        component:FlightCategoriesComponent
      },
      {
        path:'user-details',
        component:UserDetailsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
