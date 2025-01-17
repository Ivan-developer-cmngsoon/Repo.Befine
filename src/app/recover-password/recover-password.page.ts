import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {
  email: string = ''; // Correo electrónico del usuario
  isLoading: boolean = false; // Indicador de carga
  emailSent: boolean = false; // Indicador de correo enviado

  constructor(private navCtrl: NavController) {}

  /**
   * Simula el envío del enlace de recuperación de contraseña.
   */
  recoverPassword(): void {
    if (!this.email) {
      alert('Por favor, introduce tu correo electrónico.');
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.emailSent = true; // Simula que el correo fue enviado
      console.log('Correo enviado a:', this.email);
    }, 2000); // Simula un retraso de 2 segundos
  }

  /**
   * Navega a la página anterior.
   */
  goBack(): void {
    this.navCtrl.back();
  }
}
