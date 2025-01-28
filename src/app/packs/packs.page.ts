import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.page.html',
  styleUrls: ['./packs.page.scss'],
})
export class PacksPage {
  products = [
    {
      name: 'Pack Eléctricos Compresor',
      description: '1 Dispensador eléctrico con compresor + 3 recargas de agua.',
      price: 120000,
      imageUrl: 'assets/images/promos_befine.jpg',
    },
    {
      name: 'Pack Eléctricos Ventilados',
      description: '1 Dispensador eléctrico ventilado + 3 recargas de agua.',
      price: 110000,
      imageUrl: 'assets/images/promos_befine.jpg',
    },
    {
      name: 'Pack Inicial',
      description: '1 Dispensador USB o ambiental + 3 recargas de agua.',
      price: 18000,
      imageUrl: 'assets/images/promos2_befine.jpg',
    },
    {
      name: 'Dispensador USB',
      description: 'Dispensador USB portátil, fácil de usar y transportar.',
      price: 15000,
      imageUrl: 'assets/images/catalogo_befine.jpg',
    },
  ];

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
