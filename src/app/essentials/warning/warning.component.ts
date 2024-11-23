import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.css'
})
export class WarningComponent {
  constructor(){}
  @Input() public title: string = "Warning Title blah ladida blah blah ";
  @Input() public what: string = "Warning description, blah blah blah ladida blah blah blah blah ladida blah blah blah blah ladida blah blah blah blah ladida blah blah blah";
  @Input() public txtNo: string = "Cancel";
  @Input() public txtNo_iconname: string = "delete";
  @Input() public txtYes: string = "Yes";
  @Input() public txtYes_iconname: string = "delete";
  @Output() public clkNo: EventEmitter<string> = new EventEmitter();
  @Output() public clkYes: EventEmitter<string> = new EventEmitter();

  public mclkNo(): void{
    this.clkNo.emit();
  }
  public mclkYes(): void{
    this.clkYes.emit();
  }
}
