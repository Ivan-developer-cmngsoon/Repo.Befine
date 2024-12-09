import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.page.html',
  styleUrls: ['./recargas.page.scss'],
})
export class RecargasPage implements OnInit {

  constructor(private navCtrl: NavController) {} // Inyectar NavController

  ngOnInit() {
  }

  // Función para volver a la página anterior
  goBack() {
    this.navCtrl.back(); // Navegar a la página anterior
  }
}
