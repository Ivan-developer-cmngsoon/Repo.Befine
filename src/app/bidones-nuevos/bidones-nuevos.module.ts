import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidonesNuevosPageRoutingModule } from './bidones-nuevos-routing.module';

import { BidonesNuevosPage } from './bidones-nuevos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidonesNuevosPageRoutingModule
  ],
  declarations: [BidonesNuevosPage]
})
export class BidonesNuevosPageModule {}
