import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavbarComponent } from './components/USER/navbar/navbar.component';
import { FooterComponent } from './components/USER/footer/footer.component';
import { HomeComponent } from './components/USER/home/home.component';
import { SearchResultComponent } from './components/USER/search-result/search-result.component';
import { RegisterLoginComponent } from './components/USER/register-login/register-login.component';
import { LoginComponent } from './components/USER/login/login.component';
import { RegisterComponent } from './components/USER/register/register.component';
import { BookingDetailsComponent } from './components/USER/booking-details/booking-details.component';
import { AccountPageComponent } from './components/USER/account-page/account-page.component';
import { PaymentsectionComponent } from './components/USER/paymentsection/paymentsection.component';
import { UserdetailsComponent } from './components/USER/userdetails/userdetails.component';
import { AdminHomePageComponent } from './components/ADMIN/admin-home-page/admin-home-page.component';
import { HomeDashboardComponent } from './components/USER/home-dashboard/home-dashboard.component';
import { DashboardComponent } from './components/ADMIN/dashboard/dashboard.component';
import { AddFlightDataComponent } from './components/ADMIN/add-flight-data/add-flight-data.component';
import { AdminNavbarComponent } from './components/ADMIN/admin-navbar/admin-navbar.component';
import { SidebarComponent } from './components/ADMIN/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AllFlightDataComponent } from './components/ADMIN/all-flight-data/all-flight-data.component';
import { EditFlightDataComponent } from './components/ADMIN/edit-flight-data/edit-flight-data.component';
import { FlightCategoriesComponent } from './components/ADMIN/flight-categories/flight-categories.component';
import { UserDetailsComponent } from './components/ADMIN/user-details/user-details.component';
import { authInterceptorProvider } from 'src/Service/auth.interceptor';
import { ForgetPasswordComponent } from './components/USER/forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchResultComponent,
    UserdetailsComponent,
    PaymentsectionComponent,
    AccountPageComponent,
    BookingDetailsComponent,
    RegisterComponent,
    LoginComponent,
    RegisterLoginComponent,
    AdminHomePageComponent,
    HomeDashboardComponent,
    DashboardComponent,
    AddFlightDataComponent,
    AdminNavbarComponent,
    SidebarComponent,
    AllFlightDataComponent,
    EditFlightDataComponent,
    FlightCategoriesComponent,
    UserDetailsComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
