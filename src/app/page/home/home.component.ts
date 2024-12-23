import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: Router){}




  public clickedAcc(): void{
    console.log("account clicked ", Math.random());
  }
  public clickedLDmode(): void{
    console.log("light mode clicked: ", Math.random());
  }
  public clickedLogin(): void{
    this.route.navigate(["login"]);
  }
  public clickedSignup(): void{
    this.route.navigate(["register"]);
  }
  public clickedStartquiz(): void{
    console.log("clicked start quiz: ", Math.random());
  }




  public clickedAboutUs(): void{
    console.log("clicked about us: ", Math.random());
  }
  public clickedCinfo(): void{
    console.log("clicked contact info: ", Math.random());
  }
  public clickedReportProb(): void{
    console.log("clicked report a problem: ", Math.random());
  }

  public clickedFAQ(): void{
    console.log("clicked FAQs: ", Math.random());
  }
  public clickedPrivacyPolicy(): void{
    console.log("clicked privacy policy: ", Math.random());
  }
  public clickedTermsOfService(): void{
    console.log("clicked terms of service: ", Math.random());
  }

  public clickedLang(): void{
    console.log("clicked language: ", Math.random());
  }


  public clickedB2top(): void{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
