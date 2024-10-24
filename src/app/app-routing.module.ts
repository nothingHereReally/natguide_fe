import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./page/login/login.component";
import { RegisterComponent } from "./page/register/register.component";
import { ForgotPasswordSendEmailComponent } from "./page/forgot-password-send-email/forgot-password-send-email.component";
import { ForgotPasswordResetPasswordComponent } from "./page/forgot-password-reset-password/forgot-password-reset-password.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgot-password", component: ForgotPasswordSendEmailComponent},
  {path: "reset-password", component: ForgotPasswordResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
