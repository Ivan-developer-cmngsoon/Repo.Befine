import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdDestPageRoutingModule } from './prod-dest-routing.module';

import { ProdDestPage } from './prod-dest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdDestPageRoutingModule
  ],
  declarations: [ProdDestPage]
})
export class ProdDestPageModule {}
