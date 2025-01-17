import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  // Agregar producto al carrito
  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    console.log(this.cart);
  }

  // Obtener todos los productos del carrito
  getCart() {
    return this.cart;
  }

  // Eliminar producto del carrito
  removeFromCart(productName: string) {
    this.cart = this.cart.filter(item => item.name !== productName);
  }

  // Vaciar el carrito
  clearCart() {
    this.cart = [];
  }

  // Calcular el total
  getTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
