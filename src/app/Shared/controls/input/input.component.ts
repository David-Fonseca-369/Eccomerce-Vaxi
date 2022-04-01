import {
  Component,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'; //para que se comporte como un compoenende

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    //Es necesario agregarlos Cap. 53 'Creación de elementos input'
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = ''; //label que acompaña a la caja de texto
  @Output() changed = new EventEmitter<string>(); //evento que emite cada vez que un valor cambia al interior de la caja de texto

  value: string = '';
  isDisabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  //dos meetos privados para acceder a los metodos registreOnTouched y Change
  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  //Para que este input se comporte como parte de un formulario se necesitan implementar los siguientes metodos
  //metodos de control value accesor

  //Se deben implementar estos metodos por la interfaz de 'ControlValueAccessor' que se implemento
  writeValue(value: string): void {
    //Agregar logica para que el usuario pueda capturar lo que el usuario va ha agregar a la caja de texto
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyUp(event: Event): void {
    const { target } = event; //obtenga el target que se obtiene como parametro
    this.value = (target as HTMLInputElement).value; //al target obtenido se forza a parsearse como si fuera un input elelement(caja de texto)
    //para quye se actualice el escalator
    this.propagateChange(this.value);

    //dispara el evento con el nuevo valor que el usuario escribe
    this.changed.emit(this.value);
  }

  onBlur(): void {
    //cuando la caja de texto pierda el foto
    this.propagateTouched(); //ya el cursos no esta apuntando a la caja de texto
  }
}
