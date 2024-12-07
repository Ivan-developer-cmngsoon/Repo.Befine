import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdDestPage } from './prod-dest.page';

const routes: Routes = [
  {
    path: '',
    component: ProdDestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdDestPageRoutingModule {}
