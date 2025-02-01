import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController) {}

  // Navegar hacia atrás
  goBack() {
    this.navCtrl.back();
  }

  // Iniciar sesión
  login() {
    console.log('Iniciar sesión presionado');
    alert('¡Sesión iniciada correctamente!');
  }

  // Navegar a registro
  register() {
    console.log('Redirigiendo al registro');
    alert('Redirigiendo a la página de registro...');
  }
}
