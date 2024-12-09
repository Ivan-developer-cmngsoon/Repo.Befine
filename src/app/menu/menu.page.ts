import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  toggleMenu() {
    const menu = document.querySelector('.radial-menu');
    menu?.classList.toggle('open');
    const icon = document.querySelector('.main-btn ion-icon');
    if (menu?.classList.contains('open')) {
      icon?.setAttribute('name', 'close-outline');
    } else {
      icon?.setAttribute('name', 'menu-outline');
    }
  }
  
}
