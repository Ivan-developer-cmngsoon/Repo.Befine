import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product } from '../models/product.model';
import { CartService } from 'src/app/services/cart.service'; // Servicio del carrito

@Component({
  selector: 'app-bidones-nuevos',
  templateUrl: './bidones-nuevos.page.html',
  styleUrls: ['./bidones-nuevos.page.scss'],
})
export class BidonesNuevosPage implements OnInit {
  // Producto con el modelo Product
  product: Product = {
    id: 'BIDON20L',
    name: 'Bidón de Agua 20L',
    description: 'Bidón de agua nuevo de 20 litros, ideal para el hogar y oficina.',
    price: 5000,
    imageUrl: 'assets/images/promos3_befine.jpg',
    tags: ['Recién Llegado', 'Popular'],
    category: 'Bidones Nuevos'
  };

  quantity: number = 1; // Cantidad inicial
  totalPrice: number = this.product.price; // Precio total inicial

  constructor(private navCtrl: NavController, private cartService: CartService) {}

  ngOnInit() {
    this.calculatePrice(); // Inicializar precio total
  }

  /**
   * Regresa a la página anterior usando el NavController de Ionic.
   */
  goBack() {
    this.navCtrl.back();
  }

  /**
   * Incrementa la cantidad y actualiza el precio total.
   */
  increaseQuantity() {
    this.quantity++;
    this.calculatePrice();
  }

  /**
   * Decrementa la cantidad (mínimo 1) y actualiza el precio total.
   */
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculatePrice();
    }
  }

 /**
 * Calcula el precio total basado en la cantidad seleccionada.
 * Maneja precios específicos: 5000 para 1 unidad, 4500 para 2-4 unidades y 4000 a partir de 5 unidades.
 * Aplica un tope de 300 unidades.
 */
private calculatePrice() {
  const PRICE_ONE = 5000;            // Precio unitario para 1 bidón
  const PRICE_TWO_TO_FOUR = 4500;    // Precio unitario para 2, 3 y 4 bidones
  const PRICE_FIVE_OR_MORE = 4000;   // Precio unitario para 5 o más bidones
  const MAX_QUANTITY = 300;          // Máximo permitido de unidades

  // Limitar la cantidad al tope máximo
  if (this.quantity > MAX_QUANTITY) {
    this.quantity = MAX_QUANTITY;
  }

  // Calcular precio según la cantidad
  if (this.quantity === 1) {
    this.totalPrice = PRICE_ONE; // 1 unidad = 5000
  } else if (this.quantity >= 2 && this.quantity <= 4) {
    this.totalPrice = this.quantity * PRICE_TWO_TO_FOUR; // 2-4 unidades = 4500 por unidad
  } else if (this.quantity >= 5) {
    this.totalPrice = this.quantity * PRICE_FIVE_OR_MORE; // 5 o más = 4000 por unidad
  } else {
    this.totalPrice = 0; // Manejo de casos inesperados (seguridad adicional)
  }
}

  /**
   * Añade el producto actual al carrito usando CartService.
   */
  addToCart() {
    const productToAdd = {
      ...this.product,
      quantity: this.quantity,
      totalPrice: this.totalPrice
    };
    this.cartService.addToCart(productToAdd);
    console.log('🛒 Producto añadido al carrito:', productToAdd);
  }
}
