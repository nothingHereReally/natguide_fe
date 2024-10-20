import { Component } from '@angular/core';
import { Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrl: './button-outline.component.css'
})
export class ButtonOutlineComponent {
  @Input() public btnText: string = "Button Here";
  @Output() btnClick: EventEmitter<string> = new EventEmitter();
  onClick(){
    this.btnClick.emit();
  }
}
