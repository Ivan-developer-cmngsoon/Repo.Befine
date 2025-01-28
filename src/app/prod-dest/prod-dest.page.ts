import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prod-dest',
  templateUrl: './prod-dest.page.html',
  styleUrls: ['./prod-dest.page.scss'],
})
export class ProdDestPage {
  constructor(private navCtrl: NavController) {}

  // Navegar hacia atrás
  goBack() {
    this.navCtrl.back();
  }

  // Añadir al carrito
  addToCart(product: string) {
    console.log(`${product} añadido al carrito`);
    alert(`${product} ha sido añadido al carrito.`);
  }
}
