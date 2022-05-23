import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  // ara forzar la inicializacion '!'
  @Input() label!: string;
  @Input() required! : boolean;
  @Input() isInline!: boolean; //para ver si estan en llineas separadas o uno tras otro
  @Input() control!: AbstractControl;
  @Input() patternError! : string;
   constructor() { 
    this.isInline = true;
  }

  ngOnInit(): void {
  }

  //Para saber si la caja de texto tiene errores
  hasError(): boolean{
    //el que hacer referencia al control es el control abstract
    //valida si existe el control/validar si esta invalido/validar si el usuario ya interactuó con el control
    return this.control && this.control.invalid && this.control.touched;
  }

  get errorKey(){
    return this.control && this.control.errors && Object.keys(this.control.errors)[0]; //devuelva el error en posición cero
  }

}
