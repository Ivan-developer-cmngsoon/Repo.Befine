import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage {

    constructor(private navCtrl: NavController) {}
  
    goBack() {
      this.navCtrl.back(); // Navegar a la página anterior
    }
  
    addToCart(product: string) {
      console.log(`${product} añadido al carrito`);
      alert(`${product} ha sido añadido al carrito.`);
    }
  }
