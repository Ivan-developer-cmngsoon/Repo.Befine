import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Ruta principal: redirige a "home" si no se especifica un path
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Ruta para la página de inicio
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // Ruta para la página de cupones
  {
    path: 'cupones',
    loadChildren: () => import('./cupones/cupones.module').then(m => m.CuponesPageModule)
  },
  // Ruta para la página de historial (mis pedidos)
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule)
  },
  // Ruta para la página de cuenta
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
