import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usrname: string = "";
  usrpw: string = "";
  pwtype: string = "password";
  public clickedStartQuiz(){
    console.log("start quiz clicked", Math.random())
  }
  public seeUnseePW(){
    this.pwtype = this.pwtype=="password"?"text":"password";
  }
  public clickedLogin(){
    console.log("username: ", this.usrname);
    console.log("pw: ", this.usrpw);
    console.log("login clicked", Math.random())
  }
  public clickedRegister(){
    console.log("register clicked", Math.random())
  }
  public clickedForgotPW(){
    console.log("forgot pw clicked", Math.random())
  }
}
