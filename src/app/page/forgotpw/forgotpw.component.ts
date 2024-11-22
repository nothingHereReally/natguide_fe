import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrl: './forgotpw.component.css'
})
export class ForgotpwComponent {
  public usremail: string = "";




  constructor(private route: Router){}




  public clickedSubmitEmail(){
    console.log("email: ", this.usremail);
    console.log("clicked submit: ", Math.random());
  }
  public clickedCancel(){
    this.route.navigate(["login"]);
  }
}
