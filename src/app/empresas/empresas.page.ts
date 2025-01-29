import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {
  quantity: number = 1; // Cantidad inicial
  totalPrice: number = 2500; // Precio inicial basado en 1 recarga a empresas

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
    this.totalPrice = this.quantity * 2500; // Precio fijo de $2500 por recarga
  }

  // Comprar ahora
  buyNow() {
    console.log(`Compra realizada con ${this.quantity} recargas para empresas por un total de ${this.totalPrice} CLP.`);
    alert(`¡Gracias por tu compra! Total: ${this.totalPrice} CLP`);
  }
}
