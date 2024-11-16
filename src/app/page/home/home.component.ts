import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public clickedAcc(){
    console.log("account clicked ", Math.random());
  }
  public clickedLDmode(){
    console.log("light mode clicked: ", Math.random());
  }
  public clickedLogin(){
    console.log("clicked log in: ", Math.random());
  }
  public clickedSignup(){
    console.log("clicked sign up: ", Math.random());
  }
  public clickedStartquiz(){
    console.log("clicked start quiz: ", Math.random());
  }
  public clickedB2top(){
    console.log("clicked back to top: ", Math.random());
  }
  public clickedLang(){
    console.log("clicked language: ", Math.random());
  }
}
