import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-promociones-esp',
  templateUrl: './promociones-esp.page.html',
  styleUrls: ['./promociones-esp.page.scss'],
})
export class PromocionesEspPage {
  constructor(private navCtrl: NavController) {}

  // Navegar hacia atrás
  goBack() {
    this.navCtrl.back();
  }

  // Añadir al carrito
  addToCart(packName: string) {
    console.log(`${packName} añadido al carrito`);
    // Aquí puedes agregar lógica adicional para gestionar el carrito.
  }
}
