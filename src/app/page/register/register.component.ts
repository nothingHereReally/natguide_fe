import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public usrname: string = "";
  public usremail: string = "";
  public usrpw: string = "";
  public usrrpw: string = ""; /*-------------*/
  public pwtype: string = "password";
  public rpwtype: string = "password";

  public clickedCreateAcc(){
    console.log("username: ", this.usrname);
    console.log("usremail: ", this.usremail);
    console.log("usrpw: ", this.usrpw);
    console.log("usrrpw: ", this.usrrpw);
    console.log("clicked create account ", Math.random());
  }
  public clickedLogin(){
    console.log("clicked log in ", Math.random());
  }
  public seeUnseePW(towhom: string="pw"){
    if( towhom=="pw" ){
      this.pwtype = this.pwtype=="password"?"text":"password";
    }else{
      this.rpwtype = this.rpwtype=="password"?"text":"password";
    }
  }
}
