import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() public btnText: string = "Button Here";
  @Input() public iconname: string = "redo";

  @Input() public style: string = "normal-style"; // color, bg
  @Input() public isBold: string = "";  // font-weight
  @Input() public size: string = "normal-size";  // padding

  @Output() btnClick: EventEmitter<string> = new EventEmitter();

  public icondir: string = "";
  public onClick(){
    // this.btnClick.emit("hello, I'm from button component");
    this.btnClick.emit();
  }
  public onHover(){
    this.icondir = "/icons/pc1/icon_"+this.iconname+".svg";
  }
  public onHoverDone(){
    if( this.iconname!="" && this.style=="normal-style"){
      this.icondir = "/icons/pc3/icon_"+this.iconname+".svg";
    }else if( this.iconname!="" ){
      this.icondir = "/icons/pc1/icon_"+this.iconname+".svg";
    }
  }
  public onPressing(){
    if( this.iconname!="" && this.style!="outline-style"){
      this.icondir = "/icons/pc3/icon_"+this.iconname+".svg";
    }
  }

  ngOnInit(){
    this.onHoverDone();
  }
}
