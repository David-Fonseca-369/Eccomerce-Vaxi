import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls:['./password.component.scss'],
  styles: [
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }    
  ]
})
export class PasswordComponent implements OnInit, ControlValueAccessor {

  value!: string;
  isDisabled!: boolean;
  passwordType! : PasswordType;

  @Input() placeholder! : string;
  @Output() changed = new EventEmitter<string>();

  constructor() { 
    this.passwordType = 'password';
  }

  

  ngOnInit(): void {
  }
  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};


  writeValue(value:string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void { //el usuario enciende el foco dentro de la caja de texto
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void{
    this.isDisabled = isDisabled;    
  }


  onKeyup(event: Event): void{
    const {target} = event;
    this.value = (target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur(): void{

  }


  //Mostrar u ocultar el valor de la caja de texto
  togglePassword(): void {
    this.passwordType = this.passwordType == 'password'? 'text' : 'password';

  }




}
