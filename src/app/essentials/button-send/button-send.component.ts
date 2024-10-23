import { Component } from '@angular/core';
import { Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-button-send',
  templateUrl: './button-send.component.html',
  styleUrl: './button-send.component.css'
})
export class ButtonSendComponent {
  @Input() public btnText: string = "Button Here";
  @Output() btnClick: EventEmitter<string> = new EventEmitter();
  onClick(){
    this.btnClick.emit();
  }
}
