import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.page.html',
  styleUrls: ['./packs.page.scss'],
})
export class PacksPage implements OnInit {
  products: { product: Product; quantity: number; totalPrice: number }[] = []; // Lista de productos con cantidad y precio total

  constructor(
    private navCtrl: NavController,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.initializeProducts();
  }

  /**
   * Inicializa la lista de productos con cantidad y precio total inicial.
   */
  private initializeProducts(): void {
    const productList: Product[] = [
      {
        id: 'PACK_ELECTRIC_COMPRESSOR',
        name: 'Pack Eléctricos Compresor',
        description: '1 Dispensador eléctrico con compresor + 3 recargas de agua.',
        price: 120000,
        imageUrl: 'assets/images/promos_befine.jpg',
      },
      {
        id: 'PACK_ELECTRIC_VENTILATED',
        name: 'Pack Eléctricos Ventilados',
        description: '1 Dispensador eléctrico ventilado + 3 recargas de agua.',
        price: 110000,
        imageUrl: 'assets/images/promos_befine.jpg',
      },
      {
        id: 'PACK_INICIAL',
        name: 'Pack Inicial',
        description: '1 Dispensador USB o ambiental + 3 recargas de agua.',
        price: 18000,
        imageUrl: 'assets/images/promos2_befine.jpg',
      },
      {
        id: 'DISPENSADOR_USB',
        name: 'Dispensador USB',
        description: 'Dispensador USB portátil, fácil de usar y transportar.',
        price: 15000,
        imageUrl: 'assets/images/catalogo_befine.jpg',
      },
    ];

    // Inicializa cada producto con cantidad 1 y precio total igual al precio base
    this.products = productList.map((p) => ({
      product: p,
      quantity: 1,
      totalPrice: p.price,
    }));
  }

  /**
   * Incrementa la cantidad de un producto.
   */
  increaseQuantity(index: number): void {
    const item = this.products[index];
    item.quantity++;
    this.calculateTotalPrice(index);
  }

  /**
   * Decrementa la cantidad de un producto.
   */
  decreaseQuantity(index: number): void {
    const item = this.products[index];
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotalPrice(index);
    }
  }

  /**
   * Calcula el precio total de un producto según su cantidad.
   */
  private calculateTotalPrice(index: number): void {
    const item = this.products[index];
    item.totalPrice = item.product.price * item.quantity;
  }

  /**
   * Añade un producto al carrito.
   */
  addToCart(index: number): void {
    const item = this.products[index];
    this.cartService.addToCart({
      ...item.product,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    });
    console.log(`${item.product.name} añadido al carrito.`);
    alert(`¡${item.product.name} ha sido añadido al carrito con ${item.quantity} unidades!`);
  }

  /**
   * Regresa a la página anterior.
   */
  goBack(): void {
    this.navCtrl.back();
  }
}
