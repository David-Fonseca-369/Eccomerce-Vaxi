import { Component, Input, OnInit } from '@angular/core';
export type ButtonType = 'button' | 'submit'; //puede ser de tipo accion o envío

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  //Directiva que define el tipo de boton
  @Input() type: ButtonType;

  constructor() {
    this.type = 'button';
  }

  ngOnInit(): void {}
}
