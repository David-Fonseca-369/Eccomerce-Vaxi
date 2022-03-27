import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from '@app/Shared'; //importo mis boton para que puedan ser usados en este componente

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, SharedRoutingModule, ButtonsModule],
})
export class SharedModule {}
