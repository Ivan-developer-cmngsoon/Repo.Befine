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
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'prod-dest',
    loadChildren: () => import('./prod-dest/prod-dest.module').then( m => m.ProdDestPageModule)
  },
  {
    path: 'recargas',
    loadChildren: () => import('./recargas/recargas.module').then( m => m.RecargasPageModule)
  },
  {
    path: 'packs',
    loadChildren: () => import('./packs/packs.module').then( m => m.PacksPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'promociones-esp',
    loadChildren: () => import('./promociones-esp/promociones-esp.module').then( m => m.PromocionesEspPageModule)
  },
  {
    path: 'bidones-nuevos',
    loadChildren: () => import('./bidones-nuevos/bidones-nuevos.module').then( m => m.BidonesNuevosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
