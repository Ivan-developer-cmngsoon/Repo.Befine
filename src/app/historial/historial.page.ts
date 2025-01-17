import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  orders: { id: string; date: string; total: number; status: string }[] = []; // Lista de pedidos
  lastOrder: any = null; // Último pedido

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    this.loadOrders(); // Cargar pedidos simulados
  }

  /**
   * Carga una lista simulada de pedidos y establece el último pedido.
   */
  private loadOrders(): void {
    this.orders = [
      { id: '003', date: '2024-01-15', total: 20000, status: 'Cancelado' },
      { id: '002', date: '2024-01-10', total: 75000, status: 'En proceso' },
      { id: '001', date: '2024-01-01', total: 50000, status: 'Entregado' },
    ];

    // El último pedido será el primero en la lista
    this.lastOrder = this.orders[0];
  }

  /**
   * Navega a la página anterior.
   */
  goBack(): void {
    this.navCtrl.back();
  }

  /**
   * Muestra los detalles del pedido seleccionado.
   * @param order Pedido seleccionado.
   */
  viewOrderDetails(order: any): void {
    console.log('Detalles del pedido:', order);
    alert(`Detalles del pedido #${order.id}\nEstado: ${order.status}\nTotal: $${order.total}`);
  }

  /**
   * Devuelve una clase CSS según el estado del pedido.
   * @param status Estado del pedido.
   */
  getOrderStatusClass(status: string): string {
    switch (status) {
      case 'Entregado':
        return 'status-delivered';
      case 'En proceso':
        return 'status-in-progress';
      case 'Cancelado':
        return 'status-canceled';
      default:
        return '';
    }
  }
  /**
 * Repite el pedido seleccionado, añadiéndolo al carrito.
 * @param order Pedido a repetir.
 */
repeatOrder(order: any): void {
  console.log('Repetir Pedido:', order);

  // Aquí puedes añadir la lógica para agregar los productos del pedido al carrito.
  alert(`El pedido #${order.id} se ha añadido nuevamente al carrito.`);
}

}
