import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidonesNuevosPage } from './bidones-nuevos.page';

const routes: Routes = [
  {
    path: '',
    component: BidonesNuevosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidonesNuevosPageRoutingModule {}
