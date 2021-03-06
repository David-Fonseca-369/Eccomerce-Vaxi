import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';

//Referencia al selec de Angular material
import {MatSelectModule} from '@angular/material/select'


@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ], 
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
