import { Component } from '@angular/core';
import { Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-button-acc',
  templateUrl: './button-acc.component.html',
  styleUrl: './button-acc.component.css'
})
export class ButtonAccComponent {
  @Input() public btnText: string = "Button Here";
  @Output() btnClick: EventEmitter<string> = new EventEmitter();
  onClick(){
    this.btnClick.emit();
  }
}
