import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  isLoggedIn: boolean = false; // Estado de autenticación
  userName: string = ''; // Nombre del usuario
  userEmail: string = ''; // Correo del usuario
  userAddresses: string[] = []; // Direcciones del usuario
  orderHistory: { id: string; date: string; total: number; status: string }[] = []; // Historial de pedidos

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    this.checkAuthentication(); // Verificar si el usuario está autenticado
  }

  /**
   * Simula la verificación de si el usuario está autenticado.
   * En el futuro, se conectará a un servicio de autenticación.
   */
  private checkAuthentication(): void {
    this.isLoggedIn = Math.random() > 0.5; // Simula si el usuario está autenticado o no

    if (this.isLoggedIn) {
      // Si está autenticado, asignar valores simulados
      this.userName = 'Carlos Pérez';
      this.userEmail = 'carlos.perez@example.com';
      this.userAddresses = ['Calle 123, Ciudad', 'Avenida 456, Ciudad'];
      this.orderHistory = [
        { id: '001', date: '2024-01-01', total: 50000, status: 'Entregado' },
        { id: '002', date: '2024-01-10', total: 75000, status: 'En proceso' },
      ];
    }
  }

  /**
   * Simula el cierre de sesión del usuario.
   */
  logout(): void {
    console.log('Cerrando sesión...');
    this.isLoggedIn = false; // Cambiar el estado de autenticación
    this.navCtrl.navigateRoot('/login'); // Redirigir al page de login
  }

  /**
   * Navega a la página anterior.
   */
  goBack(): void {
    this.navCtrl.back();
  }
}
