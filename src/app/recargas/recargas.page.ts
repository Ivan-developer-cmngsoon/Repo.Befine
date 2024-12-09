import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.page.html',
  styleUrls: ['./recargas.page.scss'],
})
export class RecargasPage implements OnInit {
  quantity: number = 1; // Cantidad inicial
  totalPrice: number = 2500; // Precio inicial basado en una recarga

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
      this.totalPrice = 2500;
    } else if (this.quantity === 2) {
      this.totalPrice = 5000;
    } else if (this.quantity === 3) {
      this.totalPrice = 7000;
    } else if (this.quantity === 4) {
      this.totalPrice = 9000;
    } else {
      this.totalPrice = 8000 + (this.quantity - 4) * 2000; // 2000 por cada recarga adicional
    }
  }

  buyNow() {
    console.log(`Compra realizada con ${this.quantity} recargas por un total de ${this.totalPrice} CLP.`);
    alert(`¡Gracias por tu compra! Total: ${this.totalPrice} CLP`);
  }
}
