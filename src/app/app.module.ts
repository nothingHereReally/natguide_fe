import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './essentials/button/button.component';
import { LoginComponent } from './page/login/login.component';
import { ButtonOutlineComponent } from './essentials/button-outline/button-outline.component';
import { RegisterComponent } from './page/register/register.component';
import { ForgotPasswordSendEmailComponent } from './page/forgot-password-send-email/forgot-password-send-email.component';
import { ButtonSendComponent } from './essentials/button-send/button-send.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    ButtonOutlineComponent,
    RegisterComponent,
    ForgotPasswordSendEmailComponent,
    ButtonSendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
