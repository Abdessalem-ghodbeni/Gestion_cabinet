import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from './modules/doctor/doctor-layout/doctor-layout.component';
import { PatientLayoutComponent } from './modules/patient/patient-layout/patient-layout.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { LoginComponent } from './home/views/login/login.component';
import { RegisterComponent } from './home/views/register/register.component';
import { Error404Component } from './home/views/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeLayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'doctor',
    component: DoctorLayoutComponent,
    loadChildren: () =>
      import('./modules/doctor/doctor.module').then(
        (doctor) => doctor.DoctorModule
      ),
  },
  {
    path: 'patient',
    component: PatientLayoutComponent,
    loadChildren: () =>
      import('./modules/patient/patient.module').then(
        (patient) => patient.PatientModule
      ),
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
