import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./page/login/login.component";
import { RegisterComponent } from "./page/register/register.component";
import { HomeComponent } from "./page/home/home.component";
import { ForgotpwComponent } from "./page/forgotpw/forgotpw.component";
import { ResetpwComponent } from "./page/resetpw/resetpw.component";

import { WarningComponent } from "./essentials/warning/warning.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgot-password", component: ForgotpwComponent},
  {path: "reset-password", component: ResetpwComponent},
  {path: "home", component: HomeComponent},
  {path: "warning", component: WarningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
