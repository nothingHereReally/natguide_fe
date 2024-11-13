import { Component } from '@angular/core';
import { Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() public btnText: string = "Button Here";
  @Input() public icondir: string = "/icons/icon_redo.svg";
  @Output() btnClick: EventEmitter<string> = new EventEmitter();
  onClick(){
    // this.btnClick.emit("hello, I'm from button component");
    this.btnClick.emit();
  }
}
