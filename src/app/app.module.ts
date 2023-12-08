import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { Error404Component } from './home/views/error404/error404.component';
import { DoctorModule } from './modules/doctor/doctor.module';
import { PatientModule } from './modules/patient/patient.module';
import { LoginComponent } from './home/views/login/login.component';
import { RegisterComponent } from './home/views/register/register.component';

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent, Error404Component, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, DoctorModule, PatientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
