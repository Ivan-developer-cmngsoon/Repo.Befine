import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bidones-nuevos',
  templateUrl: './bidones-nuevos.page.html',
  styleUrls: ['./bidones-nuevos.page.scss'],
})
export class BidonesNuevosPage implements OnInit {
  quantity: number = 1; // Cantidad inicial
  totalPrice: number = 5000; // Precio inicial basado en 1 bidón

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  // Navegar hacia atrás
  goBack() {
    this.navCtrl.back();
  }

  // Incrementar cantidad
  increaseQuantity() {
    this.quantity++;
    this.calculatePrice();
  }

  // Decrementar cantidad
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculatePrice();
    }
  }

  // Calcular el precio total
  calculatePrice() {
    if (this.quantity === 1) {
      this.totalPrice = 5000;
    } else if (this.quantity === 2) {
      this.totalPrice = 9000;
    } else if (this.quantity === 3) {
      this.totalPrice = 13500;
    } else if (this.quantity === 4) {
      this.totalPrice = 18000;
    } else {
      this.totalPrice = this.quantity * 4000; // Precio unitario para 5 o más bidones
    }
  }

  // Comprar ahora
  buyNow() {
    console.log(`Compra realizada con ${this.quantity} bidones nuevos por un total de ${this.totalPrice} CLP.`);
    alert(`¡Gracias por tu compra! Total: ${this.totalPrice} CLP`);
  }
}
