import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-promociones-esp',
  templateUrl: './promociones-esp.page.html',
  styleUrls: ['./promociones-esp.page.scss'],
})
export class PromocionesEspPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // Navegar a la página anterior
  }

  addToCart(product: string) {
    console.log(`${product} añadido al carrito`);
    alert(`${product} ha sido añadido al carrito.`);
  }
}
