import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password-reset-password',
  templateUrl: './forgot-password-reset-password.component.html',
  styleUrl: './forgot-password-reset-password.component.css'
})
export class ForgotPasswordResetPasswordComponent {
  public usrpw: string = "";
  public usrrpw: string = "";
  public pwtype: string = "password";
  public rpwtype: string = "password";

  public clickedResetPassword(){
    console.log("clicked reset password ", Math.random());
  }
  public seeUnseePW(towhom: string = 'pw'){
    if(towhom=="pw"){
      this.pwtype = this.pwtype=="password"?"text":"password";
    }else{
      this.rpwtype = this.rpwtype=="password"?"text":"password";
    }
  }
}
