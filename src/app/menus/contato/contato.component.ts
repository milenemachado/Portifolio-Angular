import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: false,
  
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  emailControl = new FormControl('');
  updateErrorMessage(): void {
    console.log('Atualizando a mensagem de erro');
  }

}
