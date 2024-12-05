import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor() {}

  repetirPedido() {
    console.log('Repetir último pedido');
    // Aquí puedes agregar la lógica para repetir el último pedido.
  }

  realizarPedido() {
    console.log('Realizar nuevo pedido');
    // Aquí puedes agregar la lógica para crear un nuevo pedido.
  }

  mostrarMenu() {
    console.log('Mostrar menú');
    // Aquí puedes agregar la lógica para navegar al menú o mostrar opciones adicionales.
  }
}
