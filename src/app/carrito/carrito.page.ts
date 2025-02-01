import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  cartItems: { product: { name: string; description: string; imageUrl: string; price: number }; quantity: number; totalPrice: number }[] = [];
  totalCartPrice: number = 0;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.loadCartItems();
    this.calculateTotalCartPrice();
  }

  goBack() {
    this.navCtrl.back();
  }

  loadCartItems() {
    this.cartItems = [
      {
        product: {
          name: 'Pack Familiar',
          description: 'Incluye 3 recargas de agua + 1 dispensador portátil.',
          imageUrl: 'assets/images/promos2_befine.jpg',
          price: 25000,
        },
        quantity: 1,
        totalPrice: 25000,
      },
      {
        product: {
          name: 'Pack Empresarial',
          description: 'Incluye dispensador frío/caliente + 5 recargas.',
          imageUrl: 'assets/images/empresas_befine.jpg',
          price: 80000,
        },
        quantity: 2,
        totalPrice: 160000,
      },
    ];
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
    this.updateTotalPrice(index);
    this.calculateTotalCartPrice();
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateTotalPrice(index);
      this.calculateTotalCartPrice();
    }
  }

  updateTotalPrice(index: number) {
    this.cartItems[index].totalPrice = this.cartItems[index].quantity * this.cartItems[index].product.price;
  }

  calculateTotalCartPrice() {
    this.totalCartPrice = this.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.calculateTotalCartPrice();
  }

  checkout() {
    console.log('Compra finalizada:', this.cartItems);
    alert(`¡Compra realizada! Total: ${this.totalCartPrice} CLP`);
    this.cartItems = [];
    this.totalCartPrice = 0;
  }
}
