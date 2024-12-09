import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.page.html',
  styleUrls: ['./packs.page.scss'],
})
export class PacksPage implements OnInit {
  constructor(private navCtrl: NavController) {} // Inyectar NavController

  ngOnInit() {}

  // Función para volver a la página anterior
  goBack() {
    this.navCtrl.back(); // Navegar a la página anterior
  }

  // Función para añadir productos al carrito
  addToCart(product: string) {
    console.log(`${product} añadido al carrito.`);
    alert(`¡${product} ha sido añadido al carrito!`);
  }
}
