import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargasPageRoutingModule } from './recargas-routing.module';

import { RecargasPage } from './recargas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargasPageRoutingModule
  ],
  declarations: [RecargasPage]
})
export class RecargasPageModule {}
