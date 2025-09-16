import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gerente.html',
  styleUrls: ['./gerente.css']
})
export class GerenteComponent {
  
  // Propiedades para vincular con el formulario
  username = '';
  password = '';
  rememberMe = false;

  constructor() { }

  onSubmit(): void {
    console.log('Datos de Gerente:', {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    });
    // Aquí puedes agregar la lógica para enviar los datos a un servicio de autenticación
  }
}