import { Component } from '@angular/core';

@Component({
  selector: 'app-barra',
  standalone: false,
  
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.scss'
})
export class BarraComponent {
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
    console.log('menuActive:', this.menuActive)
  }

}
