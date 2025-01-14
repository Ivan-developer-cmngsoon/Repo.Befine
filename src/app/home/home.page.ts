import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  // Variable para almacenar el color actual del ícono
  iconColor: string = '#0066cc';

  // Colores para la animación
  private colors: string[] = ['#0066cc', '#0099ff', '#00ccff', '#33ccff'];

  constructor() {
    this.startIconAnimation();
  }

  // Método para iniciar la animación del ícono
  startIconAnimation() {
    let colorIndex = 0;

    setInterval(() => {
      // Cambia el color del ícono al siguiente en la lista
      this.iconColor = this.colors[colorIndex];

      // Incrementa el índice o reinicia si llega al final
      colorIndex = (colorIndex + 1) % this.colors.length;
    }, 1000); // Cambia cada segundo
  }

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
