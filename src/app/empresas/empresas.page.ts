import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {
  product: Product = {
    id: 'PACK_EMPRESA',
    name: 'Recargas para Empresas',
    description: 'Incluye dispensadores y recargas personalizadas para empresas.',
    price: 120000, // Precio inicial base para empresas
    imageUrl: 'assets/images/empresas_befine.jpg',
    tags: ['Exclusivo'],
    category: 'Empresas',
  };

  quantity: number = 1; // Cantidad inicial
  totalPrice: number = this.product.price; // Precio total inicial

  constructor(private navCtrl: NavController, private cartService: CartService) {}

  ngOnInit() {
    this.calculatePrice(); // Calcula el precio al iniciar
  }

  /**
   * Regresa a la página anterior.
   */
  goBack(): void {
    this.navCtrl.back();
  }

  /**
   * Incrementa la cantidad seleccionada.
   */
  increaseQuantity(): void {
    this.quantity++;
    this.calculatePrice();
  }

  /**
   * Decrementa la cantidad seleccionada, con un mínimo de 1.
   */
  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculatePrice();
    }
  }

  /**
   * Calcula el precio total basado en la cantidad seleccionada.
   */
  calculatePrice(): void {
    this.totalPrice = this.product.price * this.quantity;
  }

  /**
   * Añade el producto al carrito con la cantidad y el precio actualizados.
   */
  addToCart(): void {
    const productToAdd = {
      ...this.product,
      quantity: this.quantity,
      totalPrice: this.totalPrice
    };

    this.cartService.addToCart(productToAdd);
    console.log(`${this.product.name} añadido al carrito:`, productToAdd);
    alert(`${this.product.name} ha sido añadido al carrito.`);
  }
}
