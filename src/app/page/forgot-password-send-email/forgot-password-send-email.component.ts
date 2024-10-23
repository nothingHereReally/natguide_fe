import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password-send-email',
  templateUrl: './forgot-password-send-email.component.html',
  styleUrl: './forgot-password-send-email.component.css'
})
export class ForgotPasswordSendEmailComponent {
  public usremail: string = "";

  public clickedSubmit(){
    console.log("usremail: ", this.usremail);
    console.log("clicked Submit email ", Math.random());
  }
  public clickedCancel(){
    console.log("clicked Cancel forgot pw ", Math.random());
  }
}
