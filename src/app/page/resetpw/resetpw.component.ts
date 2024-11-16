import { Component } from '@angular/core';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrl: './resetpw.component.css'
})
export class ResetpwComponent {
  public usrpw: string = "";
  public usrrpw: string = "";
  public typepw: string = "password";
  public typerpw: string = "password";
  public eyepwdir: string = "/icons/sc1/icon_unsee.svg";
  public eyerpwdir: string = "/icons/sc1/icon_unsee.svg";

  public clickedResetpw(){
    console.log("pw: ", this.usrpw);
    console.log("r pw: ", this.usrrpw);
    console.log("clicked reset pw: ", Math.random());
  }
  public typePW(what: string = "pw"){
    if( what=="pw" ){
      this.typepw = this.typepw=="password"?"text":"password";
      this.eyepwdir = this.typepw=="password"?"/icons/sc1/icon_unsee.svg":"/icons/sc1/icon_see.svg";
    }else{
      this.typerpw = this.typerpw=="password"?"text":"password";
      this.eyerpwdir = this.typerpw=="password"?"/icons/sc1/icon_unsee.svg":"/icons/sc1/icon_see.svg";
    }
  }
}
