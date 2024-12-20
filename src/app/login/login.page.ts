import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Correo electrónico ingresado
  password: string = ''; // Contraseña ingresada

  constructor(private navCtrl: NavController) {}

  /**
   * Simula el inicio de sesión del usuario.
   */
  login(): void {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Validar formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }
  
    // Simulación de inicio de sesión
    if (this.email === 'test@example.com' && this.password === '123456') {
      console.log('Inicio de sesión exitoso');
      this.navCtrl.navigateRoot('/cuenta'); // Redirige a la página de cuenta
    } else {
      console.log('Credenciales incorrectas');
      alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    }
  }
  
}
