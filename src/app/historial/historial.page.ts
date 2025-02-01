import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage {
  pedidos: any[] = [];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.initializePedidos();
  }

  // Inicializar Pedidos de Ejemplo
  private initializePedidos() {
    this.pedidos = [
      {
        id: 101,
        fecha: '2025-01-20',
        estado: 'Entregado',
        productos: [
          { nombre: 'Pack Familiar', cantidad: 1, precio: 25000 },
          { nombre: 'Recarga x2', cantidad: 2, precio: 5000 },
        ],
        total: 30000,
      },
      {
        id: 102,
        fecha: '2025-01-15',
        estado: 'En camino',
        productos: [{ nombre: 'Pack Empresarial', cantidad: 1, precio: 80000 }],
        total: 80000,
      },
      {
        id: 103,
        fecha: '2025-01-10',
        estado: 'Cancelado',
        productos: [{ nombre: 'Recarga x3', cantidad: 3, precio: 7500 }],
        total: 7500,
      },
    ];
  }

  // Navegar hacia atrás
  goBack() {
    this.navCtrl.back();
  }

  // Repetir Pedido
  repetirPedido(pedidoId: number) {
    console.log(`Repetir pedido #${pedidoId}`);
    alert(`Pedido #${pedidoId} repetido con éxito.`);
  }
}
