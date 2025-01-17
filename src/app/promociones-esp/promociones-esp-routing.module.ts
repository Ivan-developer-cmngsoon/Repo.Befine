import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocionesEspPage } from './promociones-esp.page';

const routes: Routes = [
  {
    path: '',
    component: PromocionesEspPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocionesEspPageRoutingModule {}
