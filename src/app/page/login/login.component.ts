import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usrname: string = "";
  usrpw: string = "";

  pwtype: string = "password";
  susdir: string = "/icons/sc1/icon_unsee.svg";




  constructor(private route: Router){}




  public clickedStartQuiz(){
    console.log("start quiz clicked", Math.random())
  }
  public seeUnseePW(){
    this.pwtype = this.pwtype=="password"?"text":"password";
    this.susdir = this.pwtype=="password"?"/icons/sc1/icon_unsee.svg":"/icons/sc1/icon_see.svg";
  }
  public clickedLogin(){
    console.log("username: ", this.usrname);
    console.log("pw: ", this.usrpw);
    console.log("login clicked", Math.random())
  }
  public clickedRegister(){
    this.route.navigate(["register"]);
  }
  public clickedForgotPW(){
    this.route.navigate(["forgot-password"]);
  }
}
