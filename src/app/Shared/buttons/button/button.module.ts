import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [
    ButtonComponent, //Indico que exporte el buton para que otras lo puedan usar
  ],
})
export class ButtonModule {}
