import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrl: './forgotpw.component.css'
})
export class ForgotpwComponent {
  public usremail: string = "";

  public clickedSubmitEmail(){
    console.log("email: ", this.usremail);
    console.log("clicked submit: ", Math.random());
  }
  public clickedCancel(){
    console.log("clicked cancel: ", Math.random());
  }
}
