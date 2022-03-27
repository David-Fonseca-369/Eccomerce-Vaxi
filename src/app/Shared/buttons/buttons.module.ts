import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule, //importo el botón
  ],

  exports: [
    //exporto el boton
    ButtonModule,
  ],
})
export class ButtonsModule {}
