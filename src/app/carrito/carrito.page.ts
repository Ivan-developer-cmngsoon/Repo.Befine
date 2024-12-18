import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito', // Nombre del selector consistente con "carrito"
  templateUrl: './carrito.page.html', // Archivo HTML correcto
  styleUrls: ['./carrito.page.scss'] // Archivo de estilos correcto
})
export class CarritoPage implements OnInit {
  cartItems: any[] = []; // Lista de productos en el carrito
  cartTotal: number = 0; // Total general del carrito

  constructor(
    private cartService: CartService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadCart(); // Carga inicial del carrito
  }

  /**
   * Carga los productos del carrito desde el servicio y calcula el total.
   */
  private loadCart(): void {
    this.cartItems = this.cartService.getCart(); // Obtener productos
    this.calculateTotal(); // Calcular el total
  }

  /**
   * Calcula el total de todos los productos en el carrito.
   */
  private calculateTotal(): void {
    this.cartTotal = this.cartService.getTotal(); // Total usando el servicio
  }

  /**
   * Elimina un producto específico del carrito por ID.
   * @param productId ID del producto a eliminar
   */
  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId); // Eliminar producto usando el ID
    this.loadCart(); // Recargar carrito y total
  }

  /**
   * Vacía todo el carrito.
   */
  clearCart(): void {
    this.cartService.clearCart(); // Vaciar carrito
    this.loadCart(); // Actualizar la lista y el total
  }

  /**
   * Regresa a la página anterior usando NavController.
   */
  goBack(): void {
    this.navCtrl.back();
  }

  /**
   * Realiza la acción de pago.
   */
  checkout(): void {
    if (this.cartItems.length > 0) {
      alert(`Total a pagar: $${this.cartTotal}`);
      console.log('Redirigiendo a la página de pago...');
      // Aquí puedes agregar navegación o integración con API de pagos.
    } else {
      alert('El carrito está vacío. No hay nada que pagar.');
    }
  }
}
