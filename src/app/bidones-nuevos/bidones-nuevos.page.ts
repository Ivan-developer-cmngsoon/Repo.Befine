import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bidones-nuevos',
  templateUrl: './bidones-nuevos.page.html',
  styleUrls: ['./bidones-nuevos.page.scss'],
})
export class BidonesNuevosPage implements OnInit {
  quantity: number = 1; // Cantidad inicial
  totalPrice: number = 5000; // Precio inicial basado en un bidón

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back(); // Navegar a la página anterior
  }

  increaseQuantity() {
    this.quantity++;
    this.calculatePrice();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculatePrice();
    }
  }

  calculatePrice() {
    if (this.quantity === 1) {
      this.totalPrice = 5000;
    } else if (this.quantity === 2) {
      this.totalPrice = 9000;
    } else if (this.quantity === 3) {
      this.totalPrice = 13500;
    } else if (this.quantity === 4) {
      this.totalPrice = 18000;
    } else if (this.quantity === 5) {
      this.totalPrice = 20000;
    } else {
      this.totalPrice = 20000 + (this.quantity - 5) * 4000; // Cada bidón adicional cuesta 4000
    }
  }
  

  buyNow() {
    console.log(`Compra realizada con ${this.quantity} bidones por un total de ${this.totalPrice} CLP.`);
    alert(`¡Gracias por tu compra! Total: ${this.totalPrice} CLP`);
  }
}
