import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  constructor(private navCtrl: NavController) {} // Inyectar NavController

  // Función para alternar el menú radial
  toggleMenu() {
    const menu = document.querySelector('.radial-menu');
    menu?.classList.toggle('open');
    const icon = document.querySelector('.main-btn ion-icon');
    if (menu?.classList.contains('open')) {
      icon?.setAttribute('name', 'close-outline');
    } else {
      icon?.setAttribute('name', 'menu-outline');
    }
  }

  // Función para volver a la página anterior
  goBack() {
    this.navCtrl.back(); // Navegar a la página anterior
  }
}
