import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItem, Value } from '@app/models/frontend';
export { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true,
    },
  ],
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  value!: Value[];
  isDisabled!: boolean;

  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value[]>();

  constructor() {}

  ngOnInit(): void {}

  private propagateChange: any = () => {};

  writeValue(value: Value[]): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    
  }


  setDisabledState(isDisabled : boolean): void{
    this.isDisabled = isDisabled
  }
}
