import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacksPageRoutingModule } from './packs-routing.module';

import { PacksPage } from './packs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacksPageRoutingModule
  ],
  declarations: [PacksPage]
})
export class PacksPageModule {}
