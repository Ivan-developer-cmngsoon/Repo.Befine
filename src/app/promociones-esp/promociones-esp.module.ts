import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesEspPageRoutingModule } from './promociones-esp-routing.module';

import { PromocionesEspPage } from './promociones-esp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesEspPageRoutingModule
  ],
  declarations: [PromocionesEspPage]
})
export class PromocionesEspPageModule {}
