import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage {
  constructor(private navCtrl: NavController) {}

  // Navegar hacia atrás
  goBack() {
    this.navCtrl.back();
  }

  // Función para iniciar sesión
  login() {
    console.log('Iniciar sesión presionado');
    alert('Redirigiendo a la página de inicio de sesión...');
  }

  // Función para registrarse
  register() {
    console.log('Registrarse presionado');
    alert('Redirigiendo a la página de registro...');
  }
}
